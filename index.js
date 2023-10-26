// import "./styles.css";

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

// part one 

const mainEl = document.querySelector("main") ;
mainEl.style.height = "100vh"

const h1Element = document.createElement("h1")
h1Element.textContent = "DOM Manipulation";


// join the h1 to the content 

mainEl.appendChild(h1Element);
h1Element.style.color = "teal";
mainEl.style.backgroundColor= "#4E4E4D";
console.log("hello world")
mainEl.classList.add("flex-ctr");
// part two 


const topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor ="#0e9aa7";
topMenuEl.classList.add('flex-around');
topMenuEl.querySelectorAll('a');


// topMenuEl.classList.add("flex-around")



menuLinks.forEach(link =>  {
    const anchorTag = document.createElement("a");
    anchorTag.href = link.href;
    anchorTag.textContent = link.text;
    topMenuEl.appendChild(anchorTag);
});


const subMenuEl = document.getElementById("sub-menu")
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = " var(--top-menu-bg)";
subMenuEl.classList.add('flex-around')


const topMenuLinks = topMenuEl.querySelectorAll('a');
topMenuEl.addEventListener('click', function (Event) {
    Event.preventDefault();
})

if (Event.target && Event.target.tagName) {
     console.log(Event.target.textContent);
}
 if (Event.target.tagName === 'A') {
const clickedLink = Event.target;
 }

 const isActive = clickedLink.classList.contain('active');

 topMenuLinks.forEach(like => link.classList.remove('active'));

 if(!isActive) {
  clickedLink.classList.add('active');
  
 }
