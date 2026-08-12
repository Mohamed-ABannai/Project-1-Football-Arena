
const CategoreElement=document.querySelectorAll('.Categories')
// const CardsElement=document.querySelector('memory-game')


function init(){

console.log('Choose Category correct')
console.log(CategoreElement)
}



for(let s of CategoreElement){

    s.addEventListener('click',init)


}