// Bmi calculator

// we should first select the form to get the calculate button
// Firsr we should select the input boxes to get the valuses entered by the user

// then we should convert those values to the number type then we have to chack it once again whether the user has entered the value or not




const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();

    // making sure the recieved value is in int

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

// isNaN() => if the number gets convertable it gives true if not gives us the false

    if(height == ' ' || height < 0 || isNaN(height)){
        results.innerHtml = `please give a valid height ${height}`
    }

    else if(weight == ' ' || weight < 0 || isNaN(weight)){
        results.innerHtml = `please give a valid weight ${weight}`
    }

    else{
       const BMI =  (weight / ((height*height)/10000)).toFixed(2)
    //    BMI formula now we have display it in the result.
       results.innerHTML = `<span>${BMI}<span/>`
    }
    
    


    if (BMI < 18.6){
        alert('Under Weight')
    }
    else if (BMI >= 18.6 && MI <= 24.9){
        alert('Normal Range')
    }

    else if (BMI > 24.9){
       alert('Overweight ')
    }
});




