body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background: #f5f5f5;
    color: #222;
    transition: 0.3s;
}

header {
    text-align: center;
    padding: 20px;
    background: #333;
    color: white;
    border-radius: 10px;
}

main {
    margin-top: 20px;
}

.clock-container {
    margin-top: 10px;
}

#clock {
    font-size: 24px;
    font-weight: bold;
    background: white;
    color: #333;
    padding: 10px 20px;
    border-radius: 8px;
    display: inline-block;
}

#darkModeBtn {
    margin-top: 15px;
    padding: 10px 15px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

/* DARK MODE */

body.dark {
    background: #121212;
    color: white;
}

body.dark header {
    background: #1e1e1e;
}

body.dark #clock {
    background: #333;
    color: white;
}

body.dark #darkModeBtn {
    background: #444;
    color: white;
}
