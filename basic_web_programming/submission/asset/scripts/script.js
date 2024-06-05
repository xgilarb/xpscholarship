// pengaturan konten - huthama
document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-content');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const content = this.nextElementSibling;
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                this.textContent = 'Hide Article';
            } else {
                content.style.display = 'none';
                this.textContent = 'Show Article';
            }
        });
    });
});

// pengaturan profile - author
const aside = document.querySelector('aside');
aside.style.display = 'flex';
aside.style.flexDirection = 'column';
aside.style.alignItems = 'center';

const img = document.querySelector('aside img');
img.style.borderRadius = '5%';
img.style.Width = '48%';
img.style.height = '175px';
img.style.cursor = 'pointer';
img.addEventListener('click', function() {
    window.open('https://www.dicoding.com/users/xpynim/academies', '_blank');
});
