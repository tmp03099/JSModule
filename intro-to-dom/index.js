const getTitle = document.getElementById("title");
getTitle.style.backgroundColor = "pink";
console.dir(getTitle);

//to select attributes
const h2 = document.querySelector('h2');
const h2Elements = document.querySelectorAll('h2'); // always return array
console.dir(h2);
console.dir(h2Elements);

const p = document.querySelector("p");
p.style.lineHeight = "2em";
p.innerHTML = "New string <strong>Stay Strong</strong>";


//list
const lis = document.querySelectorAll('li');

//adds class to an element classlist
lis[0].classList.add('selected');

//check if the element contains the class argument
console.log(lis[0].classList.contains('selected'));

const comments = document.querySelector("#comments")
comments.classList.toggle('selected') //add class
console.dir(comments)

for (element of lis){
    if (element.innerText === "list2"){
        console.log("You got the list2");
        break;
    }
}

lis.forEach((element, index) => console.log(element, index));

// ===========
//return a NodeList
const chatLis = document.querySelectorAll("#chat > li")
console.log(chatLis);

//return a HTMLCollectionList

const allLis = document.getElementsByTagName('li');
console.log(allLis);

//create a regular array from a collection of values
const arrayOfLis = Array.from(allLis);
console.log(arrayOfLis);


//==== Create an Element and add attributes =====

//create a new element
const btn = document.createElement("button")
btn.textContent = "Click me!"

//add(set) an attributes on element
btn.setAttribute('class','selected'); 
console.log(btn)


//add the button to the DOM
const body = document.querySelector('body')
body.appendChild(btn)
console.log(body)


// Set the new element's content to the value of the text property
// btn.textContent = element.text

//get an attribute from an element
const att = getTitle.getAttribute('id');
console.log(att);

//check if an element contains an attribute
console.log(getTitle.hasAttribute('class'));


