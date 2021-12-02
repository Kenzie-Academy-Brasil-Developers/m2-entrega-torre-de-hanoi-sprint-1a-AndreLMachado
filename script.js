let origin = null
let totalDiscs = null;
const body = document.querySelector('body')
let contador = 0
const contadorDeJogadas = document.createElement('p')
contadorDeJogadas.classList.add('contadorDeJogadas')
body.appendChild(contadorDeJogadas)

function resetGame(){
const buttonReset = document.createElement('button')
buttonReset.classList.add('restart')
buttonReset.innerText = 'Restart'
body.appendChild(buttonReset)
buttonReset.addEventListener('click', function() {
    const section = document.querySelector('section')
    section.remove()
    selectGame() 
    contador = 0
    contadorDeJogadas.innerText = 'Movimentos: ' + contador   
})
}
resetGame()


function finishGame() {
    const section = document.querySelector('section')    
    section.remove()

    const finishDiv = document.createElement('section')
    finishDiv.classList.add('vitoria')
    const buttonReplay = document.createElement('button')
    const p = document.createElement('p')    
    
    buttonReplay.innerText = 'JOGAR NOVAMENTE'
    buttonReplay.addEventListener('click', function() {
        const section = document.querySelector('section')
        section.remove()
        selectGame() 
        contador = 0
        contadorDeJogadas.innerText = 'Movimentos: ' + contador        
    })    
    p.innerText = 'Você ganhou!'
    finishDiv.appendChild(p)
    finishDiv.appendChild(buttonReplay)    

    body.appendChild(finishDiv)    
}





function checkForVictory() {
    const lastTower = document.querySelector(`div[data-tower="2"]`)
    if (lastTower.children.length !== totalDiscs) return;

    finishGame();
}

function move(e) {
    const towerClicked = e.target
    const towerNumber = towerClicked.getAttribute('data-tower')
    const hasChildren = towerClicked.children.length > 0

    if (!origin) {
        if (!hasChildren) return;
        origin = towerNumber
        towerClicked.children[0].classList.toggle('disc-selected')
        return;
    }

    if (towerNumber === origin) return;

    const originTower = document.querySelector(`div[data-tower="${origin}"]`)

    if (!hasChildren) {
        moveDisc(originTower, towerClicked)
        origin = null
    } else {

        const firstOriginWeight = originTower.children[0].getAttribute('data-weight')
        const firstTargetWeight = towerClicked.children[0].getAttribute('data-weight')

        if (firstTargetWeight < firstOriginWeight) {
            origin = null;
            originTower.children[0].classList.toggle('disc-selected')
            return;
        }
        moveDisc(originTower, towerClicked)
        origin = null

    }

    checkForVictory()
}

function moveDisc(towerOrigin, towerTarget) {
    const disc = towerOrigin.children[0]
    const weight = disc.getAttribute('data-weight')
    const color = disc.style.backgroundColor
    disc.remove()

    createDisc(weight, color, towerTarget)
    contador ++
    contadorDeJogadas.innerText = ' Movimentos: ' + contador
    console.log(contador)
}

function createTower(number, board) {
    const tower = document.createElement('div')
    tower.setAttribute('data-tower', number)
    tower.classList.add('tower')
    tower.addEventListener('click', move)
    board.appendChild(tower)
}

function createDisc(weight, color, tower) {
    const disc = document.createElement('div')
    disc.setAttribute('data-weight', weight)
    disc.style.width = 20 * weight + "%"
    disc.style.backgroundColor = color
    disc.innerText = weight
    disc.addEventListener('click', function(e) { e.stopPropagation() })
    disc.classList.add('disc')
    tower.insertBefore(disc, tower.firstChild)
}

function startGame(discs) {

    const colors = ['#b30000', '#cc0000', '#e60000', '#ff0000', '#ff1a1a'].reverse()

    const mainBoard = document.createElement('section')
    mainBoard.classList.add('board')
    body.appendChild(mainBoard)

    for (let index = 0; index < 3; index++) {
        createTower(index, mainBoard)
    }

    const tower1 = document.querySelector('div[data-tower="0"]')
    for (let index = discs; index >= 1; index--) {
        createDisc(index, colors[index - 1], tower1)
    }
}

function createButton(name, discs, section) {
    const button = document.createElement('button')
    button.setAttribute('data-discs', discs)
    button.innerText = name
    button.addEventListener('click', function(e) {
        const discs = e.target.getAttribute('data-discs')
        const section = document.querySelector('section')
        section.remove()
        totalDiscs = parseInt(discs);
        startGame(discs)
    })
    section.appendChild(button)
}

function selectGame() {
    const section = document.createElement('section')
    body.appendChild(section)
    section.classList.add('SelectDificult')
    const p = document.createElement('p')
    p.classList.add('dificuldade')
    section.appendChild(p)
    p.innerText = 'Selecione a dificuldade do jogo'
    
    createButton('Fácil', 3, section)
    createButton('Médio', 4, section)
    createButton('Difícil', 5, section)
    contadorDeJogadas.innerText = 'Movimentos: ' + contador  
}


// JOGO COMEÇA AQUI
selectGame()