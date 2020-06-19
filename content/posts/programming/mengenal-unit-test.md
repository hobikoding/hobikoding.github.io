---
title: Mengenal Unit Test Pada Backend
date: 2020-06-19T11:05:09+07:00
draft: true
description: mengenal unit testing pada backend nodejs
keywords: unit testing nodejs
thumbnail:
source:
topic: [testing, unit, test]
slug: mengenal-unit-test
github: posts/programming/mengenal-unit-test.md
author: maslul
---

Untuk membuat aplikasi yang handal, perlu adanya pengujian dari sistem yang dibuat. Hal ini biasanya dilakukan oleh Developer maupun QA (Quality Assurance) menggunakan manual testing, unit test, integration test maupun end-to-end test.

Unit test sendiri adalah file file yang memuat berbagai skema testing yang digunakan untuk menguji function dalam software development.

Pengujian menggunakan manual testing tentu sangat memakan waktu, karena kita mengujinya secara manual baik menggunakan postman maupun mencoba aplikasinya secara langsung.

## Berkenalan Dengan Testing

Unit test digunakan untuk menguji sebuah function. Function akan melakukan proses terhadap input dan mengembalikan sebuah hasil. Input dan hasil inilah yang akan kita cek menggunakan unit testing.

Misalnya,

Kita mempunyai function yang menerima input bilangan positif kemudian mengembalikan hasil angka terbesar dari seluruh angka yang diinputkan.

Kita buat skema testingnya,

Kita asumsikan input yang diberikan yaitu `9, 3, 7, 11, 30, 21`, maka ekspektasi kita function tersebut harus mengembalikan hasil `30`. Karena 30 adalah nilai terbesar dari seluruh nilai yang diinputkan.

Kita bisa membuat fungsinya seperti ini:

```js
const getMaxNumber = numbers => {
  let maxNumber = 0
  numbers.map(number => (number > maxNumber ? (maxNumber = number) : null))
  return maxNumber
}
```

Dan memanggilnya seperti ini:

```js
const positiveNumber = [9, 3, 7, 11, 30, 21]
getMaxNumber(positiveNumber)
```

## Membuat Unit Test

Ketika membuat unit testing, kita
