---
title: "Class Component dan Functional Component Serta Import dan Export React JS"
date: 2019-03-15T21:20:29+07:00
description: "Mengenal Class Component dan Functional Component Serta Import dan Export  ReactJS. Sebagai contoh suatu web terdiri dari header, body, dan footer. Pada react js kita bisa membaginya dengan komponen header, komponen body, dan komponen footer, Pada artikel ini kita akan membahas beberapa topik: 1. Mengenal Components React JS 2. Perbedaan Class dan Functional Components 3. Import dan Export React JS 4. Membuat Components React Dalam 1 File 5. Membuat Components React Dalam File Terpisah, Ada dua komponen yang dapat dibuat pada react, yaitu: Class Components dan Functional Components"
keywords: "react reactjs react.js functional class component"
draft: false
thumbnail: "https://res.cloudinary.com/hobikoding/image/upload/v1552661417/React/component-react.png"
topic: [react]
slug: component-react
github: 'posts/javascript/class-functional-component.md'
---

React JS adalah library javascript yang menggunakan komponen untuk menyusunnya halamannya.

Sebagai contoh suatu web terdiri dari header, body, dan footer. Pada react js kita bisa membaginya dengan komponen header, komponen body, dan komponen footer.

Hal ini lebih efisien ketika terjadi kesalahan atau kita hanya ingin mengubah bagian tertentu (misal header), kita hanya fokus di komponen headernya saja.

Pada artikel ini kita akan membahas beberapa topik:

