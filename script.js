document.addEventListener('DOMContentLoaded', () => {
    // 1. JAM
    const clock = document.getElementById('clock');
    function updateClock() {
        if (clock) clock.textContent = new Date().toLocaleTimeString('id-ID', { hour12: false });
    }
    setInterval(updateClock, 1000);
    updateClock();

    // 2. DARK MODE
    const btn = document.getElementById('darkModeBtn');
    if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');
    
    if (btn) {
        btn.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
        });
    }

    // 3. AUTH
    const uInput = document.getElementById('usernameInput');
    const regBtn = document.getElementById('registerBtn');
    const logBtn = document.getElementById('loginBtn');
    const status = document.getElementById('loginStatus');

    regBtn?.addEventListener('click', () => {
        localStorage.setItem('user', uInput.value);
        alert("Terdaftar!");
    });

    logBtn?.addEventListener('click', () => {
        if(uInput.value === localStorage.getItem('user')) {
            status.textContent = "Login: " + uInput.value;
        } else {
            alert("Username salah!");
        }
    });

    // 4. UPLOAD
    const fileUp = document.getElementById('fileUpload');
    const fList = document.getElementById('fileList');
    fileUp?.addEventListener('change', (e) => {
        if (e.target.files[0]) {
            const li = document.createElement('li');
            li.innerHTML = ${e.target.files[0].name} <button onclick="this.parentElement.remove()">Hapus</button>;
            fList.appendChild(li);
        }
    });

    // 5. KALENDER
    const cal = document.getElementById('calendarDate');
    const selDate = document.getElementById('selectedDate');
    cal?.addEventListener('change', (e) => {
        selDate.textContent = "Tanggal: " + e.target.value;
    });
});
