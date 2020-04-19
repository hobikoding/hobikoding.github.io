---
title: "Custom Domain Gitlab Pages Dengan Idwebhost di Cloudflare + Sertifikat SSL/TLS Gratis"
date: 2019-03-22T18:57:42+07:00
description: "Custom Domain Gitlab Pages Dengan Idwebhost di Cloudflare + Sertifikat SSL/TLS Gratis, Cara custom domain gitlab pages di cloudflare, cara mendapatkan SSL TLS gratis untuk blog, hosting gratis di gitlab dan github pages, pentingnya custom domain blog, manfaat custom domain static site generator, setting idwebhoat di cloudflare"
keywords: "hugo custom domain gitlab pages idwebhost cloudflare SSL/TLS"
draft: false
thumbnail: "https://res.cloudinary.com/hobikoding/image/upload/v1553449712/Artikel/hosting.jpg"
topik: [hugo, gitlab, cloudflare, idwebhost]
slug: custom-domain-gitlab
gitlab: 'artikel/custom-domain-gitlab.md'
---

Punya Gitlab Pages? dan mau custom domain gitlab pages agar terlihat lebih profesional?

Sebenarnya dalam [dokumentasi](https://docs.gitlab.com/ee/user/project/pages/getting_started_part_three.html) gitlab sudah disertakan bagaimana caranya setting domain, baik menggunakan root domain ataupun CNAME.

Namun dokumentasinya cukup menyulitkan jika tidak terlalu paham bahasa inggris, ditambah jika domain yang kita gunakan berasal dari Idwebhost ataupun penyedia domain lain. Karena di dokumentasinya hanya menyertakan bagaimana setting gitlab pages dari cloudflare.

Oke, pada artikel ini akan saya bagi menjadi beberapa bab:

* [Apa itu gitlab pages?](#gitlab-pages)
* [Mengalihkan Idwebhost ke Cloudflare](#idwebhost-ke-cloudflare)
* [Setting SSL/TLS Certificates untuk gitlab pages](#ssl-tls-gratis)
* [Setting domain gitlab pages dari cloudflare](#gitlab-cloudflare)
* [Redirect domain.com ke www.domain.com](#redirect-cloudflare)

# Apa Itu Gitlab Pages{#gitlab-pages}

Bagi yang sudah tau, silakan lanjut saja pada bab selanjutnya.

Gitlab pages adalah sarana yang diberikan Gitlab untuk meng-_host_ file static sehingga dapat ditampilkan layaknya sebuah website.

Selain gitlab juga ada Github pages, keduanya sama saja. Namun jika project anda bukan _opensource_ disarankan menggunakan gitlab. Karena untuk membuat github pages, github meminta kita untuk _opensource_.

## Kenapa harus gitlab/github pages{#pentingnya-gitlab-pages}

Kenapa harus menggunakan sarana mereka?

Sebenarnya tidak harus juga, anda bisa langsung menggunakan hosting kalau mau, tapi dengan sarana gitlab dan github pages kita bisa menghemat pengeluaran untuk menyewa hosting yang mahal, asalkan tadi, file kita adalah file _static_.

## Apa itu file static{#apa-itu-ssg}

Intinya file kita hanya html, css dan javascript. Ketiga file tersebut berjalan di sisi client, bukan di sisi server. Oleh karena itu disebut file static. Baca secara lengkap perbedaan _website static_ dan _dynamic_ di [dokumentasi gitlab](https://about.gitlab.com/2016/06/03/ssg-overview-gitlab-pages-part-1-dynamic-x-static/).

## Kenapa harus custom domain{#pentingnya-custom-domain}

Secara default, gitlab sudah memberikan domain yang cukup bagus, yaitu `*.gitlab.io`. Demikian juga github sudah memberikan domain `*.github.io`.

Namun jika kita ingin mengubahnya menjadi `www``.hobikoding``.com` contohnya, kita harus meng-_custom_ domain kita.

# Mengalihkan Idwebhost ke Cloudflare{#idwebhost-ke-cloudflare}

Salah satu penyedia layanan domain dan hosting adalah idwebhost. Bukan bermaksud promosi karena jujur saja saya juga pernah mengalami hal yang tidak menyenangkan dengan cs idwebhost, saat itu ketika saya order domain organisasi yang katanya bisa di proses dengan surat pengantar organisasi ternyata tidak bisa, harus menyerahkan sk pendirian organisasi dan pertama kalinya saya kecewa dengan idwebhost karena saya telah bayar domain tersebut.

Oke kita lupakan ceritanya, balik lagi ke topik hehe :smiley:

1. Untuk mengalihkan idwebhost ke cloudflare, terlebih dahulu kita perlu [membuat akun cloudflarenya](https://dash.cloudflare.com/sign-up).

1. Jika sudah, tambahkan site dengan menekan menu **Add Site**. Masukan domain, kemudian tekan tombol **Add Site**.

    Cloudflare akan mengquery dns kita, tekan saja **Next**.

1. Kemudian pada menu `select plan`, pilih sesuai kebutuhan. Saya sendiri memilih yang **Free**.

1. Setelah itu cloudflare akan menampilkan dns management kita di idwebhost. Tekan saja **Continue** karena kita bisa mengaturnya lagi nanti.

1. Selanjutnya kita diminta untuk mengganti `nameserver` ke ip yang cloudflare berikan. Contoh

    ```bash
    ns1.idwebhost.id ──────> k******.cloudflare.com
    ns2.idwebhost.id ──────> l******.cloudflare.com
    ```

1. Masuk ke member area idwebhost, kemudian ganti nameserver sesuai ip yang diberikan cloudflare, jika tekan **Ganti Nameserver**.

1. Kembali ke halaman cloudflare, tekan **Continue**

    Proses penggantian nameserver dapat memakan waktu hingga satu hari. Cloudflare akan mengecek penggantian secara berkala, jadi tunggu saja hingga proses penggantian nameserver selesai.

# Setting SSL/TLS Certificates untuk gitlab pages{#ssl-tls-gratis}

Apabila domain kita sudah dialihkan ke cloudflare, selanjutnya kita setting DNS.

1. Masuk ke akun gitlab, kemudian pilih repository yang akan disetting domainnya. Pilih menu ***Pengaturan*** repository -> ***Pages*** -> ***New Domain***

1. Pada kolom Domain masukkan domain custom, contoh: `hobikoding``.com`

1. Kemudian jika anda ingin alamat domainnya menggunakan `https` maka masukkan Certificat PEM dan Key (PEM). Dimana kita mendapatkannya?

1. Caranya yaitu masuk ke menu `Crypto` pada akun cloudflare domain anda, kemudian pada pengaturan SSL:

    * apabila alamat gitlab pages <mark>`https`://gitlabpages.gitlab.io</mark> maka pilih ***Full***.
    * apabila alamat gitlab pages <mark>`http`://gitlabpages.gitlab.io</mark> maka pilih ***Flexible***

1. Selanjutnya pada pengaturan Origin Certificates, buat sertifikat dengan ***Create Certificates***. Isi domain dengan `www``.domain``.com` contoh `www``.hobikoding``.com` kemudian tekan **Next**.
1. Cloudflare akan memberikan Certificat PEM dan Key (PEM), masukkan kedua kode tersebut ke pengaturan domain pada gitlab. Kemudian pada kolom Certificat PEM **tambahkan** [kode berikut](https://about.gitlab.com/2017/02/07/setting-up-gitlab-pages-with-cloudflare-certificates/#step-4-the-trick):

    ```bash
    -----BEGIN CERTIFICATE-----
    MIID/DCCAuagAwIBAgIID+rOSdTGfGcwCwYJKoZIhvcNAQELMIGLMQswCQYDVQQG
    EwJVUzEZMBcGA1UEChMQQ2xvdWRGbGFyZSwgSW5jLjE0MDIGA1UECxMrQ2xvdWRG
    bGFyZSBPcmlnaW4gU1NMIENlcnRpZmljYXRlIEF1dGhvcml0eTEWMBQGA1UEBxMN
    U2FuIEZyYW5jaXNjbzETMBEGA1UECBMKQ2FsaWZvcm5pYTAeFw0xNDExMTMyMDM4
    NTBaFw0xOTExMTQwMTQzNTBaMIGLMQswCQYDVQQGEwJVUzEZMBcGA1UEChMQQ2xv
    dWRGbGFyZSwgSW5jLjE0MDIGA1UECxMrQ2xvdWRGbGFyZSBPcmlnaW4gU1NMIENl
    cnRpZmljYXRlIEF1dGhvcml0eTEWMBQGA1UEBxMNU2FuIEZyYW5jaXNjbzETMBEG
    A1UECBMKQ2FsaWZvcm5pYTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEB
    AMBIlWf1KEKR5hbB75OYrAcUXobpD/AxvSYRXr91mbRu+lqE7YbyyRUShQh15lem
    ef+umeEtPZoLFLhcLyczJxOhI+siLGDQm/a/UDkWvAXYa5DZ+pHU5ct5nZ8pGzqJ
    p8G1Hy5RMVYDXZT9F6EaHjMG0OOffH6Ih25TtgfyyrjXycwDH0u6GXt+G/rywcqz
    /9W4Aki3XNQMUHNQAtBLEEIYHMkyTYJxuL2tXO6ID5cCsoWw8meHufTeZW2DyUpl
    yP3AHt4149RQSyWZMJ6AyntL9d8Xhfpxd9rJkh9Kge2iV9rQTFuE1rRT5s7OSJcK
    xUsklgHcGHYMcNfNMilNHb8CAwEAAaNmMGQwDgYDVR0PAQH/BAQDAgAGMBIGA1Ud
    EwEB/wQIMAYBAf8CAQIwHQYDVR0OBBYEFCToU1ddfDRAh6nrlNu64RZ4/CmkMB8G
    A1UdIwQYMBaAFCToU1ddfDRAh6nrlNu64RZ4/CmkMAsGCSqGSIb3DQEBCwOCAQEA
    cQDBVAoRrhhsGegsSFsv1w8v27zzHKaJNv6ffLGIRvXK8VKKK0gKXh2zQtN9SnaD
    gYNe7Pr4C3I8ooYKRJJWLsmEHdGdnYYmj0OJfGrfQf6MLIc/11bQhLepZTxdhFYh
    QGgDl6gRmb8aDwk7Q92BPvek5nMzaWlP82ixavvYI+okoSY8pwdcVKobx6rWzMWz
    ZEC9M6H3F0dDYE23XcCFIdgNSAmmGyXPBstOe0aAJXwJTxOEPn36VWr0PKIQJy5Y
    4o1wpMpqCOIwWc8J9REV/REzN6Z1LXImdUgXIXOwrz56gKUJzPejtBQyIGj0mveX
    Fu6q54beR89jDc+oABmOgg==
    -----END CERTIFICATE-----
    ```

    >**Catatan:**
    >
    >Antara Certificate PEM dengan kode di atas diberi `enter` sehingga akan nampak seperti ini
    ```bash
    *****************************************************dBGao4sYdE=
    -----END CERTIFICATE-----
    
    -----BEGIN CERTIFICATE-----
    MIID/DCCAuagAwIBAgIID+rOSdTGfGcwCwYJKoZIhvcNAQELMIGLMQswCQYDVQQG
    ```

1. Setelah itu tekan **Create New Domain**

# Setting domain gitlab pages dari cloudflare{#gitlab-cloudflare}

1. Setelah kita membuat domain di gitlab, selanjutnya kita memverifikasi domain tersebut dengan cara masuk ke menu DNS pada akun cloudflare. Kemudian buat pengaturan DNS seperti berikut ini **(dengan catatan)**

1. Atur dns sebagai berikut:

    | Type | Name | Value |
    |:----:|------|------
    | A | `hobikoding``.com` | 35.185.44.232 |
    | CNAME | www | gitlabpages.gitlab.io |
    | TXT | _gitlab-pages-verification-code.www | gitlab-pages-verification-code=********** |

    >**Catatan:**
    >
    >1. 35.185.44.232 merupakan [DNS dari Gitlab](https://about.gitlab.com/2018/07/19/gcp-move-update/#gitlab-pages-and-custom-domains)
    >1. ganti `hobikoding``.com` dengan domain anda
    >1. ganti `gitlabpages.gitlab.io` dengan alamat gitlab anda
    >1. ganti `_gitlab-pages-verification-code.www` dengan kode yang diberikan oleh gitlab pada halaman verifikasi domain sebelumnya
    >1. ganti `gitlab-pages-verification-code=**********` dengan kode yang diberikan oleh gitlab pada halaman verifikasi domain sebelumnya

1. Jika sudah, kembali ke halaman verifikasi gitlab dan tekan **verifikasi**. Apabila gagal, tunggu hingga 24 jam kemudian verifikasi kembali.

# Redirect domain.com ke www.domain.com{#redirect-cloudflare}

Jika anda berhasil mengikuti semua langkah di atas, maka kita sudah bisa mengakses gitlab pages menggunakan domain custom kita seperti `www``.hobikoding``.com`.

Namun ketika kita buang `www`-nya akan terjadi error. Hal ini karena kita belum redirect `domain``.com` ke `www``.domain``.com`.

Cara redirectnya yaitu:

1. Masuk menu Page Rules pada akun cloudflare

1. Buat pengaturan baru dengan menekan tombol Create Page Rule

1. Buat pengaturan **Forwarding URL (301 - Permanent Redirect)** dari `domain``.com/*` ke `https:``//www``.domain``.com/$1` dan dari `domain``.com/` ke `https:``//www``.domain``.com`

1. Tekan Save and Deploy