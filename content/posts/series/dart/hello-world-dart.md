---
title: "Dart #1 How to join Dart Side & Make your first Hello World"
date: 2020-05-30T00:55:31+07:00
draft: false
description: Pengenalan Dart, Instalasi Dart, pengenalan syntax dart hello world, belajar bahasa dart, belajar fundamental dart, belajar dart advance
keywords: dart fundamental
thumbnail: /img/hello-world-dart/thumbnail.jpg
source: https://unsplash.com/@valccrn
topic: [dart]
slug: hello-world-dart
github: /posts/dart/hello-world-dart.md
author: ricky
---


Hai, terimakasih telah berkunjung ke Hobi Koding. Saat ini teman-teman sedang berada di series [Belajar Dart](https://hobikoding.com/series/dart/).

Di series ini kita akan belajar Dart Basic hingga Advance.

## Apa Itu Dart?

Dart adalah bahasa pemrograman yang dikembangkan oleh Google yang bisa digunakan untuk mengembakan aplikasi mobile, desktop, backend maupun web. Bahasa ini merupakan bahasa pemrograman bertipe Object Oriented dimana struktur kode kita berada di dalam class, class berisi data dan method, Dart memakai C-style syntax yang mirip dengan bahasa C, Java, Javascript.

Untuk memulai belajar Bahasa Pemrograman Dart, teman teman bisa menggunakan console online di [Dartpad](https://dartpad.dev/) ataupun melalui offline di laptop masing masing.

## Kelebihan Dart

![Kelebihandart](https://images.unsplash.com/photo-1544816565-aa8c1166648f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)

### Fleksibel
Dart adalah bahasa pemrograman tersebut termasuk ke dalam bahasa pemrograman bertipe dinamis. Bahasa pemrograman ini dapat dikompilasi ke dalam bahasa pemrograman JavaScript dengan compiler yang sudah disertakan di dalamnya.

### Berdiri Sendiri
ketersediaan SDK yang dilengkapi dengan berbagai macam tools pengembangan. Salah satu tool-nya adalah Dart VM, dimana tool tersebut akan membantu para developer untuk menjalankan kode dalam lingkungan tampilan command line.

### Concurrency
Bahasa pemrograman Dart memiliki kelebihan dengan adanya konstruksi nyata dari concurrency dan paralelisme. Kelebihan bahasa pemrograman Dart satu ini ditawarkan dengan bentuk Dart Isolates. Dengan adanya Dart Isolates, program-program akan terisolasi untuk bekerja secara independen tanpa adanya pembagian memori, akan tetapi tetap terdapat komunikasi diantaranya.

## Instalasi Dart

seperti dijelaskan sebelumnya teman teman bisa langsung mencoba koding secara online menggunakan [Dartpad](https://dartpad.dev/) tapi disini saya juga akan menjelaskan bagaimana menginstall dart pada laptop kita masing masing

saya akan mencontohkan install Dart pada Mac

Kita dapat menggunakan homebrew, jika belum menginstal homebrew silahkan klik [disini](https://brew.sh/)  dan install terlebih dahulu, setelah homebrew terinstal kemudian buka terminal dan ketik perintah berikut :

```
 brew tap dart-lang/dart
 brew install dart
```

jika kita ingin menggunakan versi dev, gunakan perintah :
```
 brew install dart --devel
```

untuk melakukan upgrade, gunakan perintah :
```
 brew upgrade dart
```

Untuk beralih versi rilis Dart yang dipasang secara lokal, gunakan brew switch dart `version` :
```
 brew switch dart 2.1.0
```

Untuk melihat versi Dart yang telah Anda install :
```
brew info dart
```


## Hello World 

Pertama silahkan buat direktori atau folder baru dengan nama Belajar-dart. Setelah itu buka dengan [teks editor VS Code](https://hobikoding.com/series/dart/).

``` 
mkdir Belajar-dart 
cd Belajar-dart
code .
```
![VS Code start](https://i.ibb.co/k9ywws8/dart-code.png)

Yay... setelah terbuka vs code tersebut kita akan mulai ngoding dart

buat file baru bernama `hello_world.dart` :

![VS code new file dart](https://i.ibb.co/F7VpwwB/newfiledart.png)

mari kita tulis kodingan hello world kita ke dalam file `hello_world.dart` yang telah di buat tadi

``` 
void main(){
    print('Hello World!');
}
```

save file yang telah kita simpan

kemudian untuk menjalankan program yang kita buat, ketikkan perintah ini di terminal :

``` 
dart hello_world.dart
```

lalu hasilnya akan seperti ini

![VS code Hello World Dart](https://i.ibb.co/12FRLJx/helloworlddart.png)



### Penjelasan

Fungsi main() adalah fungsi utama dalam program. Fungsi ini akan dieksekusi pertamakali saat program dijalankan.

void artinya tidak ada (kosong). Jika kita menggunakan void, maka kita tidak perlu menuliskan kata kunci return di akhir fungsi. Karena fungsi void tidak akan mengembalikan nilai apapun.

```
void main(){
    //...
}
```

Fungsi print() berfungsi untuk mencetak atau menampilkan objek ke perangkat keluaran (layar) atau ke file teks
dalam hal ini kita ingin menampilkan string "Hello world!"

```
print('Hello World!');
```



![VS code Hello World Dart](https://images.unsplash.com/photo-1527269534026-c86f4009eace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1250&q=80)

Wowwww!! Selamat! Kalian telah membuat hello world pertama kalian dengan dart, bagaimana? menyenangkan bukan?

## Penutup

Itulah sedikit pengenalan hello world dan syntax Dart Kita akan melanjutkan pembahasannya pada [series dart](https://hobikoding.com/series/dart/) berikutnya.

### Referensi

- https://dart.dev/