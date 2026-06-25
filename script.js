document.addEventListener('DOMContentLoaded', () => {
    // 1. JAM
    const clock = document.getElementById('clock');
    setInterval(() => clock.textContent = new Date().toLocaleTimeString('id-ID', { hour12: false }), 1000);

    // 2. DARK MODE
    const btn = document.getElementById('darkModeBtn');
    if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });

    // 3. LOGIN & REGISTER
    const uInput = document.getElementById('usernameInput');
    document.getElementById('registerBtn').addEventListener('click', () => {
        localStorage.setItem('user', uInput.value);
        alert("Terdaftar!");
    });
    document.getElementById('loginBtn').addEventListener('click', () => {
        if(uInput.value === localStorage.getItem('user')) {
            document.getElementById('loginStatus').textContent = "Login sebagai: " + uInput.value;
        } else {
            alert("Username tidak ditemukan!");
        }
    });

    // 4. UPLOAD & DELETE
    const fileInput = document.getElementById('fileUpload');
    const fileList = document.getElementById('fileList');
    fileInput.addEventListener('change', (e) => {
        const li = document.createElement('li');
        li.innerHTML = ${e.target.files[0].name} <button class="del">Hapus</button>;
        li.querySelector('.del').onclick = () => li.remove();
        fileList.appendChild(li);
    });

    // 5. KALENDER
    document.getElementById('calendarDate').addEventListener('change', (e) => {
        document.getElementById('selectedDate').textContent = "Tanggal dipilih: " + e.target.value;
    });
});
