---
title: "Dart #3 Dart Data Types - Part 2"
date: 2020-06-18T11:52:34+00:00
draft: false
description: tipe data pada bahasa pemrograman Dart, tipe data Dart, boolean, string, Double Dart
keywords: dart tipedata
thumbnail: https://ik.imagekit.io/hiwbjdxpmw/rsz_dart2_M9gcn-7PA.jpg
source: https://unsplash.com/@blakeconnally
topic: [dart]
slug: tipe-data-dart-2
github: /posts/dart/tipe-data-dart-2.md
author: ricky
---

Hai, terimakasih telah berkunjung ke Hobi Koding. Saat ini teman-teman sedang berada di series [Belajar Dart](https://hobikoding.com/series/dart/).

Di series ini kita akan belajar Dart Basic hingga Advance.


## Tipe Data


Hi kita ketemu lagi di pembahasan tentang tipe data dart seperti dijelaskan dalam materi sebelumnya tentang variabel dan tipe data dasar pada dart [Dart Data Types - Part 1](https://hobikoding.com//tipe-data-dart-1/). kali ini kita akan melanjutkan pembahasan untuk beberapa tipe data yang belum dijelaskan

## Tipe Data Dalam Dart

Terdapat beberapa tipe data dalam bahasa Dart. Seperti kebanyakan bahasa lainnya yaitu string, integer, float dan lain sebagainya.

berikut tipe data yang dapat digunakan pada Dart:

1. ~~Tipe Data Numerik (Angka, Number): `int`, `double`~~
2. ~~Tipe Data String: `String`~~
3. ~~Tipe Boolean: `Boolean`~~
4. List
5. Maps
6. Dynamic Type

## List


di Dart, tipe data `list` digunakan untuk mewakili kumpulan objek/nilai. `list` adalah kelompok objek yang berurutan. tipe data `list` di Dart identik dengan konsep array dalam bahasa pemrograman lain. sebuah array digunakan untuk menyimpan banyak nilai dalam variabel tunggal. di Dart, array adalah objek daftar/nilai, jadi kebanyakan orang hanya menyebutnya `list`. variabel `list` didefinisikan dengan memiliki nilai yang dipisahkan oleh koma dan dilampirkan dalam tanda kurung ([])

Deklarasi tipe data List :

```
var urutanangka = [1,2,3];
```


## Maps

`Maps` adalah objek yang digunakan untuk mewakili satu set nilai sebagai satu kesatuan `keys` dan `value`. di `Maps`, baik `keys` dan `value` bisa dari semua jenis objek. di `Maps`, setiap `keys` hanya dapat di define 1 kali, tetapi `value` yang sama dapat digunakan beberapa kali. `Maps` dapat didefinisikan dengan menggunakan kurung kurawal ({})

Deklarasi tipe data Map :

```
var identifier = { key1:value1, key2:value2 [,…..,key_n:value_n] }

// atau

var user = {'username':'ricky','password':'rickyganteng'};

```

## Dynamic Type

Dart adalah bahasa yang `optionally typed`. Jika jenis variabel tidak ditentukan secara eksplisit / jelas, jenis variabel itu dinamis. keyword `dynamic` juga dapat digunakan sebagai jenis `anotasi` yang jelas.

Deklarasi variabel menggunakan keyword dynamic :

- dengan dynamic
```
dynamic phi = 3.14;
```

<!-- 

## Runes

`Maps` adalah objek yang digunakan untuk mewakili satu set nilai sebagai satu kesatuan `keys` dan `value`. di `Maps`, baik `keys` dan `value` bisa dari semua jenis objek. di `Maps`, setiap `keys` hanya dapat di define 1 kali, tetapi `value` yang sama dapat digunakan beberapa kali. `Maps` dapat didefinisikan dengan menggunakan kurung kurawal ({})

Deklarasi tipe data Map :

```
var identifier = { key1:value1, key2:value2 [,…..,key_n:value_n] }

// atau

var user = {'username':'ricky','password':'rickyganteng'};

```


## Symbols

`Symbol` digunakan  untuk  mengacu kepada sebuah operator atau identier dalam program Dart. `Symbols` adalah cara untuk menyimpan hubungan antara string yang dapat dibaca manusia dan string yang dioptimalkan untuk digunakan oleh komputer. umumnya digunakan dalam `APIs` yang mengacu ke identifier berdasarkan nama, karena nama identifier dapat berubah tapi tidak dengan identifier `Symbols`


Deklarasi tipe data Map :

```
var identifier = { key1:value1, key2:value2 [,…..,key_n:value_n] }

// atau

var user = {'username':'ricky','password':'rickyganteng'};

``` -->




![VS code Hello World Dart](https://images.unsplash.com/photo-1527269534026-c86f4009eace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80)

Wowwww!! Selamat! Kalian telah mengetahui tipe data apa saja yang ada pada dart dan penerapannya, bagaimana? menyenangkan bukan?

## Penutup

Itulah sedikit pengenalan tipe data Dart dan cara penggunaannya, Kita akan melanjutkan pembahasannya pada [series dart](https://hobikoding.com/series/dart/) berikutnya.

### Referensi

- https://dart.dev/

