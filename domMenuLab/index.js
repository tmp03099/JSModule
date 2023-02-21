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
const topMenuEl = document.getElementById('top-menu');

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
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
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

console.log(menuLinks)