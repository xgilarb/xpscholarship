# Anatomi Website

Luar biasa! Hingga saat ini, Anda sudah memahami tentang cara internet bekerja, website dan halaman<br>
web, serta web server. Pasti Anda sudah tidak sabar membuat website yang bermanfaat untuk banyak<br>
orang, kan?<br>

![gambar](img/img13.jpeg)

Masih ingat dengan website di atas? Ia adalah salah satu website untuk melakukan pengeditan foto. Tentu,<br>
ada beberapa komponen yang dimanfaatkan agar website dapat berjalan dengan baik dan interaktif. Nah,<br>
sebelum terjun dalam cara pembuatan website, kita akan berkenalan terlebih dahulu dengan beberapa<br>
komponen tersebut. Ini merupakan pengetahuan penting yang perlu diketahui dan dipahami bagi seorang<br>
web developer. Yuk!<br>

# Pondasi Website

Pada dasarnya, website dibangun dengan tiga buah fondasi utama:<br>

1. HTML: sebuah markup language yang menentukan struktur atau kerangka dari halaman web;
2. CSS: sebuah declarative language yang memberikan gaya atau styling agar halaman web ditampilkan lebih ciamik; dan
3. JavaScript: satu-satunya programming language yang didukung oleh browser untuk meningkatkan interaktivitas pada halaman web.<br>

Perlu ditekankan bahwa ketiga komponen tersebut termasuk hal vital dalam pembangunan web. Sebenarnya,<br>
kita bisa saja membangun halaman web tanpa CSS dan JavaScript. Namun, website akan terlihat tidak menarik<br>
dan membosankan.<br>

![gambar](img/img14.jpeg)

Saat ini, hampir tidak ada website yang dibangun tanpa menggunakan styling dan script (JavaScript).<br>
Oleh karena itu, jika salah satu dari ketiga komponen tersebut dihilangkan, hasil website yang disajikan<br>
terasa tidak lengkap.<br>

# Analogi Website Terhadap Hewan

Untuk lebih memudahkan penggambaran, berikut adalah analogi dari penerapan tiga fondasi website.<br>

![gambar](img/img15.jpeg)

Sebagaimana tubuh hewan yang disusun dari kerangka tulang, HTML pada website berperan sebagai<br>
kerangka dasar yang digunakan dalam menampilkan visual pada website. Namun, jika hanya sebatas kerangka,<br>
hewan tersebut akan terlihat seram dan aneh, bukan? Oleh karena itu, untuk mempercantik sosoknya, kita<br>
membutuhkan sebuah kulit, bulu, warna bulu, dsb. Di sinilah peran CSS.<br>

Setelah memiliki kulit dan tampak cantik, selanjutnya kita membutuhkan interaktivitas pada kucing agar<br>
dapat bergerak dan berinteraksi. Ibarat dalam kasus ini, JavaScript-lah yang berperan dalam membuat<br>
website menjadi dinamis dan interaktif.<br>

# Rangkuman Pendahuluan

Kita telah belajar banyak hal dalam modul Pendahuluan. Kami siapkan rangkuman materi terhadap hal<br>
yang telah Anda pelajari selama ini. Harapannya, Anda dapat mengingat kembali setiap materi yang<br>
disampaikan.<br>

Cara Internet Bekerja

Internet memberikan kemampuan pada user untuk mengirimkan permintaan dan menerima hasil permintaan<br>
(data) pada website. Hal ini terjadi karena komputer milik user terhubung dengan komputer lain yang<br>
biasa disebut dengan server. Kedua komputer ini berkomunikasi melalui sebuah jaringan, baik dengan kabel<br>
maupun nirkabel.<br>

Berikut adalah perkembangan jaringan yang terjadi.<br>

![gambar](img/img16.png)

# Website dan Halaman Web

Berikut adalah penjelasan singkat mengenai halaman web dan website.<br>

![halaman web](img/img04.jpeg)

Halaman web merupakan halaman tunggal yang menampilkan informasi, baik berupa teks, gambar, maupun media<br>
lainnya. Tidak hanya media yang ditampilkan, halaman web yang dibangun dapat ditambahkan interaktivitas<br>
menggunakan kode (JavaScript).<br>

