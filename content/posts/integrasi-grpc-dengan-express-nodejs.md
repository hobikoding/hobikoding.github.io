---
title: Integrasi gRPC Dengan Express Node.js
date: 2020-05-01T11:45:02+07:00
draft: false
description: cara integrasi grpc dengan express node js
keywords: grpc microservices nodejs express
thumbnail: https://res.cloudinary.com/hobikoding/image/upload/v1588309906/Post/integrasi-grpc-rest-api-nodejs-hobikoding.com.jpg
source: https://unsplash.com/@jefflssantos
topic: [microservices, nodejs]
slug: integrasi-grpc-dengan-express-nodejs
github: posts/integrasi-grpc-dengan-express-nodejs.md
---

Sebelumnya saya membuat tulisan yang membahas [cara membuat microservices grpc di nodejs](http://hobikoding.com/nodejs-grpc-microservices/). Di artikel ini kita akan mengintegrasikan microservices grpc tersebut dengan expressjs.

## Preparation

Di project ini kita akan membuat server nodejs menggunakan express. Server tersebut disamping menjalankan express app, juga sekaligus menjalankan grpc server.

Saya rekomendasikan untuk membaca artikel [cara membuat microservices grpc di nodejs](http://hobikoding.com/nodejs-grpc-microservices/) terlebih dahulu karena di tulisan ini saya hanya mengulas sedikit tentang project kemarin.

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

Struktur kali ini beda dengan sebelumnya. Saya menghapus grpc client. Karena grpc client hanya digunakan pada service yang membutuhkan (_service client_).

Sedangkan project ini adalah service server yang akan kita sepakati namanya adalah **utility service**. Service ini memiliki beragam module, salah satunya **notes**.

## Setup Proto File

Kita buat notes.proto terlebih dahulu. File proto ini yang nantinya akan digunakan sebagai skema transfer antar service.

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

Selanjutnya pada direktori grpc, buatlah folder notes. Folder grpc nantinya akan berisi beberapa sub folder sesuai dengan module yang ada pada **utility service**.

{{< code/title >}}

```title
grpc/notes/index.js
```

```js
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

dan pada index grpc kita akan mengekspor semua service yang disediakan. Dalam hal ini hanya ada service notes.

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

## Setup Express

{{< image src="https://res.cloudinary.com/hobikoding/image/upload/v1588733374/Post/coffe-hobikoding.com.jpg" alt="coffe-first" source="https://unsplash.com/@harrybrewer" >}}

Install express ke dalam project kita.

```bash
npm init -y
npm i express
```

setelah itu pada app.js kita buat express app-nya

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

```js
const { Router } = require('express')

const router = Router()

module.exports = router
```

{{< /code/title >}}

Sedangkan di file `routes/index.js` kita belum memasukan satupun route ke dalam app. Kita hanya membuat inisialisasinya terlebih dahulu.

## Inisialisasi Express dan gRPC

Kemudian pada file `index.js` kita listen express app maupun service gRPC-nya.

{{< code/title >}}

```title
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

```bash {hl_lines=[1,"6-7"]}
npm run start

> grpc-nodejs-example@0.0.1 start /grpc-nodejs-example
> node .

gRPC Server running at http://localhost:50051
App running on port: 5000
```

## Penutup

Demikian cara mengintegrasikan gRPC server dengan express. Di artikel berikutnya kita akan membuat express dengan gRPC client untuk mengkonsumsi service dari project ini.
