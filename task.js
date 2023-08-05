const deadElement = document.getElementById('dead');
const lostElement = document.getElementById('lost');
let deadCounter = 0, lostCounter = 0;
let message = '';

for (let i=0; i<9; i++) {
    document.getElementById(`hole${i+1}`).onclick = onClickHole;
}

function onClickHole() {
    if (this.className.includes('hole_has-mole')) {
        deadCounter++;
        deadElement.textContent = String(deadCounter);
        if (deadCounter >= 10) {
            message = 'Победа';
        }
    } else {
        lostCounter++;
        lostElement.textContent = String(lostCounter);
        if (lostCounter >= 5) {
            message = 'Поражение';
        }
    }

    if (message !== '') {
        deadCounter = 0;
        lostCounter = 0;
        deadElement.textContent = String(deadCounter);
        lostElement.textContent = String(lostCounter);
        alert(message);
        message = '';
    }
}
