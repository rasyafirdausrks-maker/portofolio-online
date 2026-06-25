document.addEventListener('DOMContentLoaded', () => {
    
    // --- JAM DIGITAL ---
    const clockElement = document.getElementById('clock');
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('id-ID', { hour12: false });
        if (clockElement) clockElement.textContent = timeString;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // --- DARK MODE ---
    const darkModeBtn = document.getElementById('darkModeBtn');
    
    // Cek status tersimpan
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
    }
    
    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            const isDark = document.body.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    // --- (Masukkan fungsi lainnya: Profil, Login, dll di sini) ---
});
