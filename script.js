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

    // 3. AUTH
    const uInput = document.getElementById('usernameInput');
    document.getElementById('registerBtn').addEventListener('click', () => {
        localStorage.setItem('user', uInput.value);
        alert("Terdaftar!");
    });
    document.getElementById('loginBtn').addEventListener('click', () => {
        if(uInput.value === localStorage.getItem('user')) {
            document.getElementById('loginStatus').textContent = "Login: " + uInput.value;
        } else alert("Username salah!");
    });

    // 4. UPLOAD
    document.getElementById('fileUpload').addEventListener('change', (e) => {
        const li = document.createElement('li');
        li.innerHTML = ${e.target.files[0].name} <button onclick="this.parentElement.remove()">Hapus</button>;
        document.getElementById('fileList').appendChild(li);
    });

    // 5. KALENDER
    document.getElementById('calendarDate').addEventListener('change', (e) => {
        document.getElementById('selectedDate').textContent = "Tanggal: " + e.target.value;
    });
});
