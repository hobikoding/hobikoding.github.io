---
title: Transfer Data Antar Service Menggunakan gRPC Node.js
date: 2020-05-09T20:53:58+07:00
draft: false
description: 
keywords: microservices nodejs grpc
thumbnail: /img/transfer-data-antar-service-grpc/thumbnail.jpg
source: https://unsplash.com/@blakeconnally
topic: [microservices, nodejs]
slug: transfer-data-antar-service-grpc
github: posts/transfer-data-antar-service-grpc.md
---

Sebelumnya kita telah membahas cara [membuat microservices grpc](https://hobikoding.com/nodejs-grpc-microservices/) dengan nodejs. Kita juga telah mengetahui cara [integrasi service](https://hobikoding.com/integrasi-grpc-dengan-express-nodejs/) dengan framework express.js.

Pada artikel kali ini, kita akan membahas transfer data dari service satu ke service lain melalui protokol gRPC.

## Preparation

>Project sebelumnya, kita namakan sebagai `service utility`. Sedangkan **project pada artikel ini** kita namakan sebagai `service user`.

Service user membutuhkan data catatan yang diambil dari service utility. Untuk meminta datanya, service user melakukan panggilan (_call_) ke service utility dengan gRPC.

__Service user__ sendiri akan berbentuk seperti ini:

```bash
.
├── app.js
├── controllers
│   └── user.controller.js
├── grpc
│   ├── index.js
│   └── notes
│       └── client
│           ├── get-notes.grpc.js
│           └── index.js
├── index.js
├── node_modules
├── package.json
├── package-lock.json
├── proto
│   └── notes.proto
├── routes
│   └── index.js
└── utils
    └── response.js
```

Sedangkan __service utility__ seperti ini:

```bash
.
├── app.js
├── grpc
│   ├── index.js
│   └── notes
│       └── index.js
├── index.js
├── package.json
├── package-lock.json
├── proto
│   └── notes.proto
└── routes
    └── index.js
```

Keseluruhan struktur project seperti ini:

```bash
.
├── service-user
│   ├── app.js
│   ├── controllers
│   │   └── user.controller.js
│   ├── grpc
│   │   ├── index.js
│   │   └── notes
│   │       └── client
│   │           ├── get-notes.grpc.js
│   │           └── index.js
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   ├── proto
│   │   └── notes.proto
│   ├── routes
│   │   └── index.js
│   └── utils
│       └── response.js
└── service-utility
    ├── app.js
    ├── grpc
    │   ├── index.js
    │   └── notes
    │       └── index.js
    ├── index.js
    ├── package.json
    ├── package-lock.json
    ├── proto
    │   └── notes.proto
    └── routes
        └── index.js
```

Saya telah membuat repositorynya di sini:

{{<github url="https://github.com/saefullohmaslul/gRPC-Node-User" name="Saefulloh Maslul" title="gRPC-Node-User" description="User service of gRPC Microservices with Node.js">}}

{{<github url="https://github.com/saefullohmaslul/gRPC-Node-Utility" name="Saefulloh Maslul" title="gRPC-Node-Utility" description="Utility service of gRPC Microservices with Node.js">}}

{{<github url="https://github.com/saefullohmaslul/gRPC-Node-Microservices" name="Saefulloh Maslul" title="gRPC-Node-Microservices" description="gRPC Microservices with Node.js">}}

## Init Project

Oke, pada artikel ini kita akan membuat service user, sehingga kita perlu setup beberapa dependensi yang diperlukan.

```bash
mkdir service-user && cd service-user
npm init -y
npm i grpc @grpc/proto-loader express
```

## Setup Proto File

Pada dasarnya proto file baik untuk server maupun client adalah sama. Sehingga harus disamakan isi file dari `service-utility/proto/notes.proto` dengan `service-user/proto/notes.proto`:

{{< code/title >}}

```title
proto/notes.proto
```

```bash
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

Pada proto file di atas, kita memiliki sebuah method pada [gRPC server](https://hobikoding.com/integrasi-grpc-dengan-express-nodejs/) bernama List. List ini memiliki parameter Empty yaitu kosong, dan return NoteList yaitu repeated Note atau array of Note.

## Setup gRPC

Pada direktori grpc, buatlah file `index.js`. Fungsi dari file ini yaitu membaca semua proto file yang ada dan menjadikannya sebagai package definition sehingga RPC tinggal memakainya saja.

Dengan begitu ketika ada bug yang berhubungan dengan pembacaan proto file ataupun package definition, kita hanya akan fokus ke file ini, tidak satu per satu service yang di cek.

{{< code/title >}}

```title
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

Kemudian buatlah folder notes di dalam folder grpc. Folder grpc nantinya akan berisi beberapa sub folder sesuai dengan module yang akan di consume.

{{< code/title >}}

```title
grpc/notes/client/index.js
```

```js {hl_lines=[8]}
const grpc = require('grpc')
const { notesPackageDefinition } = require('../..')

const client = new notesPackageDefinition.NoteService(
  '0.0.0.0:50051', grpc.credentials.createInsecure()
)

module.exports = client
```

{{< /code/title >}}

Pada kode di atas, kita mengekspor client yang mana mengonsumsi server grpc dengan alamat `0.0.0.0:50051`.

Selanjutnya buat method untuk mengambil notes:

{{< code/title >}}

```title
grpc/notes/client/get-notes.grpc.js
```

```js {hl_lines=["6-9",18]}
const client = require('.')

const getNotes = async () => {
  try {
    const notes = await new Promise((resolve, reject) => {
      client.list({}, (error, notes) => {
        if (!error) resolve(notes)
        reject(error)
      })
    })

    return notes
  } catch (error) {
    throw error
  }
}

module.exports = getNotes
```

{{< /code/title >}}

Method tersebut kita export agar bisa digunakan di banyak tempat.

## Setup Express

Selanjutnya kita setup express server untuk service user ini. Seperti biasanya pada root project, buatlah file `app.js`. File ini akan berisi semua konfigurasi express app secara global.

{{< code/title >}}

```title
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

```title
routes/index.js
```

```js {hl_lines=[6]}
const { Router } = require('express')
const userController = require('../controllers/user.controller')

const router = Router()

router.get('/user/notes', userController.userNotes)

module.exports = router
```

{{< /code/title >}}

Pada kode diatas kita membuat sebuah endpoint dengan method `GET /user/notes` yang akan di handle oleh user controller

{{< code/title >}}

```title
controllers/user.controller.js
```

```js {hl_lines=[6,8,"10-13"]}
const getNotes = require('../grpc/notes/client/get-notes.grpc')
const { resError, resSuccess } = require('../utils/response')

exports.userNotes = async (req, res, next) => {
  try {
    const { notes } = await getNotes()

    return resSuccess(res, notes, 'Success get all user notes')
  } catch (error) {
    return resError(res, 500, [{
      flag: 'INTERNAL_SERVER_ERROR',
      message: 'Failed get all note'
    }])
  }
}
```

{{< /code/title >}}

Pada user controller, kita menggunakan method `getNotes` yang sebelumnya telah kita buat, untuk mengambil semua notes yang ada pada **service utility**.

Apabila tidak terdapat error, maka akan mereturn success namun ketika gagal akan mereturn error.

{{< code/title >}}

```title
utils/response.js
```

```js {hl_lines=["1-7", "9-14"]}
const success = (res, result, message) => {
  res.status(200).json({
    status: 200,
    message,
    result
  })
}

const error = (res, code, errors) => {
  res.status(code).json({
    status: code,
    errors
  })
}

module.exports = {
  resSuccess: success,
  resError: error
}
```

{{< /code/title >}}

Kemudian pada file `index.js` kita listen express app ke dalam port 5050.

{{< code/title >}}

```title
index.js
```

```js {hl_lines=["3-6"]}
const app = require('./app')

app.listen(5050, () => {
  console.log(`App running on port: 5050`)
})
```

{{< /code/title >}}

## Setting Package.json

Selanjutnya, kita buat script untuk menjalankan express app ini. Karena main projectnya adalah index.js, maka kita jalankan aplikasi ini dengan perintah `node index.js`

{{< code/title >}}

```title
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

```bash {hl_lines=[1,6]}
npm run start

> service-user@0.0.1 start /service-user
> node .

App running on port: 5050
```

## Testing

Jangan lupa jalankan kedua service, baik service user maupun service utility. Kemudian buka url [localhost:5050/user/notes](localhost:5050/user/notes) untuk melihat hasil dari microservices ini.

```json
{
  "status": 200,
  "message": "Success get all user notes",
  "result": [
    {
      "id": "1",
      "title": "Note 1",
      "content": "Content 1"
    },
    {
      "id": "2",
      "title": "Note 2",
      "content": "Content 2"
    }
  ]
}
```

Pada hasil di atas, kita telah berhasil mengambil data dari service utility melalui service user menggunakan protokol gRPC.

## Penutup

Demikian cara transfer data antar service menggunakan grpc pada node js. Jika membutuhkan referensi bacaan, silakan baca artikel sebelumnya mengenai cara [membuat microservices gRPC dengan nodejs](https://hobikoding.com/nodejs-grpc-microservices/) dan [integrasi gRPC server dengan expressjs](https://hobikoding.com/integrasi-grpc-dengan-express-nodejs/)
