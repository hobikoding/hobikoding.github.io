---
title: Integrasi gRPC Server Dengan Express Node.js
date: 2020-05-01T11:45:02+07:00
draft: false
description: cara integrasi grpc dengan express node js
keywords: grpc microservices nodejs express
thumbnail: /img/integrasi-grpc-dengan-express-nodejs/thumbnail.jpg
source: https://unsplash.com/@jefflssantos
topic: [microservices, nodejs]
slug: integrasi-grpc-dengan-express-nodejs
github: posts/integrasi-grpc-dengan-express-nodejs.md
author: maslul
---

Sebelumnya saya telah membuat artikel yang membahas [cara membuat microservices grpc di nodejs](http://hobikoding.com/nodejs-grpc-microservices/). Sekarang kita akan mengintegrasikan microservices grpc tersebut dengan expressjs.

Bagi yang belum membaca artikel di atas dan bingung dengan pembahasan pada artikel ini, saya sarankan untuk membaca terlebih dahulu artikel [sebelumnya](http://hobikoding.com/nodejs-grpc-microservices/).

## Preparation

Di project ini kita akan membuat server nodejs menggunakan express. Server tersebut disamping menjalankan express app, juga sekaligus menjalankan grpc server.

Struktur project akan jadi seperti ini:

```bash
.
├── grpc
│   ├── index.js
│   └── notes
│       └── index.js
├── proto
│   └── notes.proto
├── routes
│   └── index.js
├── app.js
├── index.js
├── package.json
└── package-lock.json
```

Pada struktur tersebut, main app adalah `index.js`, sedangkan `app.js` berisi konfigurasi dari express.

Di index.js, kita akan menjalankan server express sekaligus server gRPC-nya.

## Init Project

Kita telah mengetahui struktur dan konsep dari aplikasi yang akan kita buat, selanjutnya adalah inisialisasi awal project kita.

Install seluruh dependensi yang dibutuhkan. Karena kita akan berurusan dengan express, grpc, dan proto file maka kita memerlukan beberapa dependensi: `express, grpc dan @grpc/proto-loader`

```bash
mkdir service-utility && cd service-utility
npm init -y
npm i grpc @grpc/proto-loader express
```

Saya telah membuat repository untuk artikel ini:

{{<github url="https://github.com/saefullohmaslul/gRPC-Node-Utility/" name="Saefulloh Maslul" title="gRPC-Node-Utility" description="Utility service of gRPC Microservices with Node.js">}}

## Setup Proto File

Sebelum membuat konfigurasi server, kita buat terlebih dahulu proto filenya. Proto file ini yang nantinya digunakan sebagai skema transfer data antar service.

{{< code/title >}}

```ini
proto/notes.proto
```

```bash {hl_lines=[5]}
syntax = "proto3";
package notes;

service NoteService {
  rpc List (Empty) returns (NoteList) {}
}

message Empty {}

message Note {
  string id = 1;
  string title = 2;
  string content = 3;
}

message NoteList {
  repeated Note notes = 1;
}
```

{{< /code/title >}}

>Pada kode di atas perlu dipahami beberapa hal berikut:
>
>- Kita membuat package dengan nama `notes`
>- Package tersebut memiliki method bernama `List`
>- Method ini memiliki parameter `Empty` yaitu parameter kosong
>- Memiliki return berupa `NoteList`
>- NoteList adalah repeated `Note` atau array of note
>- Note memiliki properti `id, title, dan content`.

## Setup gRPC

Setelah selesai membuat proto file, Kita lanjutkan dengan membuat gRPC server.

Pada direktori grpc, buatlah file `index.js`. Fungsi dari file ini yaitu membaca semua proto file yang ada dan menjadikannya sebagai package definition sehingga RPC tinggal memakainya saja.

Dengan begitu ketika ada bug yang berhubungan dengan pembacaan proto file ataupun package definition, kita hanya akan fokus ke file ini, tidak satu per satu service yang di cek.

{{< code/title >}}

```ini
grpc/index.js
```

```js {hl_lines=[5,11]}
const path = require('path')
const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const notesProtoPath = path.join(__dirname, '..', 'proto', 'notes.proto')
const notesProtoDefinition = protoLoader.loadSync(notesProtoPath)

const notesPackageDefinition = grpc.loadPackageDefinition(notesProtoDefinition).notes

module.exports = {
  notesPackageDefinition
}
```

{{< /code/title >}}

Selanjutnya pada direktori grpc, buatlah folder notes. Apabila terdapat service lain selain notes, maka buatlah folder baru dengan nama service tersebut (jangan digabung di notes).

Di dalam folder notes, buatlah `index.js`

{{< code/title >}}

```ini
grpc/notes/index.js
```

```js {hl_lines=["4-14", 18, 26]}
const grpc = require('grpc')
const { notesPackageDefinition } = require('..')

const list = (call, callback) => {
  try {
    const notes = [
      { id: '1', title: 'Note 1', content: 'Content 1' },
      { id: '2', title: 'Note 2', content: 'Content 2' }
    ]
    return callback(null, { notes })
  } catch (error) {
    return callback(error, null)
  }
}

const notesServer = new grpc.Server()
notesServer.addService(notesPackageDefinition.NoteService.service, {
  list
})

notesServer.bind(
  '0.0.0.0:50051',
  grpc.ServerCredentials.createInsecure()
)

module.exports = notesServer
```

{{< /code/title >}}

Sesuai dengan proto file tadi, bahwa service ini memiliki method bernama List. Penulisan method tidak menggunakan format Capitalize, namun lowercase.

Apabila terdapat method lain selain List, maka harus dideklarasikan juga dalam `addService`

```js {hl_lines=[4]}
....
notesServer.addService(notesPackageDefinition.NoteService.service, {
  list,
  // masukan method lain di sini
  ....
})
....
```

## Setup Express

Para root project, buatlah file `app.js`, file ini akan berisi seluruh konfigurasi express secara global.

{{< code/title >}}

```ini
app.js
```

```js
const express = require('express')
const routes = require('./routes')

const app = express()

app.use('/', routes)

module.exports = app
```

{{< /code/title >}}

Selanjutnya pada `routes/index.js`, masukan seluruh controller dari express app ini.

{{< code/title >}}

```ini
routes/index.js
```

```js
const { Router } = require('express')

/**
 * import seluruh controller disini
 */

const router = Router()

/**
 * Masukan seluruh routing ke controller di sini
 * contoh:
 * router.get('/user', userController.profile)
 */

module.exports = router
```

{{< /code/title >}}

## Inisialisasi Express dan gRPC

Kita telah selesai membuat gRPC server maupun Express server. Selanjutnya kita binding kedua service tersebut pada address masing-masing.

{{< code/title >}}

```ini
index.js
```

```js {hl_lines=["4-6","8-9"]}
const app = require('./app')
const notesServer = require('./grpc/notes')

app.listen(5000, () => {
  console.log(`App running on port: 5000`)
})

notesServer.start()
console.log('gRPC Server running at http://localhost:50051')
```

{{< /code/title >}}

Pada contoh di atas, kita binding express server ke port 5000, sedangkan gRPC server pada port 50051 (sesuai dengan file `grpc/notes/index.js`).

## Setting Package.json

Di package.json, kita buat script untuk menjalankan microservice ini. Karena semua bertumpu pada satu file, yaitu _index.js_ pada root project, kita hanya perlu menjalankannya dengan `node index.js`

{{< code/title >}}

```ini
package.json
```

```json {hl_lines=["3","5"]}
{
  ...
  "main": "index.js",
  "scripts": {
    "start": "node ."
    ...
  },
  ...
}
```

{{< /code/title >}}

Untuk menjalankannya, di terminal masukan perintah `npm run start`

```bash {hl_lines=[1,"6-7"]}
npm run start

> service-utility@0.0.1 start /service-utility
> node .

gRPC Server running at http://localhost:50051
App running on port: 5000
```

Jika sesuai dengan keterangan di atas, maka kita telah berhasil menjalankan kedua service tersebut yaitu express server dan gRPC server.

## Penutup

Demikian cara mengintegrasikan gRPC server dengan express. Di artikel berikutnya kita akan integrasi antar service dengan membuat gRPC client untuk mengkonsumsi service dari project ini.

Artikel sudah terbit di [Transfer Data Antar Service Menggunakan gRPC](https://hobikoding.com/transfer-data-antar-service-grpc/)
