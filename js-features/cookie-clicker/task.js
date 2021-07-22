const cookie = document.getElementById('cookie');

cookie.onclick = function() {
    if (cookie.width === 200) {
        cookie.width = 220
    } else {
        cookie.width = 200
    }

    let clickerCounter = document.getElementById('clicker__counter');
    clickerCounter.textContent++;
};