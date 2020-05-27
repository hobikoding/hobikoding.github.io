---
title: "Belajar Golang #4 Operator"
date: 2020-05-27T11:56:16+07:00
draft: false
description: mengenal operator pada bahasa pemrograman golang, beberapa jenis operator di golang, operator aritmetika, operator logika, operator perbandingan di golang
keywords: operator golang
thumbnail: /img/operator-golang/thumbnail.jpg
source: https://unsplash.com/@alexkixa
topic: [golang]
slug: operator-golang
github: /posts/series/golang/operator-golang.md
author: maslul
---

Halo semua, terimakasih telah berkunjung di Hobi Koding. Saat ini teman-teman sedang berada di series [belajar golang](https://hobikoding.com/series/golang/).

Di series ini kita akan belajar fundamental golang hingga advance golang.

## Operator

Ketika membuat aplikasi, pasti akan berhubungan dengan operasi dan logika.

Misalnya untuk melihat user sudah membayar atau belum, menjumlahkan total transaksi, dan lain sebagainya.

Setidaknya terdapat 3 jenis operator di golang, yaitu:

- Operator Aritmetika
- Operator Perbandingan
- Operator Logika

### Operator Aritmetika

Operator ini biasa digunakan untuk perhitungan matematika yang terdapat di aplikasi. Pada contoh yang sederhana seperti menghitung luas segitiga, volume bola, dan menghitung total transaksi harian.

Operator jenis ini antara lain:

| Operator    | Keterangan    |
|-------------|---------------|
| +           | Penjumlahan   |
| -           | Pengurangan   |
| *           | Perkalian     |
| /           | Pembagian     |
| %           | Hasil bagi    |

Contohnya:

```go
var alas = 10
var tinggi = 3
var luas = 0.5 * alas * tinggi
fmt.Println("Luas segitiga adalah:", luas)

// result
// Luas segitiga adalah: 15
```

### Operator Perbandingan

Operator perbandingan ini akan membandingkan dua hal dan menghasilkan nilai boolean yang menyatakan perbandingan tersebut true (benar) atau false (salah).lebih kecil dari

Terdapat beberapa operator perbandingan, yaitu:

| Operator    | Keterangan                    |
|-------------|-------------------------------|
| ==          | sama dengan                   |
| !=          | tidak sama dengan             |
| <           | lebih kecil dari              |
| <=          | lebih kecil atau sama dengan  |
| >           | lebih besar dari              |
| >=          | lebih besar atau sama dengan  |

Contohnya:

```go
var alas = 10
var tinggi = 8
fmt.Println(alas >= tinggi)

// result
// true
```

### Operator Logika

Operator logika ini biasa digunakan ketika seleksi kondisi. Operator ini akan membandingkan dua hal dan menghasilkan boolean yang menyatakan true (benar) dan false (salah).

Terdapat 3 operator logika, yaitu:

| Operator    | Keterangan  |
|-------------|-------------|
| `&&`        | dan         |
| `||`        | atau        |
| `!`         | negasi      |

Misalnya:

```bash
jika murid adalah kelas A dan mendapat nilai lebih dari 8, maka lulus.
```

Maka menggunakan operator logika, kita dapat menuliskannya menjadi:

```go
var class = "A"
var nilai = 8.3
var result = class == "A" && nilai > 8

fmt.Println(result)

// result
// true
```

Terdapat aturan matematika yang perlu dipahami pada logika, yaitu:

- benar `dan` benar adalah `benar`
- benar `dan` salah adalah `salah`
- salah `dan` benar adalah `salah`
- salah `atau` salah adalah `salah`
- benar `atau` benar adalah `benar`
- benar `atau` salah adalah `benar`
- salah `atau` benar adalah `benar`
- salah `atau` salah adalah `salah`
- `negasi` benar adalah `salah`
- `negasi` salah adalah `benar`

## Penutup

Demikian operator pada golang. Kita akan melanjutkan materi lainnya pada [series golang](https://hobikoding.com/series/golang/).
