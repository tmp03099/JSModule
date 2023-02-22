// * So 3 steps for every adding event listeners:
// * 1. Create the button on html
// * 2. Create button variable in js
// * 3. Attach addEventListener to button variable. with two parameters('the type of event being looked for', what to do once triggered)

// const input = document.querySelector('input');

// input.addEventListener('keydown', function(){
//     console.log(input.value);
// })


//get the button
const button = document.querySelector('button');
const removeEvent = document.getElementById('remove')

//add the an event listener 
// * addEventListener is best choice it can duplicated. Other option 
button.addEventListener('click', function(event){
    console.log(event.type); // =>click
    console.log(event.target); // => button

    const li = document.createElement('li');

    //get the user input
    const input = document.querySelector('input');

    //set the li content is input value
    li.textContent = input.value;

    //apend the child
    document.querySelector('ul').appendChild(li)

    //reset value empty string
    input.value = "";

    console.log(li);
    console.dir(input);

})

button.addEventListener('click',sayHello);

function sayHello(){
    console.log("Fetching data from database");
}


removeEvent.addEventListener('click', function(){
    button.removeEventListener('click', sayHello);
    
})


// ===== Event Bubbling =========
const ul = document.querySelector('ul');
const body = document.querySelector('body');

ul.addEventListener('click', function(event){
    event.stopPropagation();
    // console.log('Ul Event on: ' , event.target);
    event.target.remove()
})

body.addEventListener('click', function(event){
    console.log('Body Event on: ' , event.target);
})