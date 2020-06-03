---
title: "Belajar Golang #6 Penerapan Switch Case di Golang"
date: 2020-06-02T22:30:28+07:00
draft: false
description: penerapan switch case di golang, kelebihan switch case di golang, pengkondisian di golang menggunakan switch case, switch case golang
keywords: switch case golang
thumbnail: https://ik.imagekit.io/hobikoding/thumbs/golang/switch-case/thumbs_g1y55ARRS.jpg
source: https://unsplash.com/@patrykgradyscom
topic: [golang]
slug: switch-case-golang
github: /posts/series/golang/switch-case-golang.md
author: maslul
---

Halo semua, terimakasih telah berkunjung di Hobi Koding. Saat ini teman-teman sedang berada di series [belajar golang](https://hobikoding.com/series/golang/).

Di series ini kita akan belajar fundamental golang hingga advance golang.

## Switch Case

Setelah kemarin kita membahas pengkondisian di golang menggunakan if-else, kita akan melanjutkan pembahasan tentang pengkondisian menggunakan switch-case.

Pengkondisian sendiri selalu ditemukan ketika membuat program. Contohnya menentukan user sudah login atau belum, membuat limitasi akses untuk user yang belum login, dan lain sebagainya.

Syntax switch-case cukup mudah, jika menggunakan if-else akan terlihat seperti ini:

```go
if <kondisi> {
  ...
} else {
  ...
}
```

Maka di switch-case kita menuliskannya seperti ini:

```go
switch kondisi {
case 1:
  ...
case 2:
  ...
default:
  ...
}
```

Untuk lebih jelasnya kita berikan contoh: `buat sebuah program untuk menampilkan nama hari sesuai nomor harinya`.

Ketika program dibuat menggunakan if-else maka akan menjadi seperti ini:

```go
package main

import "fmt"

func main() {
  var hari = 1
  if hari == 0 {
    fmt.Println("Minggu")
  } else if hari == 1 {
    fmt.Println("Senin")
  } else if hari == 2 {
    fmt.Println("Selasa")
  } else if hari == 3 {
    fmt.Println("Rabu")
  } else if hari == 4 {
    fmt.Println("Kamis")
  } else if hari == 5 {
    fmt.Println("Jumat")
  } else if hari == 6 {
    fmt.Println("Sabtu")
  } else {
    fmt.Println("Format hari tidak diketahui")
  }
}
```

Jika kita membuatnya dalam switch-case akan menjadi seperti ini:

```go
package main

import "fmt"

func main() {
  var hari = 1
  switch hari {
  case 0:
    fmt.Println("Minggu")
  case 1:
    fmt.Println("Senin")
  case 2:
    fmt.Println("Selasa")
  case 3:
    fmt.Println("Rabu")
  case 4:
    fmt.Println("Kamis")
  case 5:
    fmt.Println("Jumat")
  case 6:
    fmt.Println("Sabtu")
  default:
    fmt.Println("Format hari tidak diketahui")
  }
}
```

### Penjelasan

1. Kita mendeklarasikan variabel hari dengan value `1`.
1. Kemudian kita seleksi menggunakan case, apabila value hari adalah 0 (case 0) maka akan menampilkan log `Minggu`
1. Apabila case 0 tidak sesuai, maka akan dilanjutkan ke case berikutnya (case 1). Apabila value hari adalah 1 maka akan menampilkan log `Senin`
1. Apabila case 1 tidak sesuai, maka akan dilanjutkan ke case berikutnya (case 2). Apabila value hari adalah 2 maka akan menampilkan log `Selasa`
1. Begitu seterusnya hingga case 6, apabila berturut-turut tidak sesuai dengan case yang ada, maka akan menjalankan kode dalam scope `default`.

## Powerfull Switch Case

Terdapat perbedaan switch-case di golang dengan bahasa pemrograman lainnya. Switch-case di golang dapat digunakan sebagaimana if-else.

Perhatikan line yang ditandai berikut:

```go {hl_lines=[8,10,12,14]}
package main

import "fmt"

func main() {
  var nilai = 85
  switch {
  case nilai > 80:
    fmt.Println("Nilai A")
  case nilai > 60:
    fmt.Println("Nilai B")
  case nilai > 50:
    fmt.Println("Nilai C")
  case nilai > 40:
    fmt.Println("Nilai D")
  default:
    fmt.Println("Nilai E")
  }
}
```

Hal ini jarang ditemukan pada bahasa lainnya. Di golang kita bisa menggunakan switch case seperti halnya pengkondisian di if-else.

## Penutup

Demikian penerapan switch case di golang. Kita akan melanjutkan pembahasannya pada [series golang](https://hobikoding.com/series/golang/) berikutnya.