* [Mengenal Components React JS](#mengenal-component-react)
* [Perbedaan Class dan Functional Components](#perbedaan-class-dan-functional-component)
* [Import dan Export React JS](#import-export-react)
* [Membuat Components React Dalam 1 File](#membuat-component-satu-file)
* [Membuat Components React Dalam File Terpisah](#membuat-component-file-terpisah)

## Mengenal Components React JS {#mengenal-component-react}

Ada dua komponen yang dapat dibuat pada react, yaitu:

* **Class Components** , dan
* **Functional Components**

Contoh pembuatan class components:

```jsx
class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}
```

Contoh pembuatan functional components:

```jsx
function App(){
  return(
    <div>
      <h1>Hello World</h1>
    </div>
  )
}
```

Atau kita juga bisa menuliskan fungsi di atas menggunakan Javascript ES6 seperti ini:

```jsx
const Header = () => (
  <div>
    <h1>Hello World</h1>
  </div>
)
```

## Perbedaan Class dan Functional Components{#perbedaan-class-dan-functional-component}

Jika kita lihat pada kode di atas, functional components lebih ringkas struktur kodenya. Hal ini sangat efektif karena kita tidak perlu mengetik terlalu panjang.

Namun ada perbedaan yang sangat besar antara class component dan function component, yaitu:

* Functional component hanya bisa menggunakan `props` itu sebabnya function component disebut *__stateless component__* atau biasa digunakan juga sebagai *__UI Component__* (komponen yang menangani tampilan).
* Sedangkan Class component dapat menggunakan `state` dan `props`.

### Apa itu state dan props

Keduanya akan kita pelajari di artikel berikutnya.

## Import dan Export React JS{#import-export-react}

Seperti yang telah kita bahas di atas, react js disusun dari gabungan beberapa komponen.

Untuk menggunakan komponen satu dengan lainnya, kita perlu meng-export dan import terlebih dahulu.

Contoh, kita akan membuat tiga buah komponen yaitu: `header`, `body`, dan `footer`.

* Komponen `header` memuat teks dengan tulisan ini bagian header
* Komponen `body` memuat teks dengan tulisan ini bagian body
* dan Komponen `footer` memuat teks dengan tulisan ini bagian footer

## Membuat Components React Dalam 1 File{#membuat-component-satu-file}

Pertama buat terlebih dahulu projectnya. Jika belum tau bagaimana cara membuatnya, silakan lihat terlebih dahulu artikel [membuat Project Baru React JS](/instalasi-react-js/).

Jika sudah buka file `App.js`. Kita akan membuat komponen Header terlebih dahulu:

```jsx
export const Header = () => {
  return(
    <div>
      <h1>Ini Bagian Header</h1>
    </div>
  )
}
```

Pada kode di atas terdapat perintah `export` kemudian diikuti penulisan komponen. Hal ini berarti kita membuat komponen dan meng-_export_-nya untuk digunakan oleh komponen lain.

Selanjutnya kita buat komponen `Body`, masih di file `App.js`, tambahkan kode berikut:

```jsx
export const Body = () => {
  return(
    <div>
      <h1>Ini Bagian Body</h1>
    </div>
  )
}
```

Kita juga dapat membuat komponen dari `class`, masih di `App.js` tambahkan komponen `Footer` berikut:

```jsx
export class Footer extends Component {
  render(){
    return(
      <div>
        <h1>Ini Bagian Footer</h1>
      </div>
    )
  }
}
```

Setelah itu kita buat komponen utamanya yaitu `App`. Komponen ini yang akan di render secara default. Pada komponen ini kita sisipkan komponen lain seperti Header, Body dan Footer.

```jsx {hl_lines=["1","5-8"]}
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
```

Export default berfungsi untuk menginformasikan bahwa main programnya ada di komponen tersebut.

## Membuat Component React Dalam File Terpisah{#membuat-component-file-terpisah}

Ketika web yang kita buat sudah mulai kompleks, _export_ dan _import_ menggunakan cara di atas akan sangat menyulitkan kita.

Hal ini karena kode yang terlalu banyak pada file `App.js` sehingga kita akan sulit untuk debuging apabila ada kesalahan.

Untuk memudahkannya, kita akan pisahkan masing-masing komponen kedalam file yang berbeda. Sehingga nantinya apabila terdapat bug, kita hanya fokus pada file komponen yang bermasalah.

Kita buat terlebih dahulu file dari masing-masing komponen. Buat file `Header.js` kemudian masukkan kode berikut:

{{< code/title >}}

```title
src/Header.js
```

```jsx {hl_lines=[1]}
import React from 'react';

const Header = () => {
    return(
      <div>
        <h1>Ini Bagian Header</h1>
      </div>
    )
}

export default Header;
```

{{< /code/title >}}

Kemudian buat file `Body.js` dan masukan kode berikut:

{{< code/title >}}

```title
src/Body.js
```

```jsx {hl_lines=[1]}
import React from 'react';

const Body = () => {
    return(
      <div>
        <h1>Ini Bagian Body</h1>
      </div>
    )
}

export default Body;
```

{{< /code/title >}}

Buat file `Footer.js` dan masukan kode berikut:

{{< code/title >}}

```title
src/Footer.js
```

```jsx {hl_lines=["1"]}
import React from 'react'

class Footer extends React.Component {
    render(){
      return(
        <div>
          <h1>Ini Bagian Footer</h1>
        </div>
      )
    }
}

export default Footer;
```

{{< /code/title >}}

>**Catatan:** Jika kita lihat, file `Header.js`, `Body.js` dan `Footer.js` mengandung perintah `import React from 'react'` Ini adalah perintah dasar yang harus selalu ditulis ketika membuat React JS
>
>Kemudian terdapat `export default {komponen};` ini berfungsi untuk meng-export komponen

Selanjutnya pada file `App.js` tuliskan kode berikut:

{{< code/title >}}

```title
src/App.js
```

```jsx {hl_lines=["2-4", "10-12"]}
import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
```

{{< /code/title >}}

>**Catatan:** Kode `import {komponen} from './lokasi komponen';` digunakan untuk meng-_import_ komponen yang sebelumnya sudah kita _export_

Jika sudah, save dan jalankan project react kita dengan cara:

```bash
npm start
```

## Penutup

Demikian cara membuat _class component_ dan _functional component_ pada react js. Pada artikel selanjutnya akan kita bahas lebih rinci tentang state dan props.
