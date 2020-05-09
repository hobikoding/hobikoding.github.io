---
title: Transfer Data Antar Service Menggunakan gRPC Node.js
date: 2020-05-09T20:53:58+07:00
draft: false
description: 
keywords: microservices nodejs grpc
thumbnail: https://res.cloudinary.com/hobikoding/image/upload/v1589033088/Post/menghubungkan-service-dengan-grpc-nodejs.jpg
source: https://unsplash.com/@blakeconnally
topic: [microservices, nodejs]
slug: transfer-data-antar-service-grpc
github: posts/transfer-data-antar-service-grpc.md
---

Sebelumnya kita telah membahas cara [membuat microservices grpc](https://hobikoding.com/nodejs-grpc-microservices/) dengan nodejs. Kita juga telah mengetahui cara [integrasi service](https://hobikoding.com/integrasi-grpc-dengan-express-nodejs/) dengan framework express.js.

Pada artikel kali ini, kita akan menghubungkan service user dengan [service utility](https://hobikoding.com/nodejs-grpc-microservices/) yang telah kita buat sebelumnya.

## Preparation

Service user akan mengkonsumsi data notes dari service utility yang telah kita buat sebelumnya.

Service user sendiri akan berbentuk seperti ini:

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

## Setup Proto File

Pada dasarnya proto file baik untuk server maupun client adalah sama. Sehingga kita samakan dengan project server kita sebelumnya yaitu:

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

## Setup gRPC

Install terlebih semua dahulu library yang kita butuhkan pada project ini

```bash
npm init -y
npm i grpc @grpc/proto-loader express
```

Pada direktori grpc, buatlah file `index.js` yang berfungsi untuk load proto file ke dalam node js.

{{< code/title >}}

```title
grpc/index.js
```

```js
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

```js
const grpc = require('grpc')
const { notesPackageDefinition } = require('../..')

const client = new notesPackageDefinition.NoteService(
  '0.0.0.0:50051', grpc.credentials.createInsecure()
)

module.exports = client
```

{{< /code/title >}}

Pada kode di atas, kita mengekspor client yang mana mengonsumsi server grpc dengan alamat `0.0.0.0:50051`.

Selanjutnya buat method untuk mengambil notes

{{< code/title >}}

```title
grpc/notes/client/get-notes.grpc.js
```

```js {hl_lines=["6-9"]}
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

## Setup Express

{{< image src="https://res.cloudinary.com/hobikoding/image/upload/v1588733374/Post/coffe-hobikoding.com.jpg" alt="coffe-first" source="https://unsplash.com/@harrybrewer" >}}

Buat express app pada file `app.js`

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

Pada kode di atas, kita membuat app dan memasukan konfigurasi routes yang berasal dari `routes/index.js`

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

Pada user controller, kita menggunakan method getNotes yang sebelumnya telah kita buat, untuk mengambil semua notes yang ada pada **service utility**.

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

## Inisialisasi gRPC Client

Kemudian pada file `index.js` kita listen express app maupun service gRPC-nya.

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

Untuk menjalankannya, kita dapat mengatur pada file package.json.

## Setting Package.json

Kita buat script untuk menjalankan express sekaligus service gRPC-nya.

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

> grpc-nodejs-example@0.0.1 start /grpc-nodejs-example
> node .

App running on port: 5050
```

## Testing

Buka url [localhost:5050/user/notes](localhost:5050/user/notes) untuk melihat hasil dari microservices ini.

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

## Penutup

Demikian cara transfer data antar service menggunakan grpc pada node js.
