---
title: Cara Boot Live Kali Linux Iso Dari Linux Fedora
date: 2019-03-18T11:03:30+07:00
description: Bagaimana cara bootable live cd kali linux menggunakan flashdisk di linux, cara membuat live iso kali linux di linux dengan benar, Bahkan ketika mencari artikel membuat bootable linux melalui linux sendiri sangat susah ditemukan
keywords: boot live kali linux hacking pentest
draft: false
thumbnail: https://res.cloudinary.com/hobikoding/image/upload/v1552895931/Kali/kali.jpg
topic: [linux]
slug: live-boot-kali-linux
github: posts/boot-kali-linux.md
---

Kita biasa membuat bootable linux via Windows. Bahkan ketika mencari artikel membuat bootable linux melalui linux sendiri sangat susah ditemukan.

Ketika ditemukan, ternyata boot tersebut untuk distro lain. Dan ternyata lagi, caranya berbeda dengan distro kita!

Contohnya ketika membuat live boot Kali Linux, kebanyakan linux bisa di boot melalui uNetbootin. Namun jika Anda mencari distro kali linux di pilihan OS pada uNetbootin tidak ada.

Jadi bagaimana cara yang benar untuk membuat bootable kali linux dari linux sendiri?

## Menggunakan Terminal

Ya, cara ini memang sedikit menakutkan apabila kita melakukan kesalahan. Tapi mau bagaimana lagi?

Caranya cukup mudah dan sudah dilansir pada [dokumentasi](https://docs.kali.org/downloading/kali-linux-live-usb-install) kali linux juga dalam bahasa inggris.

### Cek Disk Instalasi

Cek disk anda dengan perintah berikut:

```bash
sudo fdisk -l
```

Perintah di atas akan menampilkan output seperti ini, atau mirip seperti ini:

```bash
Disk /dev/sda: 931,5 GiB, 1000204886016 bytes, 1953525168 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
Disklabel type: gpt
Disk identifier: C2DAB005-4E66-4FA5-ACCE-DE0A3764988F

Perangkat       Start      Akhir    Sektor   Size Tipe
/dev/sda1        2048     923647    921600   450M Windows recovery environment
/dev/sda2      923648    1128447    204800   100M EFI System
/dev/sda3     1128448    1161215     32768    16M Microsoft reserved
/dev/sda4     1161216  409602047 408440832 194,8G Microsoft basic data
/dev/sda5   409602048 1228797951 819195904 390,6G Microsoft basic data
/dev/sda6  1228800000 1851121663 622321664 296,8G Microsoft basic data
/dev/sda7  1851121664 1853218815   2097152     1G Linux filesystem
/dev/sda8  1853218816 1953523711 100304896  47,8G Linux LVM


Disk /dev/mapper/fedora-root: 30 GiB, 32212254720 bytes, 62914560 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes


Disk /dev/mapper/fedora-swap: 4,9 GiB, 5247074304 bytes, 10248192 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes


Disk /dev/mapper/fedora-home: 13 GiB, 13895729152 bytes, 27140096 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
```

## Colokan Flashdisk Untuk Live Kali Linux

Setelah melakukan pengecekan, masukan flashdisk untuk boot kali linuxnya.

Kemudian lakukan perintah yang sama:

```bash
sudo fdisk -l
```

Perintah di atas akan memiliki output yang berbeda. Kita jadi tau dimana letak flashdisk yang baru saja kita masukan.

```bash
Disk /dev/sda: 931,5 GiB, 1000204886016 bytes, 1953525168 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
Disklabel type: gpt
Disk identifier: C2DAB005-4E66-4FA5-ACCE-DE0A3764988F

Perangkat       Start      Akhir    Sektor   Size Tipe
/dev/sda1        2048     923647    921600   450M Windows recovery environment
/dev/sda2      923648    1128447    204800   100M EFI System
/dev/sda3     1128448    1161215     32768    16M Microsoft reserved
/dev/sda4     1161216  409602047 408440832 194,8G Microsoft basic data
/dev/sda5   409602048 1228797951 819195904 390,6G Microsoft basic data
/dev/sda6  1228800000 1851121663 622321664 296,8G Microsoft basic data
/dev/sda7  1851121664 1853218815   2097152     1G Linux filesystem
/dev/sda8  1853218816 1953523711 100304896  47,8G Linux LVM


Disk /dev/mapper/fedora-root: 30 GiB, 32212254720 bytes, 62914560 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes


Disk /dev/mapper/fedora-swap: 4,9 GiB, 5247074304 bytes, 10248192 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes


Disk /dev/mapper/fedora-home: 13 GiB, 13895729152 bytes, 27140096 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes


Disk /dev/sdb: 7,2 GiB, 7748448256 bytes, 15133688 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x00a2e163

Perangkat  Boot Start    Akhir   Sektor  Size Id Tipe
/dev/sdb1  *     2048 15133687 15131640  7,2G  c W95 FAT32 (LBA)
```

Terlihat kan perbedaannya?

Ada tambahan <mark>`Disk /dev/sdb: 7,2 GiB, 7748448256 bytes, 15133688 sectors ...`</mark> tepat seperti size dari flashdisk yang saya masukan.

### Menyalin File Instalasi Kali Linux

Kita telah mengetahui lokasi flashdisk yang baru saja kita masukan. Yaitu di `/dev/sdb`.

Selanjutnya pada terminal, masuk ke folder tempat anda menyimpan file iso dari kali linuxnya. Kemudian lakukan perintah berikut (**_hati-hati!!_**):

```bash
sudo dd if=kali-linux-2017.3-amd64.iso of=/dev/sdb bs=512k
```

>**Catatan:** `kali-linux-2017.3-amd64.iso` adalah nama file iso dari kali linuxnya. `/dev/sdb` merupakan tempat/letak dari flashdisk kita tadi. Dan tambahkan kode `bs=512k`
>
>Ganti `kali-linux-2017.3-amd64.iso` dan `/dev/sdb` sesuai kondisi anda!

Proses ini memakan waktu yang lama. Sekitar 10 menit atau bahkan lebih.

Pada terminal, perintah di atas tidak menunjukan feedback sama sekali, jadi tenang saja, tunggu saja.

Jika sudah selesai semua, akan muncul seperti ini (atau mirip):

```bash
5505+1 catatan masuk
5505+1 catatan keluar
2886402048 bytes (2,9 GB, 2,7 GiB) copied, 661,27 s, 4,4 MB/s
```

>**Catatan:** Linux saya menggunakan bahasa Indonesia sehingga menampilkan output bahasa Indonesia seperti terlihat di atas.

## Penutup

Anda sekarang sudah bisa menggunakan flashdisk tersebut untuk live maupun instal kali linux di laptop lainnya. Sangat mudah sebenarnya, tapi perlu kehati-hatian. Sama saja ketika kita menggunakan uNetbootin atau Rufus.