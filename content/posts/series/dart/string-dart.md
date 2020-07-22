---
title: "Dart #4 Dart String"
date: 2020-07-22T13:59:05+00:00
draft: false
description: mengenal String dalam pemrograman dart, membuat String di dart, deklarasi String di dart dan menggunakan built in function dart,
keywords: dart string
thumbnail: https://ik.imagekit.io/hiwbjdxpmw/rsz_1sean-lim-nplv2pkyoua-unsplash_eOF-Mb-3BM.jpg
source: https://unsplash.com/@seanlimm
topic: [dart]
slug: string-dart
github: /posts/dart/string-dart.md
author: ricky
---

Hai, terimakasih telah berkunjung ke Hobi Koding. Saat ini teman-teman sedang berada di series [Belajar Dart](https://hobikoding.com/series/dart/).

Di series ini kita akan belajar Dart Basic hingga Advance.

## String 
Tipe data String yaitu sekumpulan karakter. Pada tipe data ini biasanya mempresentasikan sebuah teks.

String ini menggunakan unit kode UTF-16. String pada Dart bisa menyimpan data dari satu line sampai multiline(beberapa baris). Tipe data string dapat ditandai dengan :


1. Petik satu ganda `(' ')` atau petik dua ganda `(" ")` untuk satu line (baris).
```
'Ini adalah string satu baris';
```

2. Petik satu triple `(''' ''')` atau petik dua triple `(""" """)` untuk menyimpan data multiline.
```
''' 
ini adalah
string multiline 
''';
```

## Deklarasi Variabel tipe data string

mari kita mengulang materi ini kembali agar lebih paham, ada yang masih ingat bagaimana mendeklarasikan variabel tipe data string?

yap!, ada 2 caranya, yaitu

1. dengan keyword `String`

```
void main() {
    String semangat = 'hobikoding lebih baik daripada ruanggur*';
}
```

2. dengan keyword `var`

```
void main() {
    var semangat = 'hobikoding tempat belajar ngoding ku';
}

```


## Interpolasi Dart

Interpolasi atau penggabungan yaitu proses membuat sebuah string baru dengan cara menambahkan nilai string ke satu string lain

ada beberapa cara untuk melakukan interpolasi string ini, diantaranya : 


1. menggunakan keyword `+`

```
void main() {
    String awal = 'hobikoding ';
    String akhir = 'mainnya hebat';
    print(awal + akhir); // interpolasi dengan variabel

    print('halo ' + 'hobikoding'); // interpolasi tanpa variabel
}


// output
// hobikoding mainnya hebat
// halo hobikoding
```

2. tanpa keyword `+`


```
void main() {
    print('Belajar ' 'di ' 'hobikoding ' 'menyenangkan');
}

// result
// belajar di hobikoding menyenangkan
```

3. Interpolasi dalam string

```
void main() {
    var kata1 = 'Hobikoding ';
    var kata2 = 'makin joss';


    print("Hasil Interpolasi dari $kata1 + kata menjadi ${kata1 + kata2}");
}
```

Pada kasus ini untuk menampilkan suatu variabel pada String kita perlu keyword `$` dan jika pada suatu variabel tersebut ada operasi maka gunakan `${}`.

## Property
<br>

| Property     | Description                                                    |
| ------------ | -------------------------------------------------------------- |
| codeUnits    | Mengembalikan list unit kode UTF-16                            |
| isEmpty      | Mengembalikan **true** jika kosong, jika tidak **false**       |
| isNotEmpty   | Mengembalikan **true** jika tidak kosong, jika tidak **false** |
| length       | Mengembalikan panjang karakter termasuk spasi, tab             |

### codeUnits

```
void main() {
  String str = "Hobikoding";
  print("codeUnits: ${str.codeUnits}");
}
```

Akan menghasilkan output list karakter kode unit UTF-16.

output

```
codeUnits: [72, 111, 98, 105, 107, 111, 100, 105, 110, 103]
```

---

### isEmpty

```
void main() {
  String str = "hobikoding";
  String str1 = '';
  
  print("apakah variabel ini tidak ada isinya (string)? ${str.isEmpty}");
  print("apakah variabel ini tidak ada isinya (string)? ${str1.isEmpty}");
}
```
output

```
apakah variabel ini tidak ada isinya (string)? false
apakah variabel ini tidak ada isinya (string)? true
```

Pada property ini jika panjang karakter dari panjang string itu 0 atau kosong, seperti pada contoh diatas maka akan mengembalikan nilai **true**, jika tidak kosong **false**.

---

### isNotEmpty

```
void main() {
  String str = "hobikoding";
  String str1 = '';
  
  print("apakah variabel ini tidak ada isinya (string)? ${str.isNotEmpty}");
  print("apakah variabel ini tidak ada isinya (string)? ${str1.isNotEmpty}");
}
```
output

```
apakah variabel ini tidak ada isinya (string)? true
apakah variabel ini tidak ada isinya (string)? false
```

`isNotEmpty` merupakan kebalikannya dari `isEmpty`, ketika panjang string itu 0 atau kosong, maka mengembalikan nilai false

---

### length

```
void main() {
  String str = "Hobikoding";
  String str1 = "hobikoding ";
  
  print("length variabel str ${str.length}");
  print("length variabel str ${str1.length}");
}
```
output

```
length variabel str 10
length variabel str 11
```

Properti ini mengembalikan panjang dari suatu variabel string. perlu diingat bahwa spasi juga di hitung pada properti ini

## Method

| Method        | Description                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------ |
| toLowerCase() | Mengubah karakter string jadi huruf kecil                                                        |
| toUpperCase() | Mengubah karakter string jadi huruf kapital                                                      |
| trim()        | Menghapus spasi pada awal dan akhir kalimat                                                      |  
| replaceAll()  | Mengganti semua substring yang cocok dengan nilai yang diberikan                                 |
| split()       | Memisahkan string pada param yang ditentukan                                                     |
| substring()   | Mengembalikan substring dari string mulai startIndex, inklusif, endIndex, dan exklusif           |
| toString()    | Mengembalikan nilai ke String                                                                    |


### toLowerCase()

```
void main() {
  var hk = "HOBIKODING!";
  print(hk.toLowerCase());
}

// result
// hobikoding!
```

`toLowerCase()` akan mengubah setiap string menjadi huruf kecil dalam case ini string pada variabel hk dirubah menjadi huruf kecil

---

### toUpperCase()

```
void main() {
  var hk = "HOBIKODING!";
  print(hk.toUpperCase());
}

// result
// HOBIKODING!
```

`toUpperCase()` akan mengubah setiap string menjadi huruf besar atau kebalikan dari `toLowerCase()` dalam case ini string pada variabel hk dirubah menjadi huruf besar

---


### trim()

```
void main() {
 var s = "      hobikoding tempat belajarku       ";
  print(s.trim());
}

// result
// hobikoding tempat belajarku
```

Pada method ini fungsinya untuk menghapus space pada awal dan akhir suatu kalimat / kata. sangat membantu untuk menghandle string sebelum diolah / dimasukkan ke database

---


### replaceAll()

```

 void main() {
  var s = "hobikoding hobikoding joss";
  print(s.replaceAll('o', 'a')); // replace karakter
  print(s.replaceAll('joss', 'mantap')); // replace kata
}


// result
// habikading habikading joss
// hobikoding hobikoding mantap
```

fungsi ini mencari string pada parameter pertama dan menggantinya dengan parameter kedua, fungsinya mirip seperti **find and replace**

---


### split()

```

 void main() {
  var hk = "saya belajar di hobikoding";
  print(hk.split(' '));
}

// result
// [saya, belajar, di, hobikoding]

```

Pada method ini akan memisahkan string sesuai parameter yang diinginkan

---


### substring()

```

 void main() {
  var hk = "hobikoding is the best";
  print(s.substring(5));
  print(s.substring(5, 8));
}

// result
// oding is the best
// odi

```

pada method ini `substring()` mempunyai 2 param yaitu `startIndex` dan `endIndex` yang akan berbentuk seperti ini jika lengkap `substring(startIndex, endIndex)`

di contoh yang pertama kita hanya memberikan 1 param yaitu `startIndex` dengan nilai 5, maka jika dihitung index ke 5 dari "hobikoding is the best' adalah o, perlu diingat index dimulai dari 0 maka huruf 'h' adalah index ke 0, jadi hasilnya adalah 'oding is the best'

nah sekarang ke contoh yang kedua, kita mengisi 2 variabel sekaligus atau lengkap `startIndex` dan `endIndex` kita mulai di index ke-5 yaitu 0, kita hitung untuk index ke-8 adalah n maka akan terbentuk string 'odi' karena param ke-2 menandakan end (akhir)

---

![VS code Hello World Dart](https://images.unsplash.com/photo-1527269534026-c86f4009eace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80)

Wowwww!! Selamat! Kalian telah menyelesaikan materi ke-4 dengan sangat baik, kita telah belajar lebih dalam mengenai string pada dart, interpolasi string, beberapa property dan method yang dapat kita gunakan untuk membantu kita dalam membuat program dengan dart? hebat yah dart?

## Penutup

Sekian untuk materi dart kali ini tentang String pada dart, Kita akan melanjutkan pembahasannya pada [series dart](https://hobikoding.com/series/dart/) berikutnya.

### Referensi

- https://dart.dev/
- https://api.dart.dev/