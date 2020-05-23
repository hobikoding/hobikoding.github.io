---
title: "Mengenal Operator Perbandingan Pada Pemrograman Javascript"
date: 2019-04-06T13:50:06+07:00
description: "mengenal operator perbandingan di pemrograman javascript, mengenal operator perbandingan pada javascript, membandingkan operand pada javascript, mengetahui jenis-jenis operator perbandingan pada javascript"
keywords: "operator perbandingan javascript"
draft: false
thumbnail: "https://res.cloudinary.com/hobikoding/image/upload/v1554632946/js/Javascript_operator_perbandingan.jpg"
topic: [javascript]
slug: operator-perbandingan
github: 'posts/javascript/operator-perbandingan.md'
author: maslul
---

Operator perbandingan merupakan operator yang membandingkan antara dua operand, serta mengembalikan return dalam bentuk bolean (`true` / `else`).

* `true` jika perbandingan tersebut bernilai benar
* `false` jika perbandingan tersebut bernilai salah

## Beberapa Operator Perbandingan

Terdapat beberapa operator perbandingan pada javascript:

* Sama Dengan (`==`)
* Sama Dengan Tipe (`===`)
* Tidak Sama Dengan (`!=`)
* Tidak Sama Dengan dan Sama Tipe (`!==`)
* Lebih Dari (`>`)
* Kurang Dari (`<`)
* Lebih Dari Sama Dengan (`>=`)
* Kurang Dari Sama Dengan (`<=`)

### Sama Dengan dan Sama Dengan Tipe

Kedua fungsi ini hampir mirip, perbedaannya hanya pada sama dengan tidak memandang tipe dari operand. Sehingga string `1` akan sama dengan integer `1`. Contoh:

```js
alert('1' == 1)   // true
alert('1' === 1)  // false
```

Pada kode di atas, `sama dengan` tidak membedakan tipe `string` dengan `integer`, namun hanya melihat bahwa nilai dari operand adalah `1`.

### Tidak Sama Dengan dan Tidak Sama Dengan Tipe

Kebalikan dari fungsi sebelumnya, tidak sama dengan akan mengembalikan nilai `true` jika kedua operand tidak sama dan mengembalikan nilai `false` jika operand sama.

```js
alert(`5` != 5)  // false
alert('5' !== 5)  // true
```

Fungsi `tidak sama dengan` menganggap kedua operand memiliki tipe sama, sehingga `'5' != 5` akan bernilai false.

Sedangkan `tidak sama dengan tipe` menganggap operand dengan nilai sama namun berbeda tipe sebagai dua buah operand yang berbeda.

### Lebih Dari dan Lebih Dari Sama Dengan

Fungsi `lebih dari` akan mengembalikan nilai `true` apabila operand pertama lebih dari operand kedua.

Sedangkan `lebih dari sama dengan` akan mengembalikan nilai `true` apabila operand pertama lebih dari atau sama dengan operand kedua.

```js
alert(13 > 13)   // false
alert(13 >= 13)  // true
```

### Kurang Dari dan Kurang Dari Sama Dengan

Fungsi `kurang dari` akan mengembalikan nilai `true` apabila operand pertama kurang dari operand kedua.

Sedangkan kurang dari sama dengan akan mengembalikan nilai `true` apabila operand pertama kurang dari atau sama dengan operand kedua.

```js
alert(5 < 5)   // false
alert(5 <= 5)  // true
```

## Perbandingan Dalam String

Selain pada bilangan integer, kita juga dapat menerapkan perbandingan pada tipe string. Contoh:

```js
alert('A' > 'a')         // false
alert('Hallo' > 'Halla') // true
alert('Hai' > 'Ha')      // true
```

Kenapa bisa begitu?

1. Javascript akan membandingkan karakter pertama dari sebuah string.
1. Apabila karakter pertama lebih dari karakter pertama pada string lainnya maka akan mengembalikan nilai `true`.
1. Jika karakter pertama bernilai sama, maka akan mengembalikan nilai `false`.
1. Namun apabila terdapat karakter kedua, perbandingan akan dilanjutkan pada karakter berikutnya.

### Dari Mana Nilai Perbandingannya

Perbandingan tersebut bukan dari besarnya karakter pada sebuah `string`, namun berasal dari unicode karakter tersebut. Jalankan kode berikut dan lihat hasilnya:

```js
alert('A'.charCodeAt().toString(16))  // 41
alert('a'.charCodeAt().toString(16))  // 61
```

Terlihat bahwa karakter `A` memiliki unicode `41` sedangkan `a` memiliki unicode `61`. Oleh karena itu `'A' > 'a'` menghasilkan nilai `false`.

## Membandingan Tipe Yang Berbeda

Kita juga bisa membandingkan dua operand yang berbeda tipe, contoh:

```js
alert('2' > 1)   // true karena 2 lebih dari 1
alert('01' == 1) // true karena 01 sama dengan 1
```

Apabila membandingkan dua tipe data yang berbeda, maka `string` akan diubah dalam bentuk bilangan.

Untuk nilai bolean, `true` akan diubah menjadi `1` dan `false` akan diubah menjadi `0`

```js
alert(false == 0)   // true
alert(false < 1)    // true
```

## Membandingkan Tipe Tidak Terdefinisi

Beberapa data yang memiliki tipe tidak terdefinisi seperti `null`, `undefined` dan `string kosong` didefinisikan dengan nilai `false`.

```js
alert('' == false)       // true
alert(null == undefined) // true
```

Pada operasi matematika lainnya, `null` dikonversi menjadi `0` sedangkan `''` dan `undefined` bernilai `NaN`

```js
alert(null > -1) // true
alert(null > 1)  // false
```

## Akhir Kata

Itulah beberapa operator yang bisa dilakukan untuk membandingkan operand. Penggunaan secara kusus akan dibahas pada materi percabangan javascript.
