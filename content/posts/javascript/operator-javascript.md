---
title: "Mengenal Operator di Javascript: Unary, Binary, Tenary, Aritmetika dan Logika"
date: 2019-04-03T00:33:47+07:00
description: "berkenalan dengan operator di javascript yang berupa operator tenary, operator binary, operator unary, operator aritmetika, operator logika dan mengenal tentang operand, latihan mendefinisikan variabel"
keywords: "operator javascript tenary binary unary aritmetika logika operand"
draft: false
thumbnail: "https://res.cloudinary.com/hobikoding/image/upload/v1554250891/js/Javascript-operator.jpg"
topic: [javascript]
slug: operator-javascript
github: 'posts/javascript/operator-javascript.md'
---

Kita telah paham dengan beberapa operator matematika seperti tambah `+`, kurang `-`, kali `*`, dan bagi `/`.

Namun pada javascript kita dapat menemukan operator-operator lainnya yang sebelumnya jarang dipelajari pada matematika.

## Mengenal Unary, Binary, Tenary dan Operand

Sebelum melanjutkan materi, perlu terlebih dahulu mengenal tiga istilah di atas.

* ***Operand*** adalah variabel yang dikenakan operasi. Misalnya `5 + 7` maka `5` dan `7` adalah operand.

* ***Operator Unary*** adalah operator yang digunakan dalam operasi yang hanya melibatkan satu buah operand.

    ```javascript {hl_lines=["3-4"]}
    let x = 5

    x++      // operator unary increment
    x = -x   // operator unary negasi
    alert(x) // -6
    ```

* ***Operator Binary*** adalah operator yang digunakan dalam operasi yang melibatkan dua buah operand.

    ```javascript {hl_lines=["3-4"]}
    let a = 3, b = 7

    let c = a + b  // operator binary addition
    c = c - 5      // operator binary subtraction
    alert(c)       // 5
    ```

* ***Operator Tenary*** adalah operator yang digunakan dalam operasi yang melibatkan tiga buah operand.

    ```javascript {hl_lines=["3"]}
    let x = -10

    x = (x > 0) ? x : -x  // mengembalikan nilai ke absolut
    alert(x)              // 10
    ```

### Sekilas Tentang Unary + dan Binary +

Selain dapat melakukan penjumlahan, binary + dapat pula untuk menyambung string.

```javascript
let pesan = 'saya belajar' + ' javascript'
alert(pesan)   // saya belajar javascript
```

Hal ini berlaku juga untuk bilangan (*number*). Operand akan diubah menjadi `string` apabila ditambahkan dengan `string`

```javascript
alert('5' + 2)   // 52
alert(3 + '7')   // 37
```

>**Catatan:** Namun apabila terdapat expresi sebelum operasi di atas, maka expresi akan dijalankan terlebih dahulu (***kode berjalan dari kiri ke kanan***).

Lihat contoh berikut:

```javascript
alert(2 + 2 + '3')   // 43
alert('2' + 2 + 3)   // 223
```

Itulah fitur kusus dari binary +. Pada operator lainnya (`-`, `*`, `/`) akan secara otomatis mengkonversi operand menjadi bilangan. Contoh:

```javascript
alert(5 - '3')     // 2
alert('10' / '2')  // 5
alert('2' * 5)     // 10
```

Berbeda dengan binary +, unary + akan mengubah nilai tunggal menjadi bilangan (*konversi*). Contoh:

```javascript {hl_lines=["8"]}
let stringSatu = '5'
let stringDua = '7'

alert(stringSatu + stringDua)  // 57
// ingat jika string di tambah maka akan disambung

// namun akan berbeda jika diberi unary +
alert(+stringSatu + +stringDua) // 12
```

## Operator Aritmetika

Kita telah mengetahui di sekolah tentang operator aritmetika, seperti tambah, kurang, kali, bagi. Kita juga telah paham bahwa `2 + 3 * 5` adalah `17` (karena perkalian dihitung terlebih dahulu).

Dalam javascript, hal ini dinamakan prioritas. Operator yang memiliki prioritas besar lebih didahulukan daripada operator dengan prioritas kecil.

| Prioritas | Nama | Tanda |
|:---------:|:----:|:-----:|
| ... | ... | ... |
| 16 | unary plus | + |
| 16 | unary negasi | - |
| 16 | increment | ++ |
| 16 | decrement | - - |
| 15 | pangkat | ** |
| 15 | modulus | % |
| 14 | perkalian | * |
| 14 | pembagian | / |
| 13 | penjumlahan | + |
| 13 | pengurangan | - |
| ... | ... | ... |
| 3 | penugasan | = |
| ... | ... | ... |

Contoh:

```js {hl_lines=["4-6"]}
let a = 13,
    b = 2

let c = a ** b,
    d = c++,
    e = -d

alert(`Nilai c: ${c}, Nilai d: ${d}, Nilai e: ${e}`)
```

## Operator Logika

Operator logika adalah operator yang digunakan untuk melakukan operasi dimana nilai yang dihasilkan berupa `true` dan `false`.

Operator logika ada tiga:

* **AND** (`&&`)
* **OR** (`||`)
* **NOT** (`!`)

```js {hl_lines=["1-3"]}
let a = 1 && 1,  // true and true
    b = 1 || 0,  // true or false
    c = !1       // not true

if ((a === 1) && (b === 1) && (c === 1)) alert('a, b, c: true')
else alert('c false') // c false
```

## Penutup

Itulah beberapa operator di dalam javascript. Masih ada operator yang belum disebutkan di atas seperti operator bitwise, yang akan kami bahas kusus di artikel berikutnya.