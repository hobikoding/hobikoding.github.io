---
title: Tipe Data Golang
date: 2020-05-25T20:59:17+07:00
draft: false
description: 
keywords: 
thumbnail: 
source: 
topic: []
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

Selain beberapa tipe di atas, golang juga memiliki satu tipe untuk menyatakan kekosongan dari masing-masing tipe. Nilai ini disebut `nil`.

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
