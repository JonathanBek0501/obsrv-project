let menuBtn = document.querySelector('.menuBtn');
let mobile = document.querySelector('.mobile');

menuBtn.addEventListener('click', function() {
    mobile.classList.toggle('hidden');
})