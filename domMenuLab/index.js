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


// ? Task 2
// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
];

menuLinks.forEach((element, idx) =>{
    element.innerHTML = "<a></a>"; //create an <a> element
    element.innerHTML = ""


});

console.dir(menuLinks)