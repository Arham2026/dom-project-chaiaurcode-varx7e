//first we need to select 

// COncept of the Project is
// if we click on the Particular color then the  whole background should change into that colour

const buttons = document.querySelectorAll('.button')

const body = document.querySelector("body")

//Learning about Events
buttons.forEach( (button) => {
    console.log(button)
    button.addEventListener('click',(e) => {
      console.log(e)
      console.log(e.target)

      // if(e.target.id == 'grey'){
      //   body.style.backgroundColor = e.target.id
      // }

      // writing it in the switch

      let colour = e.target.id

      switch (colour) {
        case 'grey' :
          body.style.backgroundColor = e.target.id

        case 'white' :
            body.style.backgroundColor = e.target.id

        case 'blue' :
            body.style.backgroundColor = e.target.id

        case 'yellow' :
            body.style.backgroundColor = e.target.id
      }
    })
    
})
//Event.target shows us from 
// where the Event is targeted.

