---
title: "Tiga Cara Menggabungkan CSS Dengan HTML"
date: 2019-03-19T13:31:21+07:00
description: "bagaimana cara menggabungkan css dengan html, terdapat tiga cara untuk menggabungkan css dengan html yaitu inline style, inline style sheets dan external style sheets, ketiga cara tersebut memiliki kelebihannya masing-masing yaitu, beberapa cara mudah untuk memasang css ke dalam html project kita,"
keywords: "html css"
draft: false
thumbnail: "https://res.cloudinary.com/hobikoding/image/upload/v1552981967/HTML/html.jpg"
topic: [html, css]
slug: menghubungkan-css-dan-html
github: 'posts/html/menggabungkan-css-html.md'
author: maslul
---

Untuk membuat halaman html menjadi lebih elegan dan dinamis, harus dilengkapi dengan css.

CSS berfungsi untuk mengatur tampilan html menjadi lebih baik. Contohnya antara elemen form A dengan elemen form B memiliki tampilan yang berbeda walaupun sama-sama berasal dari elemen form.

Terdapat 3 cara untuk menggabungkan file html dengan css, yaitu:

- **Inline Style**
- **Inline Style Sheets**
- **External Style Sheets**

Kita bahas satu per satu...

## Inline Style

Cara ini merupakan cara yang paling mudah.

Kita bisa menyisipkan kode css pada elemen html secara langsung. Contoh:

```html
<h3 style="color:blue">Ini elemen heading dengan warna biru</h3>
<p style="text-align:center; color:red">Ini elemen paragraf dengan rata tengah warna merah</p>
```

## Inline Style Sheets

Cara selanjutnya adalah dengan _inline style sheets_.

Untuk menggunakan _inline style sheets_ dan _external style sheets_, diperlukan selector. Selector berfungsi untuk memisahkan style satu dengan lainnya.

Terdapat tiga jenis selector:

- **Berdasarkan Elemen**
- **Berdasarkan ID**
- **Berdasarkan Class**

### 1. Selector Elemen

Selector berdasarkan `elemen` akan mengubah style dari elemen yang diseleksi secara keseluruhan. Contoh:

```html
<!DOCTYPE html>
<html>
<head>
    <title>HTML & CSS</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        p {
            background: blue;
        }
    </style>
</head>
<body>
    <p>Ini adalah paragraf pertama</p>
    <p>Ini adalah paragraf kedua</p>
    <p>Ini adalah paragraf ketiga</p>
</body>
</html>
```

>**Catatan:** Penulisan css inline style sheets diletakan pada elemen `<style>` yang terletak pada elemen `<head>`

### 2. Selector ID

Berbeda dengan selector elemen, kita perlu menambahkan `id` pada elemen tertentu yang akan diubah tampilannya.

```html {hl_lines=["18"]}
<!DOCTYPE html>
<html>
<head>
    <title>HTML & CSS</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        p {
            background: blue;
        }
        #p-dua {
            font-size: 25px;
            background: yellow;
        }
    </style>
</head>
<body>
    <p>Ini adalah paragraf pertama</p>
    <p id="p-dua">Ini adalah paragraf kedua</p>
    <p>Ini adalah paragraf ketiga</p>
</body>
</html>
```

>**Catatan:** Perlu diingat bahwa `id` pada elemen tertentu **tidak boleh sama** dengan elemen lainnya. `id` pada elemen paragraf A tidak boleh sama dengan ID elemen paragraf B

### 3. Selector Class

Selector dengan `class` paling banyak digunakan. Hal ini karena dalam elemen html boleh menggunakan class yang sama.

Meskipun begitu kita masih tetap dapat mengubah elemen yang mempunyai class sama dengan menambahkan class unik-nya.

```html {hl_lines=["25-26"]}
<!DOCTYPE html>
<html>
<head>
    <title>HTML & CSS</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        p {
            background: blue;
        }
        #p-dua {
            font-size: 25px;
            background: yellow;
        }
        .paragraf{
            color: white;
        }
        .paragraf.tiga{
            background: red;
            font-size: 20pt;
        }
    </style>
</head>
<body>
    <p>Ini adalah paragraf pertama</p>
    <p id="p-dua" class="paragraf">Ini adalah paragraf kedua</p>
    <p class="paragraf tiga">Ini adalah paragraf ketiga</p>
</body>
</html>
```

## External Style Sheets

_External style sheets_ hampir mirip dengan _internal style sheets_. Hanya saja penulisan css terletak pada file yang berbeda.

Contoh dalam satu folder terdapat file `index.html` dan `main.css`.

```bash
external-css
└── src
    ├── index.html
    └── main.css
```

Seluruh kode css diletakan pada file `main.css`.

{{< code >}}

```ini
src/main.css
```

```css
p {
    background: blue;
}
#p-dua {
    font-size: 25px;
    background: yellow;
}
.paragraf{
    color: white;
}
.paragraf.tiga{
    background: red;
    font-size: 20pt;
}
```

{{< /code >}}

Kemudian di import oleh `index.html`

{{< code >}}

```ini
src/index.html
```

```html {hl_lines=["6"]}
<!DOCTYPE html>
<html>
<head>
    <title>HTML & CSS</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
    <p>Ini adalah paragraf pertama</p>
    <p id="p-dua" class="paragraf">Ini adalah paragraf kedua</p>
    <p class="paragraf tiga">Ini adalah paragraf ketiga</p>
</body>
</html>
```

{{< /code >}}

## Penutup

Itulah beberapa cara menggunakan css pada file html. Tentu masih banyak sekali _syntax_ css yang perlu dipahami untuk membuat website yang lebih dinamis.

Oleh karena itu apabila teman-teman ingin belajar lebih lanjut materi css dan html, silakan menuju halaman [Materi HTML dan CSS](/topic/html)
