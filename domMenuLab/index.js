// Select and cache the <main>element in a variable named mainEl.
const mainEl = document.querySelector('main');

// Set the background color of mainElto the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg)';

//Set the content of mainEl
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"

//Add a class of flex-ctr
mainEl.classList.add('flex-ctr');


// ? Task 2
// Select and cache the <nav id="top-menu">element in a variable named topMenuEl
const topMenuEl = document.querySelector('#top-menu');

// Set the height topMenuElelement to be 100%.
topMenuEl.style.height = '100%';

// Set the background color of topMenuElto the value stored in the --top-menu-bg
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

// Add a class of flex-aroundto topMenuEl.
topMenuEl.classList.add('flex-around');


// ? Task 3
// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];


menuLinks.forEach((element) =>{

    //create an <a> element
    const a  = document.createElement('a') 
    
    // add an href attribute with its value set to the href property
    a.setAttribute('href', element.href);
    console.log(a);

    // Set the new element's content to the value of the text property
    a.textContent = element.text

    //Append the new element to the topMenuElelement.
    topMenuEl.appendChild(a);
    // console.log(topMenuEl)
    
});

console.log(mainEl)
console.log(topMenuEl)


// ? Task 4.0
// Select and cache the <nav id="sub-menu">
const subMenuEl = document.querySelector('#sub-menu');

// Set the height subMenu Elelement to be 100%
subMenuEl.style.height = "100%";

// Set the background color
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

//Add flex-around
subMenuEl.classList.add('flex-around');

// Set the position absolute
subMenuEl.style.position = 'absolute';

// Set top property value 0
subMenuEl.style.top = '0';


// ? Task 5.0
const topMenuLinks = document.querySelectorAll('a');

//Declare a global showingSubMenu
let showingSubMenu = false;

//Task 5.2
//Attach a delegated 'click' event listener to topMenuEl
topMenuEl.addEventListener('click', function(event){

    //call preventDefault() method to preven default action for ele
    event.preventDefault();

    //show all the event that occurs when clicked
    console.log(event);

    // ! event.target is the clicked element and use when clicked element
    // * immediately return if the element clicked was not an <a> element 
    // use tagName to get <a> 
    if (event.target.tagName !== "A"){
        return
    }


    //? How to know it is <a> tag when it run to Task 5.3 (answer //*)
    //Task 5.3
    //Remove the active class from the clicked <a> element 
    // ! event.taget.tagName: is clicked <a> element (check tagName to know which element)
    if(event.target.classList.contains('active')){
        event.target.classList.remove('active');

        //set the showingSubMenu
        showingSubMenu = false;

        //Set css top property
        subMenuEl.style.top = '0';
        return;
    }

    
    //Task 5.4
    //remove a class name of active from each <a> element
    topMenuLinks.forEach(item =>{
        item.classList.remove('active');
        console.log(item.classList);
    })

    //add a class name of active to the <a> element that was clicked.
    event.target.classList.add('active');
    console.log(event.target)

    //Task 5.6
    // Set showingSubMenu to true if the clicked <a> element's 
    // "link" object within menuLinkshas a subLinks property 
    


})











