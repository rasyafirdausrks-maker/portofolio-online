// =====================
// JAM DIGITAL
// =====================

function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("clock").textContent =
        ${hours}:${minutes}:${seconds};
}

updateClock();
setInterval(updateClock, 1000);


// =====================
// DARK MODE
// =====================

const darkModeBtn =
document.getElementById("darkModeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

});


// =====================
// PROFIL PENGGUNA
// =====================

const profilePic =
document.getElementById("profilePic");

const profileUpload =
document.getElementById("profileUpload");

const profileName =
document.getElementById("profileName");

const saveNameBtn =
document.getElementById("saveNameBtn");

const nameInput =
document.getElementById("nameInput");

const savedName =
localStorage.getItem("profileName");

if(savedName){
    profileName.textContent = savedName;
    nameInput.value = savedName;
}

saveNameBtn.addEventListener("click",()=>{

    const name = nameInput.value.trim();

    if(name !== ""){

        localStorage.setItem(
            "profileName",
            name
        );

        profileName.textContent = name;
    }

});

const savedPhoto =
localStorage.getItem("profilePhoto");

if(savedPhoto){
    profilePic.src = savedPhoto;
}

profileUpload.addEventListener(
"change",
function(e){

    const file = e.target.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(){

        profilePic.src = reader.result;

        localStorage.setItem(
            "profilePhoto",
            reader.result
        );

    };

    reader.readAsDataURL(file);

});


// =====================
// LOGIN REGISTER
// =====================

const usernameInput =
document.getElementById("usernameInput");

const passwordInput =
document.getElementById("passwordInput");

const registerBtn =
document.getElementById("registerBtn");

const loginBtn =
document.getElementById("loginBtn");

const logoutBtn =
document.getElementById("logoutBtn");

const loginStatus =
document.getElementById("loginStatus");

registerBtn.addEventListener("click", () => {

    const username =
    usernameInput.value.trim();

    const password =
    passwordInput.value.trim();

    if(username === "" || password === ""){
        alert("Isi username dan password");
        return;
    }

    localStorage.setItem(
        "accountUsername",
        username
    );

    localStorage.setItem(
        "accountPassword",
        password
    );

    alert("Registrasi berhasil");

});

loginBtn.addEventListener("click", () => {

    const username =
    usernameInput.value.trim();

    const password =
    passwordInput.value.trim();

    const savedUser =
    localStorage.getItem("accountUsername");

    const savedPass =
    localStorage.getItem("accountPassword");

    if(
        username === savedUser &&
        password === savedPass
    ){

        localStorage.setItem(
            "loggedIn",
            "true"
        );

        loginStatus.textContent =
        "Login sebagai: " + username;

        profileName.textContent =
        username;

    }else{

        alert("Username atau password salah");

    }

});

logoutBtn.addEventListener("click", () => {

    localStorage.removeItem("loggedIn");

    loginStatus.textContent =
    "Belum Login";

});

if(localStorage.getItem("loggedIn") === "true"){

    const user =
    localStorage.getItem("accountUsername");

    loginStatus.textContent =
    "Login sebagai: " + user;

    profileName.textContent =
    user;

}
