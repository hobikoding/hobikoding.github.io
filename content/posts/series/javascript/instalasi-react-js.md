---
title: "Instalasi React JS dan Mengenal Struktur Project React JS"
date: 2019-03-11T20:00:08+07:00
draft: false
description: "React JS merupakan salah satu framework untuk Front End Developer yang dikembangkan oleh facebook. Bagi yang terbiasa menggunakan javascript pasti tidak akan asing dengan bahasa yang digunakan react js ini, karena semuanya berbasis pada JavaScript sebagai dasarnya, Beberapa tools yang digunakan untuk mulai belajar react antara lain: Cara instalasi react.js sangat mudah, yaitu dengan menggunakan perintah npm instal create-react-app, cara membuat prooject baru pada react js dengan perintah create-react-app nama-project, mengenal struktur folder reactjs, "
keywords: "reactjs react.js react js javascript framework"
thumbnail: "https://res.cloudinary.com/hobikoding/image/upload/v1552640858/React/react-instal.png"
slug: instalasi-react-js
topic: ["reactjs","javascript","framework"]
github: 'posts/javascript/instalasi-react-js.md'
author: maslul
---

Kali ini kita akan membahas topik baru yang masih cukup hangat, ya `react js`.

Setelah saya mencari di beberapa situs ternyata masih sedikit blog yang membahas react js dari dasar secara runtut, jadi saya ingin membahasnya.

## Apa Itu React JS

React JS merupakan salah satu framework untuk Front End Developer yang dikembangkan oleh [Facebook](https://facebook.github.io/create-react-app/).

Bagi yang terbiasa menggunakan [JavaScript](https://www.hobikoding.com/topik/javascript) pasti tidak akan asing dengan bahasa yang digunakan react js ini, karena semuanya berbasis pada JavaScript sebagai dasarnya.

Beberapa tools yang digunakan untuk mulai belajar react antara lain:

- **Node.js**
- **IDE** (Visual Studio Code atau Atom)
- **CLI** (Windows: CMD atau powerShell. MacOS & GNU/Linux: Terminal)
- **Browser** (Chrome, Firefox)

Sebelum kita membuat project baru pada react, kita harus menginstal create-react-app terlebih dahulu.

## Instalasi create-react-app

`create-react-app` ini nantinya akan kita gunakan untuk membuat project baru dalam react js. Instalasinya sebagai berikut.

Buka _command line_ pada windows. Mac dan Linux menggunakan terminal. Ketikan kode berikut pada _command line_:

```bash
npm install -g create-react-app
```

Perintah di atas berfungsi untuk menginstal `create-react-app` secara global.

Jika sudah terinstal, kita dapat mengeceknya dengan melihat versinya:

```bash
$ create-react-app --version
2.1.3
```

Apabila terlihat versi seperti di atas berarti kita telah berhasil.

## Project Baru: create-react-app

Selanjutnya kita akan membuat project baru menggunakan perintah

```bash
create-react-app nama-project
```

`nama-project` dapat diganti sesuai nama project yang anda inginkan. Setelah selesai pembuatan projectnya, kita bisa masuk ke folder project dengan perintah:

```bash
cd nama-project
```

Selanjutnya, untuk menjalankan project kita, gunakan perintah berikut:

```bash
npm start
```

Tunggu proses persiapannya, apa bila sudah selesai, kita akan melihat alamat yang bisa kita akses pada browser, biasanya beralamat di [http://localhost:3000/](http://localhost:3000/).

![create-react-app-run](https://res.cloudinary.com/hobikoding/image/upload/v1552640858/React/reactjs-create-app.png)

Untuk menghentikannya kita dapat menekan tombol `ctrl+c`

## Mengenal Struktur Project React JS

Ketika kita membuat project baru dengan `create-react-app`, akan ada stuktur folder seperti ini.

```bash
nama-project
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

Jika kita lihat terdapat tiga folder yaitu node_modules, public, dan src

### 1. node_modules

Folder ini berisi library javascript yang sudah disediakan secara otomatis. Library tersebut yang nantinya akan digunakan dalam membuat project react.

Selain itu kita juga dapat menginstal library lain seperti `bootstrap`, `react-router-dom`, `semantic-ui` dan sebagainya dengan cara:

```bash
npm install --save nama_library
```

contoh:

```bash
npm install --save semantic-ui-react
npm install --save react-bootstrap bootstrap
```

### 2. public

Folder public berisi konfigurasi file html dan favicon. Apabila kita membuka file `index.html` terdapat kode

```html
<div id="root"></div>
```

Pada kode tersebut terdapat id `root` yang nantinya digunakan untuk menempatkan hasil render dari react js.

### 3. src

Pada folder src kita dapat menemukan banyak sekali konfigurasi file react js. Kita pahami terlebih dahulu aliran (flow) dari react js ini.

Pertama kita mempunyai App.js. File ini yang akan dirender oleh index.js untuk diletakan pada element dengan id root.

> **Catatan**: File `App.js` ini yang nantinya menjadi inti dari kode kita. Kita dapat mengubahnya menjadi project yang kita inginkan.

## Membuat Project React JS Sederhana

Untuk pertama kalinya, kita akan membuat project sederhana yaitu menampilkan teks `Hello World` pada browser menggunakan react js.

Pastikan IDE/teks editor sudah mengarah ke folder react kita. Saya sendiri menggunakan Visual Studio Code, saya hanya mengetikan perintah:

```bash
code .
```

untuk membuka Visual Studio Code di folder project saya.

Kemudian pada folder `src`, kita hapus beberapa file yang tidak diperlukan:

- **_App.css_**
- **_App.test.js_**
- **_index.css_**
- **_logo.svg_**

Hapus file tersebut karena kita tidak akan menggunaannya.

Pada file `App.js`, ketikan kode berikut:

```jsx
import React from 'react';

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
```

Kemudian pada file `index.js`, ketikan kode berikut:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
```

Jika sudah save dan jalankan project dengan perintah:

```bash
npm start
```

Buka browser dengan alamat yang tertera pada _command line_. Apabila tampil seperti di bawah ini, berati kita telah berhasil membuat project sederhana dengan react js.

![create-react-app-run](https://res.cloudinary.com/hobikoding/image/upload/v1552640858/React/hello-world-react-js.png)

## Akhir Kata

Kita telah berhasil membuat project sederhana yaitu menampilkan hello world menggunakan react js.

Untuk artikel selanjutnya kita akan membahas lebih dalam mengenai state, props, routing dan komponen lainnya.
