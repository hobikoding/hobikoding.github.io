---
title: Dependency Injection Pada Typescript Dengan Inversify
date: 2020-05-16T11:06:56+07:00
draft: false
description: membuat dependency injection pada typescript dengan inversify nodejs
keywords: typescript nodejs inversify dependency injection
thumbnail: /img/dependency-injection-typescript.jpg
source: https://unsplash.com/@jstrippa
topic: [nodejs, typescript, pattern, oop]
slug: dependency-injection-typescript
github: posts/dependency-injection-typescript.md
---

Salah satu desain pattern yang banyak digunakan selain MVC adalah DDD (Domain Driven Design). DDD dipilih sebagai solusi untuk meminimalisir kompleksitas pada controller dalam MVC.

Selain itu, kode juga lebih mudah di test ketika menggunakan pattern DDD. Karena ketika menjalankan unit testing kita dapat mock dependency yang digunakan dalam class tersebut.

## Manual Dependency Injection

Namun terdapat permasalahan ketika melakukan inject dependency, misalnya saja:

`SomeClass` membutuhkan `DependencySatu, DependencyDua, DependencyTiga`. Maka ketika pembuatan object SomeClass seperti ini:

```typescript
class SomeClass {
  private dependencySatu: DependencySatu
  private dependencyDua: DependencyDua
  private dependencyTiga: DependencyTiga

  constructor(
    dependencySatu: DependencySatu,
    dependencyDua: DependencyDua,
    dependencyTiga: DependencyTiga
  ) {
    this.dependencySatu = dependencySatu
    this.dependencyDua = dependencyDua
    this.dependencyTiga = dependencyTiga
  }

  public someMethod() {
    ....
  }
  ....
}

const someClass = new SomeClass(
  new DependencySatu(),
  new DependencyDua(),
  new DependencyTiga()
)
```

Oke itu masih cukup mudah, namun bagaimana kalau ternyata `DependencySatu` membutuhkan `DependencyRequiredBySatuA, DependencyRequiredBySatuB` dan `DependencyDua` membutuhkan `DependencyRequiredByDuaA, DependencyRequiredByDuaB dan DependencyRequiredByDuaC`.

Sementara `DependencyRequiredBySatuA` membutuhkan `DependencyRequiredDependencyRequiredBySatuASatu, DependencyRequiredDependencyRequiredBySatuADua dan DependencyRequiredDependencyRequiredBySatuATiga`.

maka akan jadi seperti ini:

```typescript
const someClass = new SomeClass(
  new DependencySatu(
    new DependencyRequiredBySatuA(
      new DependencyRequiredDependencyRequiredBySatuASatu(),
      new DependencyRequiredDependencyRequiredBySatuADua(),
      new DependencyRequiredDependencyRequiredBySatuATiga()
    ),
    new DependencyRequiredBySatuB()
  ),
  new DependencyDua(
    new DependencyRequiredByDuaA(),
    new DependencyRequiredByDuaB(),
    new DependencyRequiredByDuaC()
  ),
  new DependencyTiga()
)
```

Oke cukup! ini pusing.

## Containerization Dependency

Terdapat pemikiran menarik, bagaimana jika kita kelompokan saja seluruh dependency yang dibutuhkan dalam sebuah '`container`', sehingga ketika ada class yang membutuhkan dia hanya akan menghubungi container saja.

Sayangnya sudah ada library yang powerfull untuk menangani masalah ini, ya [`inversify`](http://inversify.io/).

Inversify akan mengkontenerisasi seluruh dependency, dan ketika ada class yang membutuhkan, dia hanya akan menghubungi containernya saja.

Apabila kode di atas kita integrasikan dengan inversify maka akan jadi seperti ini:

```typescript
@injectable()
class SomeClass {
  @inject(DependencySatu) private dependencySatu: DependencySatu
  @inject(DependencyDua) private dependencyDua: DependencyDua
  @inject(DependencyTiga) private dependencyTiga: DependencyTiga

  constructor(
    dependencySatu: DependencySatu,
    dependencyDua: DependencyDua,
    dependencyTiga: DependencyTiga
  ) {
    this.dependencySatu = dependencySatu
    this.dependencyDua = dependencyDua
    this.dependencyTiga = dependencyTiga
  }

  public someMethod() {
    ....
  }
  ....
}
```

Kemudian kita bind semua dependency ke dalam container.

```typescript
const container = new Container()

container.bind<DependencySatu>(DependencySatu).toSelf()
container.bind<DependencyDua>(DependencyDua).toSelf()
container.bind<DependencyTiga>(DependencyTiga).toSelf()
container.bind<DependencyRequiredBySatuA>(DependencyRequiredBySatuA).toSelf()
container.bind<DependencyRequiredBySatuB>(DependencyRequiredBySatuB).toSelf()
container.bind<DependencyRequiredByDuaA>(DependencyRequiredByDuaA).toSelf()
container.bind<DependencyRequiredByDuaB>(DependencyRequiredByDuaB).toSelf()
container.bind<DependencyRequiredByDuaC>(DependencyRequiredByDuaC).toSelf()
container.bind<DependencyRequiredDependencyRequiredBySatuASatu>(DependencyRequiredDependencyRequiredBySatuASatu).toSelf()
container.bind<DependencyRequiredDependencyRequiredBySatuADua>(DependencyRequiredDependencyRequiredBySatuADua).toSelf()
container.bind<DependencyRequiredDependencyRequiredBySatuATiga>(DependencyRequiredDependencyRequiredBySatuATiga).toSelf()
```

Kemudian pembuatan object SomeClass akan menjadi seperti ini,

```typescript
const someClass = container.resolve(SomeClass)
```

Ya, cukup seperti itu saja. Sangat elegan bukan?

## Penutup

Sebenarnya masih banyak lagi method yang disediakan oleh inversify, namun saya hanya mengenalkan `@injectable, @inject, dan Container` saja. Untuk lebih dalamnya kalian bisa baca di [dokumentasi resmi](http://inversify.io/) ataupun [reposiory github](https://github.com/inversify/InversifyJS)
