---
title: "Dart #3 Dart Data Types - Part 1"
date: 2020-06-14T03:19:48+00:00
draft: false
description: tipe data pada bahasa pemrograman Dart, tipe data Dart, boolean, string, Double Dart
keywords: dart tipedata
thumbnail: https://ik.imagekit.io/hiwbjdxpmw/rsz_photo-1505238680356-667803448bb6_PVqyH_0j4.jpg
source: https://unsplash.com/@blakeconnally
topic: [dart]
slug: tipe-data-dart-1
github: /posts/dart/tipe-data-dart-1.md
author: ricky
---

Hai, terimakasih telah berkunjung ke Hobi Koding. Saat ini teman-teman sedang berada di series [Belajar Dart](https://hobikoding.com/series/dart/).

Di series ini kita akan belajar Dart Basic hingga Advance.


## Tipe Data

seperti yang dijelaskan dalam materi sebelumnya tentang [variabel](https://hobikoding.com/variabel-dart/) yang menyinggung mengenai tipe data, pada materi kali ini akan kita
coba menyederhanakan pengertiannya dan kenapa sih diperlukan tipe data.

jadi,

**Tipe data digunakan untuk menentukan jenis nilai atau value yang akan disimpan ke dalam memori, dan yang akan di proses dalam program.**

## Tipe Data Dalam Dart

Terdapat beberapa tipe data dalam bahasa Dart. Seperti kebanyakan bahasa lainnya yaitu string, integer, float dan lain sebagainya.

berikut tipe data yang dapat digunakan pada Dart:

1. Tipe Data Numerik (Angka, Number): `int`, `double`
2. Tipe Data String: `String`
3. Tipe Boolean: `Boolean`
4. List
5. Maps
6. Runes
7. Symbols


## Integer


`Integer` digunakan untuk menyimpan bilangan bulat. merupakan tipe data yang tidak lebih dari 64 bit yang digunakan untuk menyimpan angka dengan range -2^63 sampai 2^63 -1. Apabila di kompilasi ke JavaScript maka angka yang didukung adalah -2^53 sampai 2^53 -1.
sebuah `Integer` dapat di deklarasikan menggunakan keyword `int`

Deklarasi tipe data integer :

- dengan keyword int

```
int bilanganbulat = 69;
```

- dengan keyword var

```
var bilanganbulat = 69;
```

## Double

`Double` memiliki floating point yaitu 64-bit sesuai dengan standarnya atau 
angka dengan titik desimal yang lebih besar. Pengertian floating point sendiri merupakan sebuah format bilangan yang dapat kita gunakan untuk merepsentasikan hasil dari sebuah nilai yang sangat kecil ataupun sangat besar.  `Double` dalam Dart dapat dideklarasikan dengan `double` keyword

deklarasi tipe data double :

- dengan keyword double
```
double phi = 3.14;

```

- dengan var atau dynamic
```
var phi = 3.14;
dynamic phi = 3.14;
```


## String

`String` digunakan untuk menampung serangkaian atau urutan karakter - huruf, angka, dan karakter khusus. dalam Dart, string dapat direpresentasikan baik menggunakan tanda kutip tunggal atau ganda. `String` dalam Dart dapat dideklarasikan dengan `String` keyword

- Dengan satu kutip (')

```
String tulisan = 'Hobikoding is debessst';
```

- Dengan dua kutip (")

```
String tulisan = "Hobikoding is debeeeeest";
```

- Dengan keyword var

```
var tulisan = "hobikoding is debeeeesst";
```

- Dengan pemisahan kutip

```
String tulisan = "Hobi" "Koding";
```

- Dengan pemisahan kutip dan plus 

```
String tulisan = "Hobi"+"Koding";
```

## Boolean

`Boolean` digunakan untuk mewakili nilai-nilai kebenaran, yang dapat berupa Benar atau salah. boolean biasanya digunakan dalam pernyataan pengambilan keputusan. di Dart, kita tidak dapat menggunakan 0 atau 1 untuk mewakili benar atau salah. `Boolean` dalam Dart dapat dideklarasikan dengan `bool` keyword

- Deklarasi Boolean


```
bool isOpen = true;
```





![VS code Hello World Dart](https://images.unsplash.com/photo-1527269534026-c86f4009eace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80)

Wowwww!! Selamat! Kalian telah mengetahui tipe data apa saja yang ada pada dart dan penerapannya, bagaimana? menyenangkan bukan?

## Penutup

Itulah sedikit pengenalan tipe data Dart dan cara penggunaannya, Kita akan melanjutkan pembahasannya pada [series dart](https://hobikoding.com/series/dart/) berikutnya.

### Referensi

- https://dart.dev/

