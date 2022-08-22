// // // const title = document.querySelector("#main-heading");

// // // title.style.color = "red";

// // // console.log(title);

// // // const listItems = document.querySelectorAll(".list-items");

// // // for (i = 0; i < listItems.length; i++) {
// // //   listItems[i].style.fontSize = "2rem";
// // // }

// // // console.log(listItems);

// // // Creating Element

// // const ul = document.querySelector("ul");
// // const li = document.querySelector("li");

// // // Adding Elements

// // ul.append(li)

// // // Modifying the text

// // // const firstListItem = document.querySelector('.list-items');

// // // console.log (firstListItem.innerText);
// // // console.log (firstListItem.textContent);
// // // console.log (firstListItem.innerHTML);

// // li.innerText = 'x-men';

// // // Modifying Attributes & classes

// // li.classList.remove('list-items')

// // console.log(li.classList.contains('list-items'));

// // // Remove Elements

// // li.remove();

// // traverse the DOM

// // Parent Node Traversal

// let ul = document.querySelector("ul");

// // console.log(ul.parentNode.parentNode);
// // console.log(ul.parentElement.parentElement);

// const html = document.documentElement;

// console.log(html.parentNode);
// console.log(html.parentElement)

// Child Node Traversal

// let ul = document.querySelector('ul');

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = 'blue'

// console.log (ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// Sibling  Traversal

let ul = document.querySelector("ul");
const div = document.querySelector("div");

console.log(ul.previousElementSibling);
console.log(ul.nextSibling);
