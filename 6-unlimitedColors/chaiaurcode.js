//First to do this project we have to get the random colors first
const randomcolor = function(){
    const color = '0123456789ABCDEF'
let hex = '#'

// looping hex to add the random numbers from the const clor to hex

for(let i=0;i<6;i++){
   hex += color[Math.floor(Math.random() *16)]
   
}
// console.log(hex);
return hex;
}

let IntervalValid 
const startthechange = function(){

    IntervalValid = setInterval(change,1000)

    function change(){
        document.body.style.backgroundColor = randomcolor();
    }
    
}
const stopthechange = function(){
    clearInterval(IntervalValid)
}

document.querySelector('#start').addEventListener('click',startthechange)
document.querySelector('#stop').addEventListener('click',stopthechange)
