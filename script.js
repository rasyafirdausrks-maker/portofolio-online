document.addEventListener('DOMContentLoaded', () => {
    // Jam & Dark Mode
    const clock = document.getElementById('clock');
    setInterval(() => clock.textContent = new Date().toLocaleTimeString('id-ID', { hour12: false }), 1000);

    const btn = document.getElementById('darkModeBtn');
    if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });

    // Login & Register
    const uInput = document.getElementById('usernameInput');
    document.getElementById('registerBtn').addEventListener('click', () => {
        localStorage.setItem('user', uInput.value);
        alert("Berhasil Daftar!");
    });
    document.getElementById('loginBtn').addEventListener('click', () => {
        if(uInput.value === localStorage.getItem('user')) {
            document.getElementById('loginStatus').textContent = "Login: " + uInput.value;
        } else alert("Username salah!");
    });

    // Upload & Delete
    document.getElementById('fileUpload').addEventListener('change', (e) => {
        const li = document.createElement('li');
        li.innerHTML = ${e.target.files[0].name} <button class="del">Hapus</button>;
        li.querySelector('.del').onclick = () => li.remove();
        document.getElementById('fileList').appendChild(li);
    });

    // Kalender
    document.getElementById('calendarDate').addEventListener('change', (e) => {
        document.getElementById('selectedDate').textContent = "Tanggal: " + e.target.value;
    });
});
