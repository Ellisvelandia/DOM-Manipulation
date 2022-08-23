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

let ul = document.querySelector("ul");

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

ul.childNodes[7].style.backgroundColor = "blue";

// console.log (ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// Sibling  Traversal

// let ul = document.querySelector("ul");
// const div = document.querySelector("div");

// console.log(div.childNodes)

// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

// Event Listener

// element.addEventListener("click", function)

const buttonTwo = document.querySelector(".btn-2");

function alertBtn() {
  alert("I also love javascript");
}

buttonTwo.addEventListener("click", alertBtn);

// Mouseover

const newBackgroundColor = document.querySelector(".box-3");

function changeBgColor() {
  newBackgroundColor.style.backgroundColor = "blue";
}

newBackgroundColor.addEventListener("mouseover", changeBgColor);

//Real Event

const revealBtn = document.querySelector(".reveal-btn");

const hiddenContent = document.querySelector(".hidden-content");

function revealContent() {
  if (hiddenContent.classList.contains("reveal-btn")) {
    hiddenContent.classList.remove("reveal-btn");
  } else {
    hiddenContent.classList.add("reveal-btn");
  }
}

revealBtn.addEventListener("click", revealContent);

// event propagation

window.addEventListener(
  "click",
  function () {
    console.log("window");
  },
  true
);

document.addEventListener(
  "click",
  function () {
    console.log("document");
  },
  true
);

document.querySelector(".div2").addEventListener(
  "click",
  function () {
    console.log("DIV 2");
  },
  true
);

document.querySelector(".div1").addEventListener(
  "click",
  function () {
    console.log("DIV 1");
  },
  true
);

document.querySelector("button").addEventListener(
  "click",
  function (e) {
    console.log(e.target.innerText = 'clicked!');
  },
  true
);
