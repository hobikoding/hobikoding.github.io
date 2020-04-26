---
title: "Mengenal Variabel di Javascript: Perbedaan Const, Let, dan Var"
date: 2019-04-02T05:57:09+07:00
description: "perbedaan const let dan var, mengenal variabel dalam javascript, membuat dan mendefinisikan variabel dalam javascript es6, fungsi variabel pada javascript, variabel javascript, emacscript 6"
keywords: "javascript variabel const let var"
draft: false
thumbnail: "https://res.cloudinary.com/hobikoding/image/upload/v1554204189/js/js.jpg"
topic: [javascript]
slug: variabel-javascript
github: 'posts/javascript/variabel-javascript.md'
---

Ada tiga cara mendefinisikan variabel dalam javascript. Yaitu dengan:

* ***var***
* ***let***
* ***const***

contoh:

```javascript
var pesanPertama = 'Hello World'
let pesanKedua = 'Saya Belajar Javascript'
const pesanKetiga = 'Ternyata Menyenangkan'
```

## Lalu apa perbedaannya

`var` merupakan cara mendefinisikan variabel versi lama. Karena menimbulkan kerancuan akhirnya cara ini mulai ditinggalkan pada gaya penulisan ES6.

Fungsi `var` mendefinisikan variabel dalam lingkup global, apabila project kita besar tentu sangat membingungkan mengolah semua variabel dalam skala global. Contoh:

```javascript
var pesan = 'Hello World'
alert(pesan)

if (true) {
    var pesan = 'Belajar Javascript'
    alert(pesan)
}

alert(pesan)
```

Pada `alert` pertama, menampilkan Hello World. Namun `alert` kedua dan ketiga menampilkan Belajar Javascript. Hal ini karena nilai variabel telah kita ubah pada sekop `if`.

Berbeda dengan let, contoh:

```javascript
let pesan = 'Hello World'
alert(pesan)

if (true) {
    let pesan = 'Belajar Javascript'
    alert(pesan)
}

alert(pesan)
```

`alert` pertama dan ketiga menampilkan Hello World sedangkan `alert` kedua menampilkan Belajar Javascript

>Hal ini karena fungsi `var` mendefinisikan variabel dalam lingkup global, sedangkan `let` tidak

## Perbedaan Dengan const

Berbeda dengan yang lainnya, `const` mendefinisikan variabel sebagai nilai yang konstan, sehingga kita tidak bisa mengubah nilainya lagi. Contoh:

```javascript
let pesanLet = 'Hello World'
const pesanConst = 'Hello World'

pesanLet = 'Pesan Let diubah'
alert(pesanLet)

pesanConst = 'Pesan Const diubah'
alert(pesanConst)
```

Alert pertama akan memunculkan `Pesan Let diubah`. Namun alert kedua tidak muncul?

Hal ini karena terjadi error ketika mengubah variabel konstal sehingga kode berikutnya tidak dapat dijalankan.

### Kenapa menggunakan const

Mungkin kita juga berfikir, untuk apa menggunakan `const`, kita bisa kok menggunakan `let`?

Perlu diingat terkadang kita menulis kode tidak hanya dibaca oleh kita. Bisa juga bawahan atau atasan kita. `const` seperti memberikan janji ke pembaca bahwa nilai tersebut benar-benar tidak akan berubah.

Ya seperti itulah...

## Operasi di Variabel

Kita juga bisa membuat operasi di variabel yang telah didefinisikan. Contoh:

```javascript {hl_lines=["4-5"]}
let a = 5
let b = 10

let tambah = a + b
let kali = a * b

alert(tambah)
alert(kali)
```

Pada kode di atas kita memberikan nilai variabel `a` dan `b` kemudian diberikan operasi penjumlahan dan perkalian pada variabel `tambah` dan `kali`.

## Gaya Penulisan

Kita bisa mendefinisikan terlebih dahulu suatu variabel, kemudian diberikan nilai. Contoh:

```javascript {hl_lines=["1", "3-5"]}
let a, b, c

a = 10
b = 5
c = a + b

alert(c)
```

Namun gaya penulisan seperti ini sangat jarang kita jumpai pada Javascript.

## Akhir Kata

Itulah beberapa cara mendefinisikan variabel pada pemrograman Javascript. Saya sendiri lebih sering menggunakan `const` daripada `let`.

Namun jangan kawatir apabila banyak tutorial yang menggunakan `var`. Kemungkinan tutorial tersebut dibuat dari lama sehingga masih menggunakan gaya penulisan ES5. Untuk sekarang biasakanlah menggunakan `let` atau `const` untuk mendefinisikan variabel.
