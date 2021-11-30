const body = document.querySelector('body')
const main = document.createElement('section')
const disk = document.createElement('div')

main.classList.add('main');
body.appendChild(main);

function createBar() {
    for(let i = 0; i < 3; i++){
        let div = document.createElement('div');
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

main.addEventListener('click', function (e) {
    let selectedDisk = event.target.parentNode.lastChild.classList.toggle('select')
    if(selectedDisk === true){
        choiceBar(event.target);
    }
});

function choiceBar (x) {
    console.log(event.currentTarget)
    /* if(x !== event.target.parentNode){
        //console.log(event.target.parentNode.appendChild(x))
    } */
}
