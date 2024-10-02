// Script untuk menampilkan pesan khusus saat tombol ditekan
document.getElementById('showMessageBtn').addEventListener('click', function() {
    var specialMessage = document.getElementById('specialMessage');
    specialMessage.style.display = 'block';
    specialMessage.classList.add('fade-scale');
});
