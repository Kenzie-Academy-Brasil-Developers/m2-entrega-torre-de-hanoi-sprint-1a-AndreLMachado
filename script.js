const body = document.querySelector('body')
const main = document.createElement('main')
const disk = document.createElement('div')

main.classList.add('main');
body.appendChild(main);

function createBar() {
    for(let i = 0; i < 3; i++){
        let div = document.createElement('section');
        main.appendChild(div)
    }
    main.childNodes[0].classList.add('start')
    main.childNodes[1].classList.add('offSett')
    main.childNodes[2].classList.add('end')
}
createBar()

function createDisk (x) {
    for(let i = 0; i < 3; i++){
        let div = document.createElement('div');
        main.childNodes[0].appendChild(div)
    }
    main.childNodes[0].children[0].classList.add('big_disk')
    main.childNodes[0].children[1].classList.add('medium_disk')
    main.childNodes[0].children[2].classList.add('small_disk')
}
createDisk ()

body.addEventListener('click', function (e) {
    if(event.target.tagName === "DIV"){
        let addClassSelect = event.target.parentNode.lastChild.classList.toggle('select')
        selectedDisk = event.target.parentNode.lastChild;
    }     
    main.addEventListener('click', choiceBar(selectedDisk));
});

function choiceBar (x) {   
    if(event.target.tagName === "SECTION"){
        event.target.appendChild(x).classList.remove('select');

    } 
} 
