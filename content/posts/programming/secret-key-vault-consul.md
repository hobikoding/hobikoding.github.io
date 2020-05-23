---
title: Management Secret Key with Vault and Consul
date: 2020-05-19T13:44:40+07:00
draft: false
description: manajemen secret key with consul and vault, cara integrasi vault dengan consul, menghubungkan vault dengan consul
keywords: vault, consul, infrastructure
thumbnail: /img/secret-key-vault-consul/thumbnail.jpg
source: https://unsplash.com/@claybanks
topic: [vault, consul, infrastructure]
slug: secret-key-vault-consul
github: posts/secret-key-vault-consul.md
author: maslul
---

Ketika develop aplikasi, pasti tidak lepas dari beberapa konfigurasi. Misalnya database, redis, api-key, dan secret key lainnya.

Cara termudah untuk menaruh konfigurasi tersebut biasanya di file kusus bernama `.env`.

Namun hal ini menjadi kendala ketika misalnya mobile apps kita mengalami perubahan konfigurasi, tentu kita harus menggantinya kembali konfigurasi tersebut di file `.env` kemudian mendeploy ulang aplikasi kita dan merilisnya di playstore/appstore.

Kemudian user harus mendownload untuk mendapatkan update dari konfigurasi terbarunya.

Namun sayangnya bug tersebut sangat kritikal sehingga aplikasi anda tidak bisa berjalan sama sekali jika user belum update aplikasi tersebut, dan hal itu memerlukan waktu yang cukup lama untuk deploy ulang, menunggu acc dari appstore/playstore, kemudian meminta setiap user mengupdate aplikasi mereka kalau tidak aplikasi tersebut tidak dapat berjalan.

Sangat merugikan bukan!

## Manajemen Secret Key

Namun bayangkan ketika konfigurasi aplikasi anda diletakan dalam suatu service sendiri, sehingga ketika terjadi perubahan secret key hanya tinggal mengubah service tersebut tanpa user perlu mengupdate aplikasi mereka.

Untungnya terdapat beberapa aplikasi yang dapat menangani hal itu, seperti consul dan vault.

Salah satu fitur dari consul yaitu key-value store, hal ini dapat kita manfaatkan untuk penyimpanan beberapa konfigurasi.

