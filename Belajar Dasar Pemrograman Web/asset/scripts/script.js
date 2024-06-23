// document.addEventListener('DOMContentLoaded', function () {
  // const toggleButtons = document.querySelectorAll('.toggle-content');
// 
  // toggleButtons.forEach(button => {
    // button.addEventListener('click', function () {
      // const content = this.nextElementSibling;
// 
      // // Tutup semua elemen konten artikel lainnya
      // document.querySelectorAll('.toggle-content').forEach(otherButton => {
        // if (otherButton !== this && otherButton.nextElementSibling) { // Periksa apakah itu bukan tombol saat ini
          // const otherContent = otherButton.nextElementSibling;
          // otherContent.style.display = 'none';
          // otherButton.textContent = 'Show Note';
        // }
      // });
// 
      // // Alihkan konten artikel yang diklik
      // if (content.style.display === 'none' || content.style.display === '') {
        // content.style.display = 'block';
        // this.textContent = 'Hide Note';
      // } else {
        // content.style.display = 'none';
        // this.textContent = 'Show Note';
      // }
    // });
  // });
// });
// 
// // pengaturan profile - author
// const aside = document.querySelector('aside');
// aside.style.display = 'flex';
// aside.style.flexDirection = 'column';
// aside.style.alignItems = 'center';
// 
// const img = document.querySelector('aside img');
// img.style.borderRadius = '5%';
// img.style.width = '48%';
// img.style.height = '175px';
// img.style.cursor = 'pointer';
// img.addEventListener('click', function() {
  // window.open('https://www.dicoding.com/users/xpynim/academies', '_blank');
// });
// 
// // pengaturan floating-up button
// const backToTopBtn = document.getElementById('backToTopBtn');
// 
// window.addEventListener('scroll', function() {
  // if (window.pageYOffset > 200) {
    // backToTopBtn.style.display = 'block';
  // } else {
    // backToTopBtn.style.display = 'none';
  // }
// });
// 
// backToTopBtn.addEventListener('click', function() {
  // window.scrollTo({
    // top: 0,
    // behavior: 'smooth'
  // });
// });
// 
// // dropdown navbar
// document.addEventListener('DOMContentLoaded', function () {
    // const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
// 
    // dropdownToggles.forEach(toggle => {
        // toggle.addEventListener('click', function (event) {
            // event.preventDefault(); // Prevent default link behavior
            // const dropdownMenu = this.nextElementSibling;
            // dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        // });
    // });
// 
    // // Tutup dropdown jika diklik di luar
    // document.addEventListener('click', function (event) {
        // if (!event.target.matches('.dropdown-toggle')) {
            // document.querySelectorAll('.dropdown-menu').forEach(menu => {
                // menu.style.display = 'none';
            // });
        // }
    // });
// });


document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-content');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const content = this.nextElementSibling;

            // Tutup semua elemen konten artikel lainnya
            document.querySelectorAll('.toggle-content').forEach(otherButton => {
                if (otherButton !== this && otherButton.nextElementSibling) { // Periksa apakah itu bukan tombol saat ini
                    const otherContent = otherButton.nextElementSibling;
                    otherContent.style.display = 'none';
                    otherButton.textContent = 'Show Note';
                }
            });

            // Alihkan konten artikel yang diklik
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                this.textContent = 'Hide Note';
            } else {
                content.style.display = 'none';
                this.textContent = 'Show Note';
            }
        });
    });

    // pengaturan profile - author
    const aside = document.querySelector('aside');
    aside.style.display = 'flex';
    aside.style.flexDirection = 'column';
    aside.style.alignItems = 'center';

    const img = document.querySelector('aside img');
    img.style.borderRadius = '5%';
    img.style.width = '48%';
    img.style.height = '175px';
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
        window.open('https://www.dicoding.com/users/xpynim/academies', '_blank');
    });

    // pengaturan floating-up button
    const backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 200) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Tambahkan kode untuk dropdown
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Tutup dropdown jika diklik di luar
    document.addEventListener('click', function (event) {
        if (!event.target.matches('.dropdown-toggle')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = 'none';
            });
        }
    });
});