# Website

![halaman web](img/img05.jpeg)

Jika sebelumnya Anda belajar halaman web berupa halaman tunggal, website adalah sekumpulan halaman web<br>
yang saling terhubung. Website bersifat unik karena setiap halaman dapat saling terhubung dengan<br>
menggunakan hipertaut (hyperlink), baik dalam domain yang sama maupun berbeda.<br>

# Web Server

Mari mengetahui web server lebih dalam.
## Siklus Request dan Response

Tahukah Anda bahwa browser dapat menampilkan website dengan baik karena mendapatkan data dari komputer<br>
lain yang biasa disebut dengan server? Bagi komputer yang mengakses website, kita disebut sebagai client,<br>
atau dalam hal ini adalah browser yang melakukan permintaan data.<br>

Browser akan mengirimkan sesuatu bernama request pada server dan menerima data dalam sesuatu bernama<br>
response sebagai hasil tanggapan dari server. Data-data tersebut dapat berupa berkas HTML, CSS, JavaScript,<br>
dan aset-aset lain yang dibutuhkan untuk menampilkan website.<br>

![gambar](img/img09.jpeg)

# Peranan Web Server

Berbicara mengenai web server, ia dapat terbagi menjadi dua hal, yaitu hardware dan software. Bukan<br>
berarti kedua hal tersebut bekerja secara terpisah, tetapi saling melengkapi dan bekerja sama.<br>

Dari sisi hardware, web server merupakan komputer dengan spesifikasi yang disesuaikan berdasarkan<br>
layanannya. Contohnya, kapasitas hard drive yang besar akan dibutuhkan jika Anda memiliki website yang<br>
menyimpan banyak gambar.<br>

Dari sisi software, web server merupakan komputer yang menjalankan sebuah program agar dapat melayani<br>
(menerima atau mengirim) data melalui jenis protokol bernama HTTP. Ini merupakan protokol standar dalam<br>
melakukan transaksi data oleh browser.<br>

![gambar](img/img10.jpeg)

# DNS Server

Sebenarnya, nama domain tidak akan menggantikan peran dari IP address. Komputer tetap menggunakan alamat<br>
IP untuk mengakses website. Namun, bagaimana caranya nama domain dapat diterjemahkan menjadi alamat IP?<br>
Berikut jawabannya.<br>

Ketika user membuka website Dicoding menggunakan domain dicoding.com, browser akan menanyakan pada komputer,<br>
apakah ia mengenali dan dapat memberikan IP address-nya berdasarkan nama domain tersebut? Dia akan memeriksa<br>
berdasarkan DNS cache yang ada. Jika ada, browser akan diberikan alamat IP-nya dan menampilkan website yang<br>
diminta.<br>

Jika komputer tidak mengenali nama domain tersebut, dia akan menanyakan pada DNS server yang secara singkat<br>
bertugas untuk memberi tahu alamat IP yang sesuai dari nama domain yang terdaftar padanya. Jika sudah,<br>
browser akan diberikan alamat IP-nya dan meneruskan permintaan konten halaman web ke web server.<br>

![gambar](img/img11.jpeg)

# Web Browser

Web browser atau disingkat browser merupakan sebuah program yang menampilkan halaman web. Tidak hanya satu<br>
halaman web, tetapi banyak website yang aktif di dunia ini dapat diakses oleh browser. Bahkan, halaman web<br>
yang saling terhubung dalam satu domain yang sama juga dapat diakses.<br>

## Cara Browser Bekerja

Ketika user mengakses website dengan URL, browser akan membuat sebuah request yang akan dikirimkan ke web<br>
server. Kemudian, web server akan mengirimkan response berisi konten-konten yang dibutuhkan oleh website dan<br>
browser akan memprosesnya hingga tampil website pada perangkat user.<br>

Browser memiliki address bar yang merupakan sebuah input bagi user untuk menuliskan alamat website atau yang<br>
biasa disebut Uniform Resource Locator (URL). Ada tiga bagian pada URL, yaitu protocol (https), domain name<br>
(dicoding.com), dan file path (alamat halaman web yang sedang ditampilkan).<br>

![gambar](img/img13.jpeg)
