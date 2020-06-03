---
title: "Belajar Golang #3 Tipe Data"
date: 2020-05-25T20:59:17+07:00
draft: false
description: tipe data pada bahasa pemrograman golang, tipe data integer, boolean, string, float golang
keywords: tipe data golang
thumbnail: https://ik.imagekit.io/hobikoding/thumbs/golang/tipe-data/thumbnail_NUYqZZHgX.jpg
source: https://unsplash.com/@pietrozj
topic: [golang]
slug: tipe-data-golang
github: /posts/series/golang/tipe-data-golang.md
author: maslul
---

Halo semua, terimakasih telah berkunjung di Hobi Koding. Saat ini teman-teman sedang berada di series [belajar golang](https://hobikoding.com/series/golang/).

Di series ini kita akan belajar fundamental golang hingga advance golang.

## Tipe Data

Terdapat beberapa tipe data dalam bahasa go. Seperti kebanyakan bahasa lainnya yaitu string, integer, float dan lain sebagainya.

Di golang, apabila dikelompokan terdapat 3 tipe secara garis besar:

1. Tipe numerik
1. Tipe boolean
1. Tipe string

Sedangkan tipe numerik terdapat integer (bilangan bulat) dan float (bilangan desimal).

## Tipe Numerik

Seperti penjelasan di atas, tipe numerik dibagi menjadi integer dan float. Tipe integer sendiri ada beberapa jenis, tergantung cangkupan bilangannya.

### Integer

Untuk tipe integer dan cangkupannya seperti berikut,

| Tipe data | Cakupan Bilangan                                  |
|-----------|---------------------------------------------------|
| uint8     | 0 - 255                                           |
| uint16    | 0 - 65535                                         |
| uint32    | 0 - 4294967295                                    |
| uint64    | 0 - 18446744073709551615                          |
| uint      | sama dengan uint32 atau uint64 (tergantung nilai) |
| byte      | sama dengan uint8                                 |
| int8      | -128 - 127                                        |
| int16     | -32768 - 32767                                    |
| int32     | -2147483648 - 2147483648                          |
| int64     | -9223372036854775808 - 9223372036854775808        |
| int       | sama dengan int32 atau int64 (tergantung nilai)   |
| rune      | sama dengan int32                                 |

Contoh penggunaan:

```go
var totalStudent uint8 = 63
var totalClass = 27

fmt.Printf("total student is: %d\n", totalStudent)
fmt.Printf("total class is: %d\n", totalClass)

// result
// total student is: 63
// total class is: 27
```

Variabel `totalStudent` bertipe uint8 karena kita mendeklarasikannya secara langsung. Sedangkan variabel `totalClass` bertipe int32 (secara default apabila tidak dideklarasikan tipenya, maka akan menggunakan tipe int).

### Float

Sedangkan untuk tipe float, terdapat float32 dan float64. Contoh penggunaannya sebagai berikut:

```go
var mathScore = 63.5

fmt.Printf("Your math score is %f\n", mathScore)
fmt.Printf("Your math score is %.3f\n", mathScore)

// result
// Your math score is 63.500000
// Your math score is 63.500
```

Pada kode di atas, apabila tidak kita deklarasikan berapa banyak angka di belakang koma, maka akan menampilkan nilai sebanyak 6 digit. Apabila kita deklarasikan `.3f` maka akan tampil 3 digit nilai di belakang koma.

## Tipe Boolean

Tipe data boolean adalah tipe data yang digunakan untuk menyatakan benar atau salah. Pada boolean, benar dilambangkan sebagai nilai `true` dan salah sebagai nilai `false`.

Contoh penggunaannya:

```go
var isAvailable bool = true
var isMax = false

fmt.Printf("is food available: %t\n", isAvailable)
fmt.Printf("is integer max: %t\n", isMax)

// result
// is food available: true
// is integer max: false
```

## Tipe String

Tipe data string adalah tipe data yang digunakan untuk menampung huruf, kata atau kalimat. Tipe ini juga bisa menampung angka, namun sebagai string sehingga tidak bisa kita lakukan operasi seperti halnya numerik.

Contoh penggunaan:

```go
var sentence string = "Adik makan nasi 10 piring"
var place = `di dapur`

fmt.Println(sentence, place)

// result
// Adik makan nasi 10 piring di dapur
```

## Penutup

Demikian beberapa tipe data yang kita bahas pada golang. Kita akan melanjutkan materi lainnya pada [series golang](https://hobikoding.com/series/golang/).
