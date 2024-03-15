console.log('Project 5');
// In this project we are going to display the key that we press in the keyboard in the screen.
// for me right now I have the Idea to use the input element to get the key and embed in the html
// iIn this project we are just creating a set of table in one of them we insert the values and display it in the tables.

let insert = document.querySelector('#insert')

window.addEventListener('keydown',(e) => {
    insert.innerHTML = `<div class ='color'>

    <table>
    <tr>
      <th>key</th>
      <th>keycode</th>
      <th>code</th>
    </tr>

    <tr>
      <td>${e.key == ' ' ? 'spacebar': e.key }</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>

  </table>
    
<div>`
    
});

