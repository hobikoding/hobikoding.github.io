---
title: "Mengenal Operator Bitwise Pada Pemrograman Javascript"
date: 2019-04-05T17:26:56+07:00
description: "mengenal operator bitwise dalam pemrograman c/c++ dan javascript, mengenal operasi pada operator bitwise, beberapa operasi yang dapat dilakukan menggunakan operator bitwise, penggunaan operator binary, manipulasi bilangan binary dengan operator bitwise"
keywords: "operator bitwise c++ javascript"
draft: false
thumbnail: "https://res.cloudinary.com/hobikoding/image/upload/v1554473889/js/Javascript_operator_bitwise.jpg"
topic: [javascript]
slug: operator-bitwise
github: 'posts/javascript/operator-bitwise.md'
author: maslul
---

Seperti halnya bahasa C dan turunannya, termasuk C++ dan Javascript mendukung penuh operator bitwise.

Operator bitwise bertujuan untuk melakukan manipulasi dalam bentuk bit,

Beberapa jenis operator bitwise adalah:

* AND (`&`)
* OR (`|`)
* XOR (`^`)
* NOT (`~`)
* Right Shift (`>>`)
* Left Shift (`<<`)
* Zero-Fill Right Shift `(>>>`)

## And, Or, dan Not

Jika diperhatikan, perintah and (`&`), or (`|`) dan not (`~`) sama dengan [operator logika](https://www.hobikoding.com/operator-javascript#operator-logika).

Hanya saja operator bitwise menangani operand dalam bentuk bit, sedangkan operator logika menangani operand dalam bentuk nilai.

Contoh:

```js
alert(7 & 23)  // 7
alert(7 | 23)  // 23
alert(~13)     // -14
```

Dapat dari mana hasil tersebut?

Ingat bahwa `false` bernilai `0` sedangkan `true` bernilai `1`. Ingat pula aturan pada [operator logika](https://www.hobikoding.com/operator-javascript#operator-logika) tentang `and`, `or` dan `not`. Sekarang perhatikan penggunakan ketiga operator di atas:

### Operator And (&)

|Nilai|Nilai dalam Biner|
|:---:|:---------------:|
|7|00000000000`00111`|
|23|00000000000`10111`|
|**Hasil**|00000000000`00111`|

Hasil diatas menunjukan ***0000000000000111*** yang merupakan biner dari ***`7`***

### Operator Or (|)

|Nilai|Nilai dalam Biner|
|:---:|:---------------:|
|7|00000000000`00111`|
|23|00000000000`10111`|
|**Hasil**|00000000000`10111`|

Hasil diatas menunjukan ***0000000000010111*** yang merupakan biner dari ***`23`***

### Operator Not (~)

|Nilai|Nilai dalam Biner|
|:---:|:---------------:|
|13|0000000000001101|
|**Hasil**|1111111111110010|

Hasil diatas menunjukan ***1111111111110010*** yang merupakan biner dari ***`-14`***

## Operator Xor (^)

Xor atau Exclusive OR adalah operasi yang bernilai 1 (`true`) jika satu operandnya (bukan salah satu) bernilai `true`, selain itu akan menghasilkan nilai 0 (`false`).

```js
alert(4 ^ 3)  // 7
```

Perhatikan tabel berikut untuk lebih jelasnya.

|Nilai|Nilai dalam Biner|
|:---:|:---------------:|
|3|0000000000000`011`|
|4|0000000000000`100`|
|**Hasil**|0000000000000`111`|

Hasil diatas menunjukan ***0000000000000111*** yang merupakan biner dari ***`7`***

## Operator Right Shift (>>)

Shift Right digunakan untuk memindahkan bit ke sisi kanan senilai `n` base

```js
// 2 base
alert(25 >> 2)   // 6

// 3 base
alert(-35 >> 3)  // -5
```

|Nilai|Nilai dalam Biner|
|:---:|:---------------:|
|25|00000000000`11001`|
|25 >> 2|`00`00000000000`110`|
|-35|1111111111`011101`|
|-35 >> 3|`111`1111111111`011`|

Hasil `25 >> 2` diatas menunjukan ***0000000000000110*** yang merupakan biner dari ***`6`***. Sedangkan hasil `-35 >> 3` diatas menunjukan ***1111111111111011*** yang merupakan biner dari ***`-5`***.

## Operator Left Shift (<<)

Hampir sama seperti shift right, hanya saja shift left memindahkan ke sisi kiri senilai `n` base

```js
alert(25 << 2)   // 100
alert(-35 << 3)  // -280
```

|Nilai|Nilai dalam Biner|
|:---:|:---------------:|
|25|00000000000`11001`|
|25 << 2|000000000`1100100`|
|-35|1111111111`011101`|
|-35 >> 3|1111111`011101000`|

Hasil `25 << 2` diatas menunjukan ***0000000001100100*** yang merupakan biner dari ***`100`***. Sedangkan hasil `-35 << 3` diatas menunjukan ***1111111011101000*** yang merupakan biner dari ***`-280`***.

Terlihat bahwa left shift ketika melakukan pemindahan pada bilangan negatif, akan mengisi kekosongan pemindahan senilai `0`, perhatikan 1111111011101`000`.

Berbeda dengan right shift yang mengisinya dengan `1`, perhatikan `111`1111111111011.

## Zero-Fill Right Shift

Hampir sama dengan Right Shift, hanya saja ketika melakukan pemindahan bilangan negatif akan mengisi kekosongan dengan nilai `0` bukan `1`.

```js
alert(25 >>> 2)   // 6
alert(-35 >>> 3)  // 536870907
```

|Nilai|Nilai dalam Biner|
|:---:|:---------------:|
|25|00000000000`11001`|
|25 >>> 2|`00`00000000000`110`|
|-35|1111111111`011101`|
|-35 >>> 3|`000`1111111111`011`|

Hasil `25 >>> 2` sama dengan `25 >> 2`, namun pada bilangan negatif `-35 >>> 3` bernilai `536870907`, berbeda dengan `-35 >> 3`.

## Akhir Kata

Itulah beberapa operasi dalam operator bitwise. Penggunaannya sendiri memang sangat jarang ditemui. Namun pada hal-hal tertentu yang harus ditangani secara binary, operator bitwise dapat diandalkan.
