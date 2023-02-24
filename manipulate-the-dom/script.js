let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  const mainTitle = document.getElementById('#main-title');

  // Part 2
  const body = document.querySelector('body');
  body.style.backgroundColor = "#aedfff"

  // Part 3
  const favLi = document.querySelector('#favorite-things');
  favLi.lastElementChild.remove();
  console.log(favLi)

  // Part 4
  const specialTitle = document.querySelectorAll('.special-title');
  specialTitle.forEach(ele =>{
    ele.style.fontSize = '2rem';
  })

  // Part 5
  const pastRace = document.querySelector('#past-races') //can use childNode for pastRace.childNode
  const pastRaceLi = document.querySelectorAll('#past-races > li');
  pastRaceLi.forEach(item =>{
    if(item.textContent === 'Chicago'){
        item.remove()
        console.log(item);
    }
  })
  console.log(pastRace)
  
  // Part 6
  const li = document.createElement('li')
  li.textContent = "Pittsburgh"
  pastRace.appendChild(li);
  console.log(pastRace)

  // Part 7
  const div = document.createElement('div');
  div.classList.add('.blog-post')
  const h2 = document.createElement('h2')
  const p = document.createElement('p')
  h2.textContent = "Blog Post"
  p.textContent = "Create a new .blog-postcorresponding to the new city added in Part 6"
  div.appendChild(h2)
  div.appendChild(p)

  body.appendChild(div)
  console.log(div)

  // Part 8
  const quoteTitle = document.querySelector("#quote-title")
  quoteTitle.addEventListener('click', randomQuote)
  
  // Part 9
  const blogPost = document.querySelectorAll('.blog-post');
  
  blogPost.forEach(ele =>{

    ele.addEventListener("mouseout", function(event){
      console.log('mouseout');
      event.target.classList.toggle('purple') 
      
    })

    ele.addEventListener("mouseenter", function(event){
      console.log('mouseenter');
      event.target.classList.toggle('red')
    })
    console.log(ele)

  })

  console.log(blogPost)


});
