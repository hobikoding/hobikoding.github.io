---
title: Membuat Microservices Node.js dengan Arsitektur gRPC
date: 2020-04-24T11:40:19+07:00
draft: false
description: cara membuat microservices di node.js dengan grpc, microservices di node.js, membangun microservices node.js
keywords: microservices node.js grpc
thumbnail: https://res.cloudinary.com/hobikoding/image/upload/v1587705979/Post/nodejs-grpc-microservices-hobikoding.com.jpg
source: https://unsplash.com/photos/XMFZqrGyV-Q
topic: [nodejs]
slug: nodejs-grpc-microservices
github: posts/nodejs-grpc-microservices.md
---

Akhir-akhir ini arsitektur microservices semakin dilirik banyak company.

Selain memudahkan ketika development, arsitektur microservice juga lebih mudah untuk scale, sehingga tidak akan terjadi masalah ketika company mulai besar dan mengharuskan scale aplikasi.

Di nodejs, salah satu arsitektur yang bisa digunakan untuk menangani request antar service yaitu gRPC.

## Preparation

Di project ini, kita akan membuat sebuah service dengan nama ```notes```. Service ini memiliki method ```list``` untuk menampilkan beberapa note _(array of note)_.

> Yang akan kita lakukan:
>
> - Init server
> - Membuat proto file (notes.proto)
> - Membuat notes server
> - Membuat notes client
> - Setup package.json

Saya telah membuat repository untuk artikel ini di:


{{<github url="https://github.com/saefullohmaslul/gRPC-Node-Example/tree/grpc" name="Saefulloh Maslul" title="gRPC-Node-Example">}}

## Init Server

Kita mulai dengan melakukan inisialisasi server nodejs. Buat folder baru dengan nama ```grpc-nodejs-example``` dan lakukan init npm

```bash
mkdir grpc-nodejs-example
npm init -y
```

Kita tentukan terlebih dahulu struktur project yang akan dibuat. Struktur project yang saya buat seperti ini:

```bash
.
├── grpc
│   ├── index.js
│   └── notes
│       ├── client
│       │   ├── get-notes.js
│       │   └── index.js
│       └── server
│           └── index.js
├── node_modules
├── package.json
├── package-lock.json
└── proto
    └── notes.proto
```

## Membuat Proto File

Proto file digunakan sebagai format transfer data, seperti layaknya json di REST. Kita akan membuat proto file untuk service notes.

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

Keterangan:

- Kita membuat package dengan nama ```notes```
- Membuat service dengan nama NoteService yang memiliki method ```List```
- Method List memiliki parameter Empty dan return NoteList
- Empty adalah object kosong
- NoteList adalah object dengan key notes yang memiliki value berupa repeated Note (array of Note)
- Note adalah object yang memiliki key id, title, dan content yang semuanya bertipe data string
- Penomoran di Note dan NoteList merupakan unique id

## Membuat Notes Server

Pertama kita buat terlebih dahulu loader untuk file proto. Sebenarnya ada 2 cara untuk load proto file:

1. Load langsung dari proto file menggunakan library ```@grpc/loader```
1. Generate proto file dan menggunakannya sebagai loader static

Yang akan kita gunakan di artikel ini adalah load langsung dari proto file.

Pertama install seluruh library yang kita perlukan dalam project

```bash
npm i grpc @grpc/proto-loader
```

Selanjutnya pada ```grpc/index.js```

{{< code/title >}}

```title
grpc/index.js
```

```javascript
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

Pada kode di atas kita membuat package definition untuk service notes dan meng-_export_-nya untuk digunakan file lain.

Kemudian:

{{< code/title >}}

```title
grpc/notes/server/index.js
```

```javascript
const grpc = require('grpc')
const { notesPackageDefinition } = require('../..')

/**
 * nama method harus sesuai dengan method di proto file
 * List -> list
 */
