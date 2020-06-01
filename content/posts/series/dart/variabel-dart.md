---
title: "Dart #2 Variabel"
date: 2020-06-01T01:49:50+00:00
draft: false
description: mengenal variabel dalam pemrograman dart, membuat variabel di dart, deklarasi variabel di dart,
keywords: dart variabel
thumbnail: /img/variabel-dart/thumbnail.jpg
source: https://unsplash.com/@cgower
topic: [dart]
slug: variabel-dart
github: /posts/dart/variabel-dart.md
author: ricky
---

Hai, terimakasih telah berkunjung ke Hobi Koding. Saat ini teman-teman sedang berada di series [Belajar Dart](https://hobikoding.com/series/dart/).

Di series ini kita akan belajar Dart Basic hingga Advance.


## Pengenalan Variabel dan Tipe Data

mungkin sebagian teman teman disini sudah pernah belajar bahasa pemrograman sebelumnya dan tidak asing dengan variabel dan tipe data, sebagian mungkin lupa, dan sebagian mungkin belum tahu, okeeeeee! mari kita sama sama belajar sambil mengingat ingat yang pernah di pelajari

**Variabel** adalah sebuah penampung yang menandakan dan menyimpan suatu nilai


**Tipe Data** adalah jenis nilai yang tersimpan pada suatu variabel.

>nah! jadi kalo kita punya segelas kopi, 
*bisa dikatakan **gelasnya adalah variabel**, **nilainya adalah kopi** dan **tipe datanya adalah minuman**, begitu kira kira contohnya*

Masih bingung? oke mari kita sama sama simak gambaran di bawah ini

```
String myvariable = "I Love Hobi Koding"
```

![Struktur Variabel dant tipe data](https://i.ibb.co/9yYP6Lf/Untitled-Diagram-1.png)

pada gambar diatas bisa kita lihat ada `String`, ini menandakan kita menggunakan tipe data String, sedangkan `myvariable` pada gambar tersebut sebagai nama variabel yang fungsingnya menampung nilai, lalu "I Love Hobi Koding" ini apa? nah kalo "I Love Hobi Koding" ini adalah nilai/isian dari variabel   


sampai sini sudah mulai paham ya? yok kita lanjooot!


## Variabel
seperti yang kita tahu variabel adalah suatu penampung untuk menandakan dan menyimpan suatu nilai. mengapa kita perlu variabel dalam suatu program? 

begini perumpamaan sederhananya, jika kalian ingin kue yang ada di toples dan kalian menyuruh teman (program) kalian yang tidak tau toples mana yang harus diambil, maka kalian perlu memberitahu toples (nama variabel) kepada teman kalian agar kalian mendapatkan kue (nilai) yang kalian inginkan. kue ini nantinya bisa kalian makan (output/hasil) atau mau kalian olah lagi (dipakai di proses/fungsi dalam program)

variabel yang kita deklarasikan akan berisi bermacam macam nilai, bisa diisi dengan konstanta, input, output(hasil), konfigurasi dll

variabel variabel ini lah yang nantinya akan menunjang fungsi dalam program yang kita buat

<!-- ngomong-ngomong tentang kue di hawa lebaran gini, mohon maaf lahir dan batin ya buat kamu, salam ya buat ibu di rumah.

MARI FOKUS!!!! -->


### Aturan dan syarat pembuatan variabel

1. Pengidentifikasi sebuah variabel tidak boleh sama seperti keyword pada dart contoh **class**, **if**, **else**, **int**, dll.

2. Pengidentifikasi variabel boleh ada angka, tapi tidak boleh pada awal kata, contoh 6hobikoding

3. Pengidentifikasi variabel tidak boleh pakai spasi dan karakter khusus kecuali tanda underscore (_).


## Implementasi Variabel dalam dart

###   **Penggunaan var**

seperti yang di jelaskan pada bagian sebelumnya tentu akan sangat mudah untuk membuat sebuah variabel menggunakan dart, di dart terdapat keyword `var` yang memudahkan kita untuk mendeklarasikan sebuah variabel tanpa perlu mendefinisikan tipe data pada variabel tersebut. berikut contoh syntaxnya :

```
var nama_variabel;
```

oke sekarang akan kita coba penerapan sederhana nya. pada episode sebelumnya kita pernah membuat folder dengan nama `Belajar-Dart`, coba kita buka kembali folder tersebut



![Variabel Start Dart](https://i.ibb.co/ckmTmXM/variabelstart.png)

buat file baru bernama `first_variabel.dart` :

![Variabel Start Dart](https://i.ibb.co/ckmTmXM/variabelstart.png)

lalu ketikkan kode berikut, pada file  `first_variabel.dart`:

```
void main() {
  var namaBinatang;

  namaBinatang = "Panda"; 
  print("nama binatang = $namaBinatang");

  namaBinatang = 10;
  print("nama binatang = $namaBinatang");
}
```

setelah semua kode sudah ditulis ke dalam [teks editor VS Code](https://code.visualstudio.com/) maka jalankan perintah ini di terminal :


```
dart first_variabel.dart
```

maka hasilnya akan terlihat sepert ini :

![Variabel Hasil Dart](https://i.ibb.co/hZrfK4B/hasilvardarr.png)

#### Penjelasan
```
var namaBinatang;
```

kita mendeklarasikan sebuah variabel bernama namaBinatang tanpa nilai, secara default nilainya adalah  `null`, kita juga mendefinisikan tipe data nya dengan keyword `var` yang artinya tipe data nya bebas bisa apa saja 

```
  //kita isi nilai variabel dengan string 'Panda'
  namaBinatang = "Panda"; 
  print("nama binatang = $namaBinatang");


  //kemudian kita ganti nilainya dengan angka 10
  namaBinatang = 10;
  print("nama binatang = $namaBinatang");
```

pada kode pertama kita mengisi nilai variabel `namaBinatang` dengan string 'Panda', kemudian kita cetak, tidak terjadi Error

pada kode kedua kita mengisi kembali nilai variabel tersebut dengan angka 10, kemudian kita cetak kembali, tidak terjadi Error, 

Kesimpulannya adalah sangat mudah sekali mendeklarasikan variabel dalam dart, kita bisa menggunakan var jika kita membutuhkan sebuah variabel yang tipe data belum tentu yang artinya bisa apa saja, ketika kita sudah mengetahui sebuah variabel akan digunakan untuk apa dan tipe data yang digunakan apa, maka bisa kita deklarasikan juga tipe data, dengan `string`, `int` dll


### Mutable dan Immutable Variabel

1. Mutable Variabel

Variabel berfungsi untuk menyimpan sebuah data sementara

Untuk membuat variabel pada dart kita bisa menuliskannya dengan, menggunakan var :

```
var namaVariabel;
```

atau agar lebih jelas kita bisa menuliskannya dengan tipe datanya seperti berikut : 

```
int angkabulat = 204; // bilangan bulat
double angkadesimal = 54.4; // bilangan desimal
String nama = 'Ricky'; // string

// kemudian ubah nilai salah satu variabel
nama = 'Budi';
print(nama);
```

maka hasilnya adalah :
```
Budi
```

nilainya dapat kita reassign karena variabel ini kita deklarasikan sebagai variabel mutable

bagaimana jika kita ganti nilai variabel `angkabulat` dengan '204' kemudian cetak variabel tersebut, apa yang akan terjadi ? cari tahu ya

2. Immutable Variabel

pada Immutable variabel kita mengunci nilai dari variabel tersebut sehingga nilai dari variabel tersebut tidak bisa kita ubah-ubah, untuk membuat immutable variabel ketikkan kode berikut :

```
const int variabel1 = 46;

variabel1 = 74;
print(variabel1);
```

maka hasilnya 

```
Error: Can't assign to the const variable 'variabel1'.
variabel1 = 74;
```

ketika kita mencoba merubah nilai dari variabel1 akan terjadi error karena kita sudah definisikan `const` di depannya



## Latihan Sederhana

Rasanya kurang lengkap kalo kita belajar tanpa latihan sedikit, kali ini kita akan coba membuat program sederhana untuk menghitung keliling persegi

rumus keliling persegi :

> keliling = 4 x sisi

lalu kita buat sebuah file dart baru, kita beri nama `keliling_persegi.dart`, setelah file kita buat mari kita koding program menghitung keliling persegi ini : 

```
import 'dart:io'; // import library io (input output) agar kita bisa menggunakan stdin

void main() {
  double sisi;
  double keliling;
  const int konstanta = 4;
  String tmp;

  print("Input sisi : ");
  tmp = stdin.readLineSync();
  sisi = double.parse(tmp);

  keliling = konstanta * sisi;

  print("Keliling persegi adalah $keliling");
} 

```

dan hasilnya adalah ? ini adalah semacam tantangan untuk kalian, coba kalian cari tahu sendiri dan analisa sendiri maksud dari kodingan yang sama sama kita kerjain di atas

Selamat Belajar!

![VS code Hello World Dart](https://images.unsplash.com/photo-1527269534026-c86f4009eace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80)

Wowwww!! Selamat! Kalian telah menyelesaikan materi ke-2 dengan sangat baik, kita telah belajar apa itu variabel dan sedikit tentang tipe data, bagaimana mendeklarasikan variabel, bagaimana mengisi sebuah nilai ke variabel. mutable dan immutable variabel dan yang terakhir tentu sedikit latihan, semua ini kita lakukan dengan dart, luar biasa bukan?



## Penutup

Itulah sedikit pengenalan variabel, tipe data dan penerapannya dalam Dart Kita akan melanjutkan pembahasannya pada [series dart](https://hobikoding.com/series/dart/) berikutnya.

### Referensi

- https://dart.dev/