---
title: "Alasan Saya Menggunakan Hugo: Migrasi Blogger Ke Hugo"
date: 2019-03-13T14:55:01+07:00
description: Banyak sekali SSG yang tersedia. Ada Hugo, Gatsby, Next.js, Jekly dan Nuxt. Bagaimana cara migrasi dari blogger ke hugo, alasan menggunakan hugo daripada wordpress, membuat blog dengan static site generator, blogging offline, kelebihan hugo, kelemahan blogger dan wordpress, Saya belum pernah belajar bahasa pemrograman Go tapi sangat mudah membuat Hugo tanpa terlebih dahulu belajar Go, digaan saya hugo tidak mau menampilkan postingan karena tema yang eror
keywords: hugo wordpress blogger
draft: false
thumbnail: https://res.cloudinary.com/hobikoding/image/upload/v1552640822/Hugo/hugo.png
topic: [hugo]
slug: alasan-saya-menggunakan-hugo
github: posts/alasan-saya-menggunakan-hugo.md
---

Saya memiliki blog baru. Tapi tidak menggunakan Blogger ataupun Wordpress. Saya ingin mencoba sesuatu yang baru, yaitu menggunakan _Static Site Generator_ (SSG).

Banyak sekali [SSG](https://medium.com/codingthesmartway-com-blog/top-static-site-generators-for-2019-26a4c8afcc05) yang tersedia. Ada Hugo, Gatsby, Next.js, Jekly dan Nuxt.

Sebenarnya saya tertarik dengan Next.js maupun Gatsby karna paham sedikit React.js.

Tetapi setelah membaca panduan dari Next.js yang benar-benar harus membangun dari nol, saya jadi berfikir kembali. Mungkin bisa saja membuat website SSG dari nol, tapi terlalu memakan waktu.

Disamping itu saya masih belum paham _query_ untuk menampilkan postingan yang dibuat. Jadi saya putuskan untuk mencoba hugo.

## Mencoba Hugo Untuk Pertama Kali

Saya belum pernah belajar bahasa pemrograman Go. Tapi setelah melihat [Petanikode](https://www.petanikode.com/membuat-blog-dengan-hugo/) saya mulai mencoba belajar hugo.

Tapi setelah saya ikuti tutorialnya, ada beberapa hal yang belum jelas. Tentu saya bisa bertanya, tapi terlalu lama. Jadi saya putuskan membaca artikel lainnya.

Kemudian saya menemukan artikel tentang hugo berbahasa Indonesia dari [Codepolitan](https://www.codepolitan.com/mudah-membuat-blog-dari-terminal-dengan-hugo-5a7eb3c03c225).

Saya ikuti step demi stepnya. Namun tetap saja ketika project di running tidak mau tampil. Walaupun sudah mengganti banyak [tema](https://themes.gohugo.io/). Akhirnya saya menyerah...

Tapi tetap saja, saya penasaran.

Jadi saya baca kembali materi dari Codepolitan dan menggunakan tema yang digunakan pada artikel Codepolitan. Yaitu [Hallo Programmer](https://themes.gohugo.io/hugo-hello-programmer-theme/).

Setelah saya coba, Wallaaa berhasil!

Dugaan saya, ada eror untuk tema yang sebelumnya saya pakai sehingga postingan tidak bisa muncul.

## Mendesain Layout

Jadi yang saya pelajari hingga kini, hugo menggenerate project kita sebagai file statis. Sedangkan untuk menampilkannya menggunakan layout yang sebelumnya harus kita buat terlebih dahulu.

Mendesain layout di hugo cukup mudah, karena saya pernah belajar bootstrap, dasar css dan javascript saya hanya perlu waktu dua hari.

Tema yang saya buat merujuk pada tema milik [Petanikode](https://www.petanikode.com/), [Medium](https://medium.com/) dan [Javascript.info](http://javascript.info).

### Kenapa merujuk ke dua situs itu

Menurut saya tema mereka bagus. Bersih dan nyaman untuk dibaca. Oleh karena itu saya mencoba menerapkan kedua tema tersebut di Blog ini.

> Pada artikel selanjutnya akan saya jelaskan langkah-langkahnya membuat [Hobikoding](https://www.hobikoding.com) ini.

## Rasanya Ngeblog Dengan Text Editor

Saya sendiri baru pernah menggunakan SSG. Sehingga baru pernah merasakan bloging dengan teks editor.

Teks editor yang saya gunakan yaitu [Visual Studio Code](https://code.visualstudio.com/).

Alasannya karna saya sudah cukup lama menggunakan VSCode ini, dan ternyata saya tidak salah pilihan.

Di VSCode, terdapat integrasi `Git`. Ini membantu saya untuk `push` repositori dari mode visual.

Memang bisa menggunakan terminal atau _command line_. Tapi cukup repot menurut saya. Walaupun sudah diketik ulang dalam file `bash`, namun tetap saja kadang ada kendala eror.

Tapi semenjak saya menggunakan VSCode untuk `push` repositori, saya belum pernah mengalami eror.

Ngeblog dengan teks editor menurut saya unik dan menyenangkan.

Unik karena siapa sangka kita membuat kontennya dari teks editor, tanpa harus online saat itu juga.

Menyenangkan karena ternyata file dalam format Markdown sangat bagus.

Saya tidak pelu menuliskan _syntax_ `html` yang rumit. Mengatur ukuran gambar, Membuat _headings_, _blocknote_, dan lain-lain dengan syntax yang rumit.

Benar memang di blogger kita bisa menggunakan mode visualnya, tapi tetap saja ketika kita harus mengubah format tertentu dengan warna pilihan, akan sangat merepotkan melihat _syntax_ di blogger yang sangat ambur adul.

## Mengapa Tidak Menggunakan Wordpress

Saya sudah dari 2014 menggunakan blogger untuk tempat ngeblog. Alasannya simpel, karna gratis.

Tiap bulan/tahun saya tidak perlu bayar hosting. Selain itu karena tidak adanya database di hugo membuat hugo lebih aman daripada wordpress.

Hal ini juga yang membuat saya tidak menggunakan wordpress. Karena harga hosting yang mahal.

Selain itu saya belum pernah belajar php.

Jadi itulah alasan saya menggunakan hugo. Di hugo saya bisa meng-_host_-kannya pada [github](https://github.com/) dan [gitlab](https://about.gitlab.com/). Tentu ada perbedaan ketika host pada github dan gitlab. Namun keduanya sama-sama gratis.

Saya suka gratis :smiley:

Selain itu juga saya kurang suka dengan blogger. Karena menurut saya blogger adalah produk google yang tidak pernah dilirik.

Padahal penggunanya sangat banyak. Andai saja google mulai perhatian...

## Penutup

Untuk saat ini saya akan fokus membangun blog dengan Hugo. Disamping saya juga akan belajar Gatsby.

Karena menurut saya Framework javascript sekarang sangat bagus. Saya sendiri sangat suka dengan React dan Node.js. Walau masih belum pernah belajar Node.js hingga artikel ini terbit.

Oya, blog ini akan saya arahkan ke pembelajaran bahasa pemrograman.

Bahasa apa?

Semuanya yang mau saya bagikan.

Penasaran? :stuck_out_tongue_winking_eye:
