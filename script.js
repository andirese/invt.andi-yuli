
function bukaUndangan() {
    document.querySelector('.opening').style.display = 'none';
    document.querySelector('#content').classList.remove('hidden');
    document.getElementById('bgm').play();
}

function toggleMusic() {
    var music = document.getElementById('bgm');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

const container = document.querySelector('.bunga-container');

function buatBunga() {
    const bunga = document.createElement('div');
    bunga.classList.add('bunga');
    bunga.style.left = Math.random() * window.innerWidth + 'px';
    bunga.style.animationDuration = (Math.random() * 3 + 2) + 's';
    bunga.style.opacity = Math.random();
    container.appendChild(bunga);

    setTimeout(() => {
        bunga.remove();
    }, 5000);
}

setInterval(buatBunga, 300);
