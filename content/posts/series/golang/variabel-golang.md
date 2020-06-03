---
title: "Belajar Golang #2 Deklarasi Variabel di Golang"
date: 2020-05-24T05:26:58+07:00
draft: false
description: mengenal variabel dalam pemrograman golang, membuat variabel di golang, deklarasi variabel di golang, how to make variable in golang, create variable in golang with two way
keywords: golang variabel
thumbnail: https://ik.imagekit.io/hobikoding/thumbs/golang/variabel/thumbnail_a2hc6XL97.jpg
source: https://unsplash.com/@mpho_mojapelo
topic: [golang]
slug: variabel-golang
github: /posts/series/golang/variabel-golang.md
author: maslul
---

Halo semua, terimakasih telah berkunjung di Hobi Koding. Saat ini teman-teman sedang berada di series [belajar golang](https://hobikoding.com/series/golang/).

Di series ini kita akan belajar fundamental golang hingga advance golang.

## Deklarasi Variabel

Ada dua cara penulisan variabel di golang. Cara pertama yaitu dengan menyertakan tipe datanya dan cara kedua langsung tanpa menyertakan tipe datanya.

Ketika deklarasi variabel menggunakan cara kedua, maka tipe variabel otomatis mengikuti tipe data yang di deklarasikan.

### Dengan Tipe Data

Penulisan variabel dengan tipe data cukup mudah, yaitu dengan rumus berikut:

```go
var <namaVariabel> <tipe> = <value>
```

contohnya,

```go
package main

import "fmt"

func main() {
  var fullName string = "Saefulloh Maslul"
  var age int64 = 10
  var address string = "Jakarta"

  fmt.Printf("Halo my name is %s, I am %d years old and my address in %s\n", fullName, age, address)
}
```

Ketika dijalankan akan keluar hasil berikut,

```bash
go run main.go
Halo my name is Saefulloh Maslul, I am 10 old and my address in Jakarta
```

### Tanpa Tipe Data

Penulisan variabel tanpa tipe data lebih mudah, rumusnya yaitu:

```go
namaVariabel := <nilai>
```

contohnya,

```go
package main

import "fmt"

func main() {
  fullName := "Saefulloh Maslul"
  age := 10
  address := "Jakarta"

  fmt.Printf("Halo my name is %s, I am %d years old and my address in %s\n", fullName, age, address)
}
```

Apabila dijalankan, hasilnya akan sama,

```bash
go run main.go
Halo my name is Saefulloh Maslul, I am 10 old and my address in Jakarta
```

## Deklarasi Multi Variabel

Kita dapat pula mendeklarasi beberapa variabel sekaligus. Go mendukung hal tersebut dalam dua cara pula.

```go
var fullName, age, address = "Saefulloh Maslul", 10, "Jakarta"
```

Atau bisa juga,

```go
fullName, age, address := "Saefulloh Maslul", 10, "Jakarta"
```

## Deklarasi Variabel Underscore

Ketika suatu variabel dideklarasikan dalam golang, maka variabel tersebut harus digunakan. Apabila tidak digunakan, golang akan menunjukan pesan error baik ketika dijalankan maupun dicompile.

Untuk mengatasi hal ini, golang menyiapkan underscore `_` sebagai wadah variabel yang tidak digunakan.

Kode di bawah akan error ketika dijalankan ataupun dicompile

```go
package main

import "fmt"

func main() {
  fullName, age, address, state := "Saefulloh Maslul", 10, "Jakarta", "Indonesia"

  fmt.Printf("Halo my name is %s, I am %d years old and my address in %s\n", fullName, age, address)
}
```

Hasilnya,

```bash
go run main.go
# command-line-arguments
./main.go:6:26: state declared but not used
```

Terdapat pesan kesalahan bahwa `state` dideklarasikan, namun tidak digunakan.

Untuk mengatasinya, kita dapat mengubah kode menjadi seperti,

```go
package main

import "fmt"

func main() {
  fullName, age, address, _ := "Saefulloh Maslul", 10, "Jakarta", "Indonesia"

  fmt.Printf("Halo my name is %s, I am %d years old and my address in %s\n", fullName, age, address)
}
```

Apabila dijalankan akan menampilkan,

```bash
go run main.go
Halo my name is Saefulloh Maslul, I am 10 years old and my address in Jakarta
```

## Konstan

Deklarasi variabel selain menggunakan `var` juga bisa menggunakan `const`. Perbedaannya ketika menggunakan `const` maka variabel tersebut tidak bisa diubah (konstan).

Contohnya ketika mendeklarasikan variabel pi (22/7), atau bilangan konstan lainnya.

Kita juga bisa menggunakan const apabila variabel yang kita deklarasikan tidak akan berubah.

```go
package main

import "fmt"

func main() {
  const pi = 3.14

  fmt.Println("Nilai Pi adalah: " + Pi)
}
```

Hasilnya,

```bash
go run main.go
Nilai Pi adalah: 3.14
```

## Penutup

Demikian beberapa cara penulisan deklarasi variabel di golang. Kita akan melanjutkan pembahasannya pada [series golang](https://hobikoding.com/series/golang/) berikutnya.
