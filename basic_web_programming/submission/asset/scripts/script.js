document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-content');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const content = this.nextElementSibling;
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                this.textContent = 'hide';
            } else {
                content.style.display = 'none';
                this.textContent = 'show again';
            }
        });
    });
});
