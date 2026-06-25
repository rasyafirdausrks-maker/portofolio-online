document.addEventListener('DOMContentLoaded', () => {
    // 1. JAM
    const clockElement = document.getElementById('clock');
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('id-ID', { hour12: false });
        if (clockElement) clockElement.textContent = timeString;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // 2. DARK MODE
    const darkModeBtn = document.getElementById('darkModeBtn');
    if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');
    
    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });

    // ... (Masukkan kode fitur lainnya: Profil, Login, Upload, Galeri, Catatan di sini) ...
    // Pastikan semua fungsi tersebut berada di dalam kurung kurawal ini
});
