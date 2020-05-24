---
title: "Membuat Index.js Untuk Import Multi Component ReactJS"
date: 2019-04-24T10:46:21+07:00
description: "membuat file index.js untuk export multi component dalam satu folder"
keywords: "index.js multicomponent reactjs"
draft: false
thumbnail: "https://res.cloudinary.com/hobikoding/image/upload/v1556080880/React/Import-Export-React.jpg"
topic: [reactjs]
slug: index-js-multi-component
github: 'posts/javascript/index-js-multi-component.md'
author: maslul
---

Membuat komponen pada react js bisa melalui dua cara, yaitu _class component_ dan _functional component_. Pada [artikel sebelumnya](/component-react/) sudah kita bahas detail kedua hal tersebut.

Kita juga telah membahas cara _export_ dan _import_ dari kedua komponen tersebut pada artikel yang sama.

Untuk membuat kode kita lebih rapi, kita dapat membuat file `index.js` yang kemudian akan mereturn setiap komponen. Sehingga ketika _import_ komponen tersebut tidak memerlukan banyak koding.

Contoh:

Kita akan mengubah kode seperti ini

```jsx
import MenuUtama from './Page/MenuUtama';
import Kontak from './Page/Utama';
import About from './Page/About';
import Blog from './Page/Blog';
```

menjadi seperti ini:

```jsx
import { MenuUtama, Kontak, About, Blog } from './Page';
```

Bagaimana caranya? Makanya disimak.

## Membuat Komponen

Saya asumsikan kita mulai project dari awal, pertama buat project baru dengan:

```bash
npx create-react-app membuat_komponen_index
cd membuat_komponen_index
npm start
```

Kemudian buka kode editornya, seperti biasa kode editor yang saya suka adalah Visual Studio Code.

```bash
code .
```

Buat beberapa file sehingga struktur project menjadi berikut:

```bash
membuat_komponen_index
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── Page
    │   ├── About.js
    │   ├── Blog.js
    │   ├── index.js
    │   ├── Kontak.js
    │   └── MenuUtama.js
    ├── App.js
    ├── index.css
    ├── index.js
    └── serviceWorker.js
```

>Hapus file `logo.svg`, `App.test.js`, `App.css` karena file tersebut tidak akan kita gunakan

Kemudian kita masukkan kode berikut ke komponennnya.

{{< code >}}

```ini
src/Page/About.js
```

```jsx
import React, {Component} from 'React';

class About extends Component {
  render(){
    return(
      <div>
        <p>Ini halaman about</p>
      </div>
    );
  }
}

export default About;
```

{{< /code >}}

{{< code >}}

```ini
src/Page/Blog.js
```

```jsx
import React, {Component} from 'React';

class Blog extends Component {
  render(){
    return(
      <div>
        <p>Ini halaman blog</p>
      </div>
    );
  }
}

export default Blog;
```

{{< /code >}}

{{< code >}}

```ini
src/Page/Kontak.js
```

```jsx
import React, {Component} from 'React';

class Kontak extends Component {
  render(){
    return(
      <div>
        <p>Ini halaman blog</p>
      </div>
    );
  }
}

export default Kontak;
```

{{< /code >}}

{{< code >}}

```ini
src/Page/MenuUtama.js
```

```jsx
import React, {Component} from 'React';

class MenuUtama extends Component {
  render(){
    return(
      <div>
        <p>Ini halaman blog</p>
      </div>
    );
  }
}

export default MenuUtama;
```

{{< /code >}}

>Kode di atas sengaja saya buat menjadi class component, anda bisa berlatih dengan mengubahnya menjadi functional component.

## Export Komponen Pada Index.js

Selanjutnya kita _export_ seluruh komponen tersebut dengan `index.js`

{{< code >}}

```ini
src/Page/index.js
```

```jsx
export {default as About} from './About'
export {default as Blog} from './Blog'
export {default as Kontak} from './Kontak'
export {default as MenuUtama} from './MenuUtama'
```

{{< /code >}}

Perintah di atas akan meng-_export_ semua komponen, sehingga kita bisa mengakses seluruh komponen tersebut hanya dengan `index.js`.

## Import Index.js Pada App.js

Setelah membuat komponen yang diperlukan dan di _export_ melalui `index.js`, kita bisa mengaksesnya dari `App.js` menuju `index.js` untuk seluruh komponen tersebut.

{{< code >}}

```ini
src/App.js
```

```jsx
import React, {Component} from 'React';
import { MenuUtama, Kontak, About, Blog } from './Page';

class App extends Component {
  render(){
    return(
      <div>
        <MenuUtama />
        <Kontak />
        <About />
        <Blog />
      </div>
    );
  }
}

export default App;
```

{{< /code >}}

## Penutup

Jika kita amati hal ini terlihat membuang-buang waktu karena kita harus menulis kode pada `index.js`. Tapi pada skala aplikasi yang besar, pembuatan export dan import melalui `index.js` akan membuat kode lebih rapi dan mudah dibaca.

## Jadi bagaimana menurut kamu

Bagikan pendapatnya ya!
