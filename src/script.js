function iniciar() {
    let bola = document.getElementById('bola')
    bola.classList.add('movimento')
}

function parar() {
    let bola = document.getElementById('bola')
    bola.classList.remove('movimento')
    bola.classList.remove('pular')
}

function pular() {
    let bola = document.getElementById('bola')
    bola.classList.add('pular')
    bola.classList.remove('pular')
}