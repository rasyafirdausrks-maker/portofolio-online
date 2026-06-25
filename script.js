document.addEventListener('DOMContentLoaded', () => {
    // --- 1. JAM & DARK MODE ---
    const clockElement = document.getElementById('clock');
    const darkModeBtn = document.getElementById('darkModeBtn');
    
    function updateClock() {
        if (clockElement) clockElement.textContent = new Date().toLocaleTimeString('id-ID', { hour12: false });
    }
    setInterval(updateClock, 1000);
    updateClock();

    if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');
    darkModeBtn?.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });

    // --- 2. AUTH (LOGIN/REGISTER) ---
    const registerBtn = document.getElementById('registerBtn');
    const loginBtn = document.getElementById('loginBtn');
    const loginStatus = document.getElementById('loginStatus');

    registerBtn?.addEventListener('click', () => {
        localStorage.setItem('user', document.getElementById('usernameInput').value);
        alert("Registrasi Berhasil!");
    });

    loginBtn?.addEventListener('click', () => {
        const storedUser = localStorage.getItem('user');
        if (document.getElementById('usernameInput').value === storedUser) {
            loginStatus.textContent = "Login sebagai: " + storedUser;
        } else {
            alert("Username tidak terdaftar!");
        }
    });

    // --- 3. UPLOAD & DELETE FILE ---
    const fileUpload = document.getElementById('fileUpload');
    const fileList = document.getElementById('fileList');
    
    fileUpload?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const li = document.createElement('li');
            li.innerHTML = ${file.name} <button class="delBtn">Hapus</button>;
            li.querySelector('.delBtn').onclick = () => li.remove();
            fileList.appendChild(li);
        }
    });

    // --- 4. KALENDER ---
    const calendarDate = document.getElementById('calendarDate');
    const selectedDate = document.getElementById('selectedDate');
    
    calendarDate?.addEventListener('change', (e) => {
        selectedDate.textContent = "Tanggal dipilih: " + e.target.value;
        localStorage.setItem('date', e.target.value);
    });
});
