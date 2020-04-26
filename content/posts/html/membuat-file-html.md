---
title: "Membuat File HTML Dan Menjalankannya"
date: 2019-03-16T06:45:53+07:00
description: "Cara membuat file html untuk dijalankan di browser, Bagaimana cara menjalankan file html di browser, Mau jadi programmer front end? Oke pertama harus kuasai html dulu. Apa itu html? Singkatnya html seperti namanya, hypertext markup language. Atau bahasa yang di markup."
keywords: "belajar html"
draft: false
thumbnail: "https://res.cloudinary.com/hobikoding/image/upload/v1553005048/HTML/cara-membuat-html.jpg"
topic: [html]
slug: membuat-file-html
github: 'posts/html/membuat-file-html.md'
---

Mau jadi programmer front end?

Oke pertama harus kuasai html dulu. Apa itu html?

Singkatnya html seperti namanya, hypertext markup language. Atau bahasa yang di markup.

## Fungsi HTML

Sebenarnya apa sih fungsi html untuk front end developer? Sepenting itu hingga kita harus belajar terlebih dahulu?

Fungsi html sendiri sebenarnya untuk menampilkan teks dengan gaya tertentu.

Contohnya gaya teks judul tentu akan berbeda dengan gaya teks sub judul. Atau gaya sub judul tentu akan berbeda dengan gaya teks paragraf.

Nah, html ini yang mengatur hal tersebut.

## Cara Membuat HTML

Ada banyak cara untuk membuat file html yaitu:

* [Menggunakan text editor notepad/gedit](#write-html-gedit)
* [Menggunakan Notepad++](#write-html-notepad++)
* [Menggunakan teks editor kusus developer](#write-html-vscode) (**_rekomendasi_**)

## Menggunakan Teks Editor Gedit{#write-html-gedit}

Sebenarnya bisa juga menggunakan notepad biasa bawaan windows. Namun karena [saya menggunakan Linux Fedora](https://www.hobikoding.com/kelebihan-linux-fedora-dari-ubuntu-windows/), maka saya gunakan gedit (teks editor bawaan linux fedora).

Pertama buka terlebih dahulu teks editornya. Kemudian ketikan kode berikut ini.

```html
<html>
    <head>
        <title>Membuat HTML Gedit</title>
    </head>
    <body>
        <h1>Judul</h1>
        <p>Membuat paragraf pada file html</p>
    </body>
</html>
```

Kemudian save file tersebut dengan nama `gedit.html`. Nama bisa diubah sesuka kita, namun harus menggunakan ekstensi file `*.html`.

## Menggunakan Teks Editor Notepad++{#write-html-notepad++}

Cara yang kedua yaitu menggunakan notepad++

Hampir sama dengan Notepad biasa, hanya saja Notepad++ mempunyai fitur yang lebih baik dibandingkan Notepad biasa.

Oke, buka Notepad++ nya. Kemudian ketikan sebagai berikut:

```html
<html>
    <head>
        <title>Membuat HTML Notepad++</title>
    </head>
    <body>
        <h1>Judul</h1>
        <p>Membuat paragraf pada file html</p>
    </body>
</html>
```

Kemudian save file dengan nama `notepad-plus.html` atau nama lain dengan ekstensi `*.html`.

## Menggunakan Teks Editor Kusus Developer{#write-html-vscode}

Ada banyak teks editor kusus developer. Yang paling banyak digunakan ada tiga, yaitu Visual Studio Code (VSCode), Sublime Text, dan Atom.

Saya sendiri menggunakan Visual Studio Code.

Buka terlebih dahulu VS Codenya, kemudian buat file baru dengan cara klik menu *File - New File*. Sebelum mengetik, save terlebih dahulu dengan nama `vscode.html` atau nama lainnya dengan ekstenti `*.html`.

>Salah satu kemudahan ketika menggunakan VS Code ini, bila file sudah tersimpan dengan format `html`, kita ketikan kata html saja, sudah muncul _emmet_ yang akan otomatis menggenerate menjadi struktur file html langsung.

Kita ketikan kode berikut pada VS Code.

```html
<html>
    <head>
        <title>Membuat HTML VSCode</title>
    </head>
    <body>
        <h1>Judul</h1>
        <p>Membuat paragraf pada file html</p>
    </body>
</html>
```

Setelah itu save kembali filenya.

## Menambahkan CSS dan Javascript (import dari file){#html-css-js}

Apabila kita memiliki file css ataupun javascript yang mau disisipkan pada file html kita, cara menyisipkannya yaitu sebagai berikut:

```html
<!-- menyisipkan css -->
<link rel="stylesheet" href="alamat-file.css">

<!-- menyisipkan javascript -->
<script src="alamat-file.js"></script>
```

Kita bisa mengubah alamat file css dan alamat file javascript baik dalam satu root folder maupun mengambilnya dari cdn (_online_).

## Menjalankan File HTML{#menjalankan-html}

Ada beberapa cara untuk menjalankan file html, yaitu:

1. [Langsung dibuka dari filenya](#menjalankan-html-file)
1. [Menggunakan aplikasi web server](#menggunakan-web-server)

## 1. Langsung Membuka File{#menjalankan-html-file}

Cara yang pertama adalah cara yang paling mudah. Kita hanya perlu membuka file html tadi menggunakan web browser (Chrome, Safari atau Firefox).

## 2. Menggunakan Web Server{#menggunakan-web-server}

Untuk menjalankan html dari web server terlebih dahulu menginstal web servernya. Ada banyak pilihan web server, namun yang saya rekomendasikan adalah [xampp](https://www.apachefriends.org/index.html).

1. Buka software xampp
1. Klik start pada **Apache** dan **MySQL**
1. Kemudian pindahkan file html teman-teman ke folder xampp/htdocs (saya sendiri berada di `C:\xampp\htdocs`)
1. Jika sudah, buka web browser dan pergi ke alamat [http://localhost/namafile.html](http://localhost/namafile.html)

namafile.html sendiri merupakan nama file html yang teman-teman pindahkan tadi, karena saya menamainya belajar.html, maka alamat tadi akan menjadi [http://localhost/belajar.html](http://localhost/belajar.html).

## Akhir Kata

Itulah cara membuat file html dan beberapa cara menjalankan html. Bagi yang tidak mau repot menginstal berbagai software bisa menggunakan cara pertama.

Namun untuk pengembangan kedepannya disarankan untuk menggunakan cara kedua ataupun cara ketiga. Jadi terserah anda saja.
