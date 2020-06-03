---
title: "Belajar Golang #5 Pengkondisian If Else di Golang"
date: 2020-05-30T12:24:45+07:00
draft: false
description: pengkondisian di golang, if else golang, percabangan di golang, seleksi kondisi menggunakan if-else di golang
keywords: golang if-else pengkondisian kondisi
thumbnail: https://ik.imagekit.io/hobikoding/thumbs/golang/if-else/thumbnail_TOEq9BJuj.jpg
source: https://unsplash.com/@artmatters
topic: [golang]
slug: if-else-golang
github: /posts/series/golang/if-else-golang.md
author: maslul
---

Halo semua, terimakasih telah berkunjung di Hobi Koding. Saat ini teman-teman sedang berada di series [belajar golang](https://hobikoding.com/series/golang/).

Di series ini kita akan belajar fundamental golang hingga advance golang.

## Percabangan

Ketika membuat program pasti akan mendapati percabangan. Misalnya mengecek user sudah login atau belum, user termasuk admin atau tidak dan lain sebagainya.

Di golang, seleksi kondisi bisa dengan dua cara yaitu `if-else` dan `switch`.

Pada pengkondisian, apabila kondisi bernilai benar maka akan masuk kode scope sesuai kondisinya.

Contoh: `apabila nilai mahasiswa lebih dari 80 maka dia mendapat nilai A`.

## If - Else

Seleksi konisi dengan `if-else` termasuk yang paling sering digunakan kebanyakan programmer.

Penulisan syntaxnya seperti ini,

```go {hl_lines=["9-11"]}
package main

import "fmt"

func main() {
  var grade string
  var nilai = 95

  if nilai > 80 {
    grade = "A"
  }

  fmt.Printf("Grade mahasiswa adalah: %s dengan nilai: %d\n", grade, nilai)
}

// result
// Grade mahasiswa adalah: A dengan nilai: 95
```

Untuk menambahkan kondisi lainnya, kita bisa memasukannya ke scope `else`

```go {hl_lines=["6-8"]}
...
  var nilai = 50

  if nilai > 80 {
    grade = "A"
  } else {
    grade = "B"
  }
...

// result
// Grade mahasiswa adalah: B dengan nilai: 50
```

Untuk menambahkan kondisi lainnya,

```go {hl_lines=["6-14"]}
...
  var nilai = 45

  if nilai > 80 {
    grade = "A"
  } else if nilai > 60 {
    grade = "B"
  } else if nilai > 40 {
    grade = "C"
  } else if nilai > 30 {
    grade = "D"
  } else {
    grade = "E"
  }
...

// result
// Grade mahasiswa adalah: C dengan nilai: 45
```

Penjelasan:

1. Kondisi nilai (45) akan diseleksi, ketika nilai lebih dari 80 maka grade diubah nilainya menjadi A
1. Apabila tidak terpenuhi kondisi pertama, namun nilai lebih dari 60 maka grade diubah nilainya menjadi B
1. Apabila tidak terpenuhi kondisi kedua, namun nilai lebih dari 40 maka diubah nilainya menjadi C
1. Apabila tidak terpenuhi kondisi ketiga, namun nilai lebih dari 30 maka diubah nilainya menjadi D
1. Apabila semua kondisi tidak terpenuhi maka diubah nilainya menjadi E

## If-Else Nested

If-else nested adalah kondisi ketika if berada di dalam if lain.

Contoh: apabila nilai lebih dari 80, kemudian apabila pernah menjadi juara maka gradenya cumlaude, namun apabila tidak pernah menjadi juara maka gradenya A. Apabila nilai tidak lebih dari 80 maka gradenya B.

Ketika dituliskan dalam kode menjadi,

```go {hl_lines=["11-15"]}
package main

import "fmt"

func main() {
  var grade string
  var juara bool = true
  var nilai = 81

  if nilai > 80 {
    if juara {
      grade = "CUMLAUDE"
    } else {
      grade = "A"
    }
  } else {
    grade = "B"
  }

  fmt.Printf("Grade mahasiswa adalah: %s dengan nilai: %d\n", grade, nilai)
}

// result
// Grade mahasiswa adalah: CUMLAUDE dengan nilai: 81
```

Pada kode yang ditandai di atas adalah if-else nested. Yaitu if-else yang berada dalam scope if-else lain.

## Kondisi Boolean

Pada kode di atas sebenarnya kita sudah menerapkan if-else dengan kondisi boolean, untuk lebih jelasnya sebagai berikut,

```go {hl_lines=[8]}
package main

import "fmt"

func main() {
  var juara bool = true

  if juara {
    fmt.Println("Selamat kamu juara!")
  } else {
    fmt.Println("Sayang sekali kamu belum juara!")
  }
}

// result
// Selamat kamu juara!
```

Pada line 8, kita langsung menggunakan kondisi juara (dengan nilai `true`) untuk menyeleksi.

Kita juga bisa menuliskannya seperti ini,

```go {hl_lines=[2]}
...
  if !juara {
    fmt.Println("Sayang sekali kamu belum juara!")
  } else {
    fmt.Println("Selamat kamu juara!")
  }
...

// result
// Selamat kamu juara!
```

## Multi Kondisi

Multi-kondisi digunakan ketika kondisi yang akan kita seleksi memiliki lebih dari satu. Misalnya jika mahasiswa juara dan menjabat sebagai ketua, maka mendapat beasiswa kuliah.

```go {hl_lines=[9]}
package main

import "fmt"

func main() {
  var juara bool = true
  var ketua bool = true

  if ketua && juara {
    fmt.Println("Selamat kamu mendapatkan beasiswa kuliah")
  }
}

// result
// Selamat kamu mendapatkan beasiswa kuliah
```

Seperti pada artikel [sebelumnya](http://localhost:1313/operator-golang/) bahwa expresi `AND` menggunakan simbol `&&`.

## Penutup

Demikian pengkondisian if-else pada golang. Kita akan melanjutkan materi lainnya mengenai `swith-case` pada [series golang](https://hobikoding.com/series/golang/).