Seperti yang dilansir di [consul vs vault](https://stackshare.io/stackups/consul-vs-vault), bahwa "Consul can be classified as a tool in the **Open Source Service Discovery** category, while Vault is grouped under **Secrets Management**"

>Maka untuk mengamankan secret key belum cukup dengan consul saja, kita harus kombinasikan dengan vault. Hal ini karena data yang di simpan melalui vault akan di-enkripsi terlebih dahulu sehingga secret key kita lebih terjamin keamanannya.

## Preparation

Artikel ini akan menjelaskan beberapa hal:

- Setup vault
- Setup consul
- Integrating vault with consul
- Testing vault

Karena seluruh artikel ini akan sangat berhubungan dengan `docker` dan `docker-compose`, jika kalian belum paham cara menggunakannya saya sarankan untuk mempelajarinya terlebih dahulu.

Namun tidak masalah jika ingin melanjutkan artikel ini, karena seluruh konfigurasi akan saya letakan di docker-compose.

Sebagai gambaran, struktur project yang akan kita buat seperti ini:

```bash
.
├── consul
│   ├── config
│   │   └── consul-config.json
│   └── Dockerfile
├── docker-compose.yml
└── vault
    ├── config
    │   └── vault-config.json
    ├── Dockerfile
    ├── logs
    └── policies
```

## Setup Vault

Pertama buat Dockerfile pada folder vault dan isi dengan kode berikut:

{{< code/title >}}

```ini
vault/Dockerfile
```

```bash
# install alpine os
FROM alpine:3.11

# buat environment valut version
ENV VAULT_VERSION 1.4.1

# membuat folder di docker container
RUN mkdir -p /vault

# install bash, ca-certificates, dan wget
RUN apk --no-cache add \
  bash \
  ca-certificates \
  wget

# install vault
RUN wget --quiet --output-document=/tmp/vault.zip https://releases.hashicorp.com/vault/${VAULT_VERSION}/vault_${VAULT_VERSION}_linux_amd64.zip && \
  unzip /tmp/vault.zip -d /vault && \
  rm -f /tmp/vault.zip && \
  chmod +x /vault

# setup eksekusi vault
ENV PATH="PATH=$PATH:$PWD/vault"

# copy config ke docker container
COPY ./config/vault-config.json /vault/config/vault-config.json

EXPOSE 8200

ENTRYPOINT ["vault"]
```

{{< /code/title >}}

Kemudian pada `vault/config/vault-config.json` masukkan konfigurasi berikut:

{{< code/title >}}

```ini
vault/config/vault-config.json
```

```json
{
  "storage": {
    "consul": {
      "address": "consul:8500",
      "path": "vault/"
    }
  },
  "listener": {
    "tcp": {
      "address": "0.0.0.0:8200",
      "tls_disable": 1
    }
  },
  "ui": true
}
```

{{< /code/title >}}

Pada konfigurasi di atas, kita menyimpan storage vault pada alamat consul kita.

Sebenarnya bisa saja kita hanya menggunakan vault tanpa consul, namun storage harus diubah ke folder lokal. Hal itu tidak akan kita bahas disini.

Jika sudah, pada root folder kita buat `docker-compose.yml` dan masukan konfigurasi vault.

{{< code/title >}}

```ini
docker-compose.yml
```

```yml
version: '3.7'

services:
  vault:
    build:
      context: ./vault
      dockerfile: Dockerfile
    ports:
      - 8200:8200
    volumes:
      - ./vault/config:/vault/config
      - ./vault/policies:/vault/policies
      - ./vault/logs:/vault/logs
    environment:
      VAULT_ADDR: http://127.0.0.1:8200
      VAULT_API_ADDR: http://127.0.0.1:8200
    command: server -config=/vault/config/vault-config.json
    cap_add:
      - IPC_LOCK
    depends_on:
      - consul
    ulimits:
      nproc: 65535
    cap_add:
      - ALL
    privileged: true
    deploy:
      restart_policy:
        condition: on-failure
        delay: 5s
        max_attempts: 3
        window: 120s
```

{{< /code/title >}}

Sampai sini kita sudah mensetup konfigurasi vault. Namun belum bisa dijalankan karena _vault depends_on consul_, sehingga menjalankan consul sebelum menjalankan vault ini.

## Setup Consul

Selanjutnya hampir sama seperti vault, buat file pada `consul/Dockerfile` kemudian masukan kode berikut:

{{< code/title >}}

```ini
consul/Dockerfile
```

```bash
# install alpine os
FROM alpine:3.11

# buat environment consul version
ENV CONSUL_VERSION 1.7.3

# membuat folder di docker container
RUN mkdir /consul

# install bash, ca-certificates, dan wget
RUN apk --no-cache add \
  bash \
  ca-certificates \
  wget

# install consul
RUN wget --quiet --output-document=/tmp/consul.zip https://releases.hashicorp.com/consul/${CONSUL_VERSION}/consul_${CONSUL_VERSION}_linux_amd64.zip && \
  unzip /tmp/consul.zip -d /consul && \
  rm -f /tmp/consul.zip && \
  chmod +x /consul/consul

# setup eksekusi vault
ENV PATH="PATH=$PATH:$PWD/consul"

# copy config ke docker container
COPY ./config/consul-config.json /consul/config/config.json

EXPOSE 8300 8400 8500 8600

ENTRYPOINT ["consul"]
```

{{< /code/title >}}

Kemudian buat juga konfigurasi consulnya pada `consul/config/consul-config.json`.

{{< code/title >}}

```ini
consul/config/consul-config.json
```

```json
{
  "datacenter": "localhost",
  "data_dir": "/consul/data",
  "log_level": "DEBUG",
  "server": true,
  "ui": true,
  "ports": {
    "dns": 53
  }
}
```

{{< /code/title >}}

Kemudian edit kembali file docker-compose.yml menjadi seperti ini:

{{< code/title >}}

```ini
docker-compose.yml
```

```yml
version: '3.7'

services:
  vault:
    build:
      context: ./vault
      dockerfile: Dockerfile
    ports:
      - 8200:8200
    volumes:
      - ./vault/config:/vault/config
      - ./vault/policies:/vault/policies
      - ./vault/logs:/vault/logs
    environment:
      VAULT_ADDR: http://127.0.0.1:8200
      VAULT_API_ADDR: http://127.0.0.1:8200
    command: server -config=/vault/config/vault-config.json
    cap_add:
      - IPC_LOCK
    depends_on:
      - consul
    ulimits:
      nproc: 65535
    cap_add:
      - ALL
    privileged: true
    deploy:
      restart_policy:
        condition: on-failure
        delay: 5s
        max_attempts: 3
        window: 120s

  consul:
    build:
      context: ./consul
      dockerfile: Dockerfile
    ports:
      - 8500:8500
    command: agent -server -bind 0.0.0.0 -client 0.0.0.0 -bootstrap-expect 1 -config-file=/consul/config/config.json
    volumes:
      - ./consul/config/consul-config.json:/consul/config/config.json
```

{{< /code/title >}}

## Integrating Vault with Consul

Oke jika semua sudah selesai, sekarang kita integrasikan consul ini dengan vault.

Oya kalian bisa clone repository ini kalau malas ngoding:

{{<github url="https://github.com/saefullohmaslul/secret-store/" name="Saefulloh Maslul" title="secret-store" description="Storing secret key with vault and consul ">}}

Pertama jalankan terlebih dahulu docker-composenya dengan cara,

```bash
docker-compose up --build
```

- Apabila semua container telah running, selanjutnya masuk ke [localhost:8200](localhost:8200).

  ![init-vault](/img/secret-key-vault-consul/init-vault.png)

- Pada key shares dan key threshold isikan dengan angka 1, kemudian klik initialize.

  >Simpan **initial root token** and **Key 1**. Kemudian klik **continue to unseal**.

  ![init-vault](/img/secret-key-vault-consul/unseal-vault.png)

- Masukkan key 1 ke kolom `master key portion` dan klik unseal.

  ![init-vault](/img/secret-key-vault-consul/sign-vault.png)

- Kemudian masukan `initial root token` dan klik sign.

  ![init-vault](/img/secret-key-vault-consul/consul-kv.png)

Buka link ini [localhost:8500/ui/localhost/kv](http://localhost:8500/ui/localhost/kv), Apabila pada menu Key/Value sudah terdapat folder vault, maka integrasi vault dan consul sudah berhasil.

Integrasi ini bertujuan agar vault menyimpan semua data pada consul, tidak pada storage lokal.

## Testing Vault

Pada testing ini kita akan menyimpan secret key dan mengambilnya dengan perintah GET.

- Buka dashboard vault, kemudian tambahkan `Enable a Secrets Engine`, beri nama sesuai selera kalian, saya sendiri memberi nama `kv`.

- Masukan path dan konfigurasi datanya. Saya memberi nama path `db-config` dan data seperti gambar di bawah. Kemudian klik save.

  ![init-vault](/img/secret-key-vault-consul/create-secret-vault.png)

- Buka terminal dan masukan perintah berikut (ubah `s.8ULvB7xH2ayA9lRSFMLVR2Kz` sesuai initial root token kalian dan `db-config` sesuai path yang akan diambil)

  ```bash
  curl \
    --header "X-Vault-Token: s.8ULvB7xH2ayA9lRSFMLVR2Kz" \
    --request GET \
    http://127.0.0.1:8200/v1/kv/db-config
  ```

  Maka akan memperoleh response seperti ini:

  ```json {hl_lines=["6-8"]}
  {
    "request_id": "b7a0393f-a929-b14c-2017-8a711f08911b",
    "lease_id": "",
    "renewable": false,
    "lease_duration": 2764800,
    "data": {
      "host": "127.0.0.1"
    },
    "wrap_info": null,
    "warnings": null,
    "auth": null
  }
  ```

Nah bisa dilihat kita telah mendapatkan data yang kita store sebelumnya pada vault.

Jika ingin mengintegrasikannya dengan mobile apps, ketika initialize app, sebelum masuk main app, GET terlebih dahulu secret key sehingga apabila ada perubahan akan update ke perubahan terbarunya.
