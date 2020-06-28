---
title: Mengenal Unit Test Pada Nodejs
date: 2020-06-19T11:05:09+07:00
draft: false
description: mengenal unit testing pada backend nodejs
keywords: unit testing nodejs
thumbnail: https://ik.imagekit.io/hobikoding/thumbs/programming/unit-testing-nodejs_QW_gbcNsf.jpg
source: https://unsplash.com/@johnschno
topic: [testing, unit, test]
slug: unit-test-nodejs
github: posts/programming/unit-test-nodejs.md
author: maslul
---

Untuk membuat sistem yang handal, perlu adanya pengujian dari sistem yang dibuat. Hal ini biasanya dilakukan oleh Developer maupun QA (Quality Assurance) menggunakan manual testing maupun automation testing.

Pengujian menggunakan manual testing tentu sangat memakan waktu, karena kita mengujinya secara manual dan jika ingin mengujinya lagi kita akan menjalankannya kembali secara manual.

Sedangkan pengujian menggunakan automation testing, kita hanya perlu melakukan satu kali penulisan testing, setelah itu bisa menjalankan testing berkali-kali.

Automation testing sendiri terbagi menjadi beberapa jenis:

- Unit test
- Integration test
- End to end test

> Unit test sendiri adalah kumpulan skema testing yang dilakukan untuk menguji sebuah function.

## Skema Testing

Skema testing adalah metode untuk menguji suatu sistem. Pengujian terhadap sistem harus dikerjakan secara menyeluruh, untuk itu dalam membuat testing bisa terdapat beberapa skema yang digunakan.

Misalkan terdapat sebuah function yang menerima input berupa beberapa bilangan positif dan mengembalikan nilai terbesar dari beberapa bilangan yang diinputkan

Maka kita dapat membuat beberapa skema testing:

1. Memasukan bilangan yang bukan array, seharusnya mengembalikan error input yang dimasukkan salah
2. Memasukan bilangan negatif ke function tersebut, seharusnya mengembalikan error karena inputan harus bilangan positif
3. Memasukan beberapa bilangan dari yang terkecil hingga terbesar, seharusnya mengembalikan bilangan terbesar

## Subject Testing

Subject testing adalah fungsi yang akan diterapkan unit test. Subject testing diharapkan dapat melewati seluruh rangkaian skema testing dengan benar sehingga menjadi fungsi yang sesuai dengan yang diekspektasikan.

Untuk membuat fungsi dengan ketentuan di atas, dapat dilakukan sebagai berikut:

{{< code >}}

```ini
number.js
```

```js
export const maxNumberOfArray = numbers => {
  if (!Array.isArray(numbers)) {
    throw new Error('Input should be an array')
  }

  let maxNumber = 0
  numbers.map(number => {
    if (number < 0) {
      throw new Error('Numbers must be positive numbers')
    }

    if (number > maxNumber) {
      maxNumber = number
    }
  })

  return maxNumber
}
```

{{< /code >}}

## Unit Test

Berdasarkan skema testing di atas, kita harus mengubahnya menjadi sebuah kode untuk dieksekusi.

Pertama import terlebih dahulu `function maxNumberOfArray`.

```js
const { maxNumberOfArray } = require('./number')
```

setelah itu deskripsikan testing yang dilakukan, karna kita akan melakukan unit test, cukup deskripsikan sebagai nama fungsi saja.

```js
const { maxNumberOfArray } = require('./number')

describe('maxNumberOfArray', () => {
  // skema testing
})
```

Kemudian jalankan skema testing pertama, yaitu memasukan input bukan sebuah array

```js {hl_lines=["4-11"]}
const { maxNumberOfArray } = require('./number')

describe('maxNumberOfArray', () => {
  it('should return error when input not array', () => {
    try {
      const numbers = 0
      maxNumberOfArray(numbers)
    } catch (error) {
      expect(error.message).toEqual('Input should be an array')
    }
  })
})
```

**Penjelasan**:

- kita menggunakan `try-catch` untuk mengambil catch error dari fungsi
- kita membandingkan error message dari fungsi yang seharusnya mengembalikan `Input should be an array`

Selanjutnya kita jalankan skema testing kedua, yaitu memasukan input berupa bilangan negatif

```js {hl_lines=["13-20"]}
const { maxNumberOfArray } = require('./number')

describe('maxNumberOfArray', () => {
  it('should return error when input not array', () => {
    try {
      const numbers = 0
      maxNumberOfArray(numbers)
    } catch (error) {
      expect(error.message).toEqual('Input should be an array')
    }
  })

  it('should return error when is negative number', () => {
    try {
      const numbers = [9, -3, 17, 53]
      maxNumberOfArray(numbers)
    } catch (error) {
      expect(error.message).toEqual('Numbers must be positive numbers')
    }
  })
})
```

**Penjelasan**:

- kita menggunakan `try-catch` untuk mengambil catch error dari fungsi
- kita membandingkan error message dari fungsi yang seharusnya mengembalikan `Numbers must be positive numbers`

Dan yang terakhir, kita memasukan input sesuai dengan yang di ekspektasikan

{{< code >}}

```ini
number.test.js
```

```js {hl_lines=["22-26"]}
const { maxNumberOfArray } = require('./number')

describe('maxNumberOfArray', () => {
  it('should return error when input not array', () => {
    try {
      const numbers = 0
      maxNumberOfArray(numbers)
    } catch (error) {
      expect(error.message).toEqual('Input should be an array')
    }
  })

  it('should return error when is negative number', () => {
    try {
      const numbers = [9, -3, 17, 53]
      maxNumberOfArray(numbers)
    } catch (error) {
      expect(error.message).toEqual('Numbers must be positive numbers')
    }
  })

  it('should return max number in array', () => {
    const numbers = [10, 3, 17, 52, 19]
    const result = maxNumberOfArray(numbers)
    expect(result).toEqual(52)
  })
})
```

{{< /code >}}

**Penjelasan**:

- apabila memasukkan bilangan yang diekspektasikan, maka fungsi akan mengembalikan nilai bilangan terbesar dari yang diinputkan.

## Penutup

Perbedaan utama dari unit test dengan automation testing lain yaitu, skop pengujian unit test terbatas pada function. Sehingga pengujian lebih sedikit namun detail pada function tersebut.

Itulah sedikit perkenalan unit test, di lain kesempatan akan kami ulas automation testing lainnya.
