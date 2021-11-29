const body = document.querySelector('.body');
const start = document.querySelector('.start');

let selected = 0;

const small_disk = document.createElement('div')           
const medium_disk = document.createElement('div')          
const big_disk = document.createElement('div')         

small_disk.classList.add('small_disk')
medium_disk.classList.add('medium_disk')
big_disk.classList.add('big_disk')



start.appendChild(big_disk);
start.appendChild(medium_disk);
start.appendChild(small_disk);  

start.addEventListener('click', function() {
    selected = event.target.classList.toggle('select');

    if(selected === true) {
        idSelect();
    }
    

});

function idSelect(){
    body.addEventListener('click', function(){
    });
}



/* console.log(str1)
console.log(str2)
console.log(str3) */
