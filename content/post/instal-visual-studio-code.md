---
title: "Cara Instal Visual Studio Code di Windows, Linux dan MacOS"
date: 2019-03-17T08:45:15+07:00
description: "step demi step cara menginstal visual studio code terbaru di windows, linux dan macOS dengan mudah. Visual Studio Code merupakan IDE Pemrograman yang bisa digunakan untuk banyak sekali bahasa pemrograman. download visual studio code untuk windows, linux, dan macOS"
keywords: "instal visual studio code windows linux macOS"
draft: false
topik: [download]
thumbnail: "https://res.cloudinary.com/hobikoding/image/upload/v1552798965/Download/vscode.png"
slug: instal-visual-studio-code
gitlab: 'artikel/instal-visual-studio-code.md'
---

Visual Studio Code merupakan IDE Pemrograman yang bisa digunakan untuk [banyak sekali](https://code.visualstudio.com/docs/languages/overview) bahasa pemrograman.

Visual Studio Code diluncurkan pertama kali pada [tanggal](https://en.wikipedia.org/wiki/Visual_Studio_Code) 29 April 2015 oleh Microsoft dengan tujuan untuk membantu para programmer dalam mengembangkan program-program mereka.

Visual Studio Code terdapat beberapa fitur yang membantu para programmer, fitur tersebut seperti:

* _Extensions_ yang dapat diinstal berbagai dukungan bahasa pemrograman
* Ikon & Tema
* Fitur _debugger_ dan _problems_ untuk mengetahui warning dan error pada source yang kita tulis
* Integrasi dengan git dan
* Terminal

Pada Windows, terminal Visual Studio Code dapat menggunakan PowerShell maupun CMD. Sedangkan pada linux terminal yang digunakan adalah Bash.

# Install VS Code Windows

Untuk menginstall Visual Studio Code di Windows, Anda dapat mendownload master filenya melalui link di bawah.

## Cara Instal Di Windows

Cara instal Visual Studio Code di Windows sangat mudah, yaitu kita tinggal menekan tombol next saja.

1. Pertama download terlebih dahulu master instalasi Visual Studio Code pada link di atas. Apabila telah di download, buka file instalasinya dan tekan next.

1. Pada form persetujuan Lisensi, tekan **_I accept the agreement_** kemudian tekan next.

1. Selanjutnya tekan next hingga instalasi selesai.

# Install VS Code Linux

Terdapat tiga versi untuk menginstal Visual Studio Code di linux. Mana yang Anda pilih?

Tergantung distro linux apa yang Anda gunakan.

## 1. Ubuntu, Debian

Untuk melakukan instalasi pada Ubuntu, langkah pertama yaitu dengan menambahkan repositori dan key.

```bash
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
sudo mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
```

Setelah itu, Update repositori dan instal VS Code.

```bash
sudo apt-get update
sudo apt-get install code # or code-insiders
```

## 2. RHEL, Fedora, dan CentOS

Untuk melakukan instalasi, langkah pertama yaitu dengan menambahkan repositori dan key.

```bash
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
```

Setelah itu, Update repositori dan instal VS Code.

```bash
dnf check-update
sudo dnf install code
```

## 3. openSUSE dan SLE

Untuk melakukan instalasi, langkah pertama yaitu dengan menambahkan repositori dan key.

```bash
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ntype=rpm-md\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/zypp/repos.d/vscode.repo'
```

Setelah itu, Update repositori dan instal VS Code.

```bash
sudo zypper refresh
sudo zypper install code
```

# Install VS Code MacOS

Untuk menginstall Visual Studio Code di Windows, Anda dapat mendownload master filenya melalui link di bawah.

## Cara Instal Di Mac OS

Ini adalah cara yang paling mudah. Pertama download terlebih dahulu Visual Studio Code pada link di atas.

Setelah di download, langsung buka aplikasi tersebut. Visual Studio Code bisa langsung digunakan.

# Penutup

Itulah beberapa cara instalasi visual studio code di Windows, Linux, dan Mac OS. Setelah penginstalan selesai, VS Code sudah dapat digunakan untuk menuliskan dan menjalankan kode Anda.