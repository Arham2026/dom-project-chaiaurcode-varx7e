// Event for the clock 
// First we need to get a elemnt from the html so we get it through the id "clock"

const clock = document.getElementById('clock')

// here we are learning a method which helps us to retrieve the clock

// let date = new Date();
// clock.innerHTML = date.toLocaleTimeString();
// the above code helps us to get the time and show it up in the webpage.

// but if we have to make the clock run continuously we should call the function continuously so we us the concept called eventlistener

setInterval(function(){
    let date = new Date();
clock.innerHTML = date.toLocaleTimeString();
},1000)



