---
title: "Belajar Golang #1 Membuat Hello World di Golang"
date: 2020-05-23T00:55:31+07:00
draft: false
description: pengenalan syntax golang hello world, belajar bahasa golang, belajar fundamental golang, belajar golang advance
keywords: golang fundamental
thumbnail: https://ik.imagekit.io/hobikoding/thumbs/golang/hello-world/thumbnail_SbbguQ8CI.jpg
source: https://unsplash.com/@andrewtneel
topic: [golang]
slug: hello-world-golang
github: /posts/golang/hello-world.md
author: maslul
---

Halo semua, terimakasih telah berkunjung di Hobi Koding. Saat ini teman-teman sedang berada di series [belajar golang](https://hobikoding.com/series/golang/).

Di series ini kita akan belajar fundamental golang hingga advance golang.

## Hello World

Biasanya untuk mengenal syntax suatu bahasa pemrograman, kita akan terlebih dahulu berkenalan dengan hello world.

Hello world diibaratkan sebagai gerbang perkenalan antara programmer dengan bahasa tertentu. Oleh karena itu kita akan membuat hello world ini dalam bahasa golang.

## Syntax

Untuk membuat program baru di golang, teman-teman bisa meletakan filenya di `$GOPATH/src/path/to/project` atau menggunakan `go modules`.

>Pada series fundamental golang ini saya akan meletakannya di `$GOPATH/src/belajar-golang/hello-world`

Kemudian buat file pada project kita dengan nama main.go.

{{< code >}}

```ini
$GOPATH/src/belajar-golang/hello-world/main.go
```

```golang
package main

import "fmt"

func main() {
  fmt.Println("Hello World")
}
```

{{< /code >}}

### Penjelasan

Pada kode di atas, kita mendeklarasikan package dengan nama main. Package dengan nama main adalah satu-satunya package yang bisa di running oleh golang.

Apabila kita mengganti nama package dengan nama lain, maka kode tidak bisa di run maupun dikompilasi.

Kita membuat pula function dengan nama main. Function main ini adalah function yang akan pertama kali di eksekusi ketika running program.

Pada function main, kita melakukan perintah I/O yaitu menampilkan sebuah kata `"Hello World"` ke terminal. Untuk melakukan hal tersebut kita membutuhkan package bawaan golang yaitu `fmt`.

Untuk bisa menggunakan package, terlebih dahulu harus di import. Import package ada dua cara:

```go
import "package"
// atau
import (
  "package"
)
```

Biasanya import dengan cara kedua digunakan ketika package yang di-import lebih dari satu. Misalnya:

```go
import (
  "package-satu"
  "package-dua"
)
```

### Running

Untuk menjalankan program, golang membekali command bernama `go run`

Kita dapat menjalankan program dengan cara `go run <nama-file.go>`, contoh:

```bash
go run $GOPATH/src/belajar-golang/hello-world/main.go # running program
Hello World # result
```

### Build

Karna golang adalah compiled programming, maka kita dapat mencompile program menjadi satu buah file.

Golang membekali command bernama `go build` untuk mencompile program dengan bahasa go.

```bash
go build $GOPATH/src/belajar-golang/hello-world/main.go # compile

$GOPATH/src/belajar-golang/hello-world/main # running hasil compile
Hello World # result
```

Setelah mencompile, maka dalam root project akan terdapat file dengan nama yang sama seperti file yang kita compile, misalnya main.

Kemudian untuk menjalankannya, kita dapat menggunakan command `./main` di terminal.

## Penutup

Itulah sedikit pengenalan hello world dan syntax golang. Kita akan melanjutkan pembahasannya pada [series golang](https://hobikoding.com/series/golang/) berikutnya.