const list = (call, callback) => {
  try {
    /**
     * data yang akan di return harus sesuai dengan proto file
     * yaitu array of note
     */
    const data = [
      { id: '1', title: 'Note 1', content: 'Content 1' },
      { id: '2', title: 'Note 2', content: 'Content 2' }
    ]

    /**
     * nilai return berupa object dengan key
     * sesuai dengan proto file
     * -> notes
     */
    return callback(null, { notes: data })
  } catch (error) {
    /**
     * parameter pertama callback adalah error
     * parameter kedua callback adalah result
     */
    return callback(error, null)
  }
}

const server = new grpc.Server()
server.addService(notesPackageDefinition.NoteService.service, {
  /**
   * bind semua method dalam parameter kedua dari addService
   */
  list
})

/**
 * listen notes grpc server pada localhost:50051
 */
server.bind(
  '0.0.0.0:50051',
  grpc.ServerCredentials.createInsecure()
)
server.start()
console.log('Server running at http://localhost:50051')
```

{{< /code/title >}}

## Membuat Notes Client

Setelah selesai membuat notes server, kita lanjutkan dengan membuat notes client.

Notes server adalah service producer, dalam hal ini service yang menyediakan data. Sedangkan notes client adalah service client, yaitu service yang mengkonsumsi data dari producer.

>Saya ibaratkan ketika proses order. Order memerlukan data user, sehingga user menjadi producer dan order menjadi client (order mengkonsumsi data user)
>
>Atau ketika proses membuat status pada social media, service status memerlukan data dari service user. Maka service status adalah client dari service user.
>
>**Method dari client akan dipanggil pada setiap service yang membutuhkannya.**

{{< code/title >}}

```title
grpc/notes/client/index.js
```

```javascript
const grpc = require('grpc')
const { notesPackageDefinition } = require('../..')

const client = new notesPackageDefinition.NoteService(
  '0.0.0.0:50051', grpc.credentials.createInsecure()
)

module.exports = client
```

{{< /code/title >}}

Pada kode di atas, kita membuat sebuah client dari notes server. Client ini akan digunakan pada setiap method yang dipanggil.

{{< code/title >}}

```title
grpc/notes/client/get-notes.js
```

```javascript
const client = require('.')

const getNotes = async () => {
  try {
    const notes = await new Promise((resolve, reject) => {
      /**
       * memanggil method list dari notes client
       */
      client.list({}, (error, notes) => {
        if (!error) resolve(notes)
        reject(error)
      })
    })

    /**
     * notes ditampilkan dalam log
     */
    console.log(notes)
  } catch (error) {
    console.log(error)
  }
}

getNotes()
```

{{< /code/title >}}

Pada kode di atas, kita membuat method dengan nama ```getNotes```. Method tersebut akan menghasilkan nilai balik berupa notes yang di dapatkan dengan memanggil method list dari client.

## Setup Package.json

Untuk lebih memudahkan pemanggilan server, kita akan menambahkan script berikut dalam package.json

{{< code/title >}}

```title
package.json
```

```json {hl_lines=["4-5"]}
...
"scripts": {
  ...
  "server": "node grpc/notes/server",
  "notes:get": "node grpc/notes/client/get-notes.js"
}
...
```

{{< /code/title >}}

Selanjutnya kita buka dua terminal. Terminal pertama menjalankan server:

```bash {hl_lines=["7"]}
npm run server

# result
> grpc-nodejs-example@1.0.0 server /grpc-nodejs-example
> node grpc/notes/server

Server running at http://localhost:50051
```

Dan terminal kedua mengonsumsi data dari server:

```bash {hl_lines=["7-12"]}
npm run notes:get

# result
> grpc-nodejs-example@1.0.0 notes:get /grpc-nodejs-example
> node grpc/notes/client/get-notes.js

{
  notes: [
    { id: '1', title: 'Note 1', content: 'Content 1' },
    { id: '2', title: 'Note 2', content: 'Content 2' }
  ]
}
```

## Penutup

Demikianlah cara transfer data antar service dalam microservices. Pada artikel selanjutnya kita akan mengintegrasikan gRPC ke dalam REST Api menggunakan framework express.
