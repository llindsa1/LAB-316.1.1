/* 
Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
    ];
*/

//Part 1

let mainEl = document.querySelector('main')

mainEl.style.backgroundColor = 'var(--main-bg)'

mainEl.innerHTML = `<h1>DOM Manipulation</h1>`

mainEl.classList.add(`flex-ctr`)

/* Part 2

Next, create a blank menu bar that we can use to later add some interactivity to the page:
Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
Set the height of the topMenuEl element to be 100%.
Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
Add a class of flex-around to topMenuEl. */

let topMenuEl= document.getElementById (`top-menu`)

topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = `var(--top-menu-bg)`

topMenuEl.classList.add(`flex-around`);


//Part 3:

menuLinks.forEach((link) => {
    // Create an <a> element - .createElement()
    let newLink = document.createElement(`a`);
    // On the new element, add an href attribute with its value set to the href property of the "link" object.
    newLink.setAttribute(`href`, link.href);
  
    // Set the new element's content to the value of the text property of the "link" object.
    newLink.textContent = link.text;
     console.log(newLink)
    // Append the new element to the topMenuEl element.
    topMenuEl.appendChild(newLink)
  });
