# Web Server

Ketika Anda mencari sesuatu dalam internet, katakanlah search engine seperti google.com, ada<br>
data yang ditampilkan pada Anda berdasarkan hasil pencariannya. Contoh lain, Anda sedang membeli<br>
suatu produk di e-commerce. Anda perlu mencarinya dalam kolom pencarian pada platform tersebut dan<br>
daftar produk yang relevan akan disajikan untuk Anda.<br>

Namun, tahukah Anda apa yang terjadi di belakang? Bagaimana data dapat diperoleh dan ditampilkan<br>
dalam website? Hal ini termasuk pada halaman web yang sedang Anda akses. Kita akan membahasnya dalam<br>
materi ini.<br>

# Siklus Request dan Response

Tahukah Anda bahwa browser dapat menampilkan website dengan baik karena mendapatkan data dari komputer<br>
lain yang biasa disebut dengan server. Bagi komputer yang mengakses website, kita disebut sebagai client,<br>
atau dalam hal ini adalah browser yang melakukan permintaan data.<br>

Browser akan mengirimkan sesuatu yang bernama request pada server dan menerima data dalam sesuatu yang<br>
bernama response sebagai hasil tanggapan dari server. Data-data tersebut dapat berupa berkas HTML, CSS,<br>
JavaScript, dan aset-aset lain yang dibutuhkan untuk menampilkan website.<br>

![gambar](img/img09.jpeg)

Proses di atas dapat direpresentasikan dalam proses pemesanan makanan di suatu restoran. Untuk mendapatkan<br>
sajian makanan dan minuman (website), Anda (client/user) perlu melakukan pesanan kepada pelayan restoran.<br>
Pelayan tersebut dapat diwakili sebagai browser yang akan membuat pesanan (request) dan meneruskannya kepada<br>
seorang koki (server). Hal ini seperti browser membuat request ke server saat user menggunakan URL pada<br>
address bar browser. Koki akan memproses pesanan tersebut dan segera menyediakan hasilnya (response). Dalam<br>
waktu ini, Anda harus menunggu beberapa saat–biasanya tidak lama–untuk mendapatkan hasilnya. Setelah itu,<br>
koki memberikan hasil pesanan kepada pelayan dan menyajikannya kepada Anda. Sekarang, Anda dapat menikmati<br>
hasil hidangan tersebut (website).<br>

# Peranan Web Server

Tidak sedikit orang mengira bahwa server adalah sebuah komputer dengan performa tinggi dan berukuran besar.<br>
Hal tersebut tidak sepenuhnya salah karena komputer server umumnya seperti demikian. Pengertian dari web<br>
server sebenarnya lebih merujuk pada sebuah software yang dapat menghubungkan sebuah komputer dengan komputer<br>
lain. Jadi, peranan server mengacu pada fungsi dari sebuah komputer tersebut.<br>

Berbicara mengenai web server, ia dapat terbagi menjadi dua hal, yaitu hardware dan software. Bukan berarti<br>
kedua hal tersebut bekerja secara terpisah, tetapi saling melengkapi dan bekerja sama.<br>

1. Dari sisi hardware, web server merupakan komputer dengan spesifikasi yang disesuaikan berdasarkan layanannya.<br>
Contohnya, kapasitas hard drive yang besar akan dibutuhkan jika Anda memiliki website yang menyimpan banyak<br>
gambar, processor bertenaga tinggi akan diperlukan ketika Anda ingin membuat website yang memiliki proses<br>
kalkulasi kompleks, dan sebagainya.<br>

2. Dari sisi software, web server merupakan komputer yang menjalankan sebuah program agar dapat melayani<br>
(menerima atau mengirim) data melalui jenis protokol bernama HTTP. Ini merupakan protokol standar dalam<br>
melakukan transaksi data oleh browser. Ada banyak program agar komputer kita dapat berkomunikasi dengan<br>
HTTP, yakni NGINX, Apache, ataupun membuatnya sendiri dengan menggunakan bahasa pemrograman server-side.<br>

![gambar](img/img10.jpeg)

# DNS Server

Setiap perangkat, baik komputer, smartphone, modem, maupun router yang terkoneksi internet akan memiliki<br>
IP Address. Contohnya, komputer yang menjadi server dari dicoding.com memiliki alamat IP sendiri. Jika<br>
menggunakan IP tersebut untuk mengakses halaman Dicoding, tentu kita akan sulit mengingat dan mungkin akan<br>
berubah dari waktu ke waktu. Mengingat beberapa alamat IP mungkin masih mampu dilakukan. Namun, bagaimana<br>
jika harus mengingat 10 alamat IP? Untuk mengatasinya, kita menggunakan alamat yang mudah dibaca oleh manusia<br>
dan disebut domain name.<br>

Sebenarnya, nama domain tidak akan menggantikan peran dari IP address. Komputer tetap menggunakan alamat<br>
IP untuk mengakses website. Namun, bagaimana caranya nama domain dapat diterjemahkan menjadi alamat IP?<br>
Berikut jawabannya.<br>

Ketika user membuka website Dicoding menggunakan domain dicoding.com, browser akan menanyakan pada komputer,<br>
apakah ia mengenali dan dapat memberikan IP address-nya berdasarkan nama domain tersebut? Dia akan memeriksa<br>
berdasarkan DNS cache yang ada. Jika ada, browser akan diberikan alamat IP-nya dan menampilkan website yang<br>
diminta.<br>

Jika komputer tidak mengenali nama domain tersebut, dia akan menanyakan pada DNS server yang secara singkat<br>
bertugas untuk memberi tahu alamat IP yang sesuai dari nama domain yang terdaftar padanya. Jika sudah, browser<br>
akan diberikan alamat IP-nya dan meneruskan permintaan konten halaman web ke web server.<br>

![gambar](img/img11.jpeg)










