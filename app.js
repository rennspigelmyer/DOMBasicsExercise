// 1
console.log(`Number 1`);
const portillos = document.getElementById(`portillos`);
console.dir(portillos);

// 2
console.log(`Number 2`);
const images = document.getElementsByTagName(`img`);
console.dir(images);

// 3
console.log(`Number 3`);
const centered = document.getElementsByClassName(`center`);
console.dir(`centered`);

// 4
console.log(`Number 4`);
const ginosEast = document.querySelector(`#ginos`);
console.dir(ginosEast);

// 5 
console.log(`Number 5`);
const pTags = document.querySelectorAll(`p`);
console.dir(`pTags`);

// 6a
console.log(`Number 6a`);
const h1 = document.getElementsByTagName(`h1`);
console.dir(`h1`);
// 6b 
console.log(`Number 6b`);
// console.log(h1.innerText);
h1.innerText = `Matt's Favorite Places To Eat In Sweet Home Chicago!`;

// 7a
console.log(`Number 7a`);
const others = document.querySelector(`#others`);
console.dir(`others`);
// 7b
others.innerHTML = `<h3>Other Favorites</h3>`;
// console.log(others.innerHTML);

// 8a 
const aTag = document.getElementsByTagName(`a`);
console.dir(`aTag`);
// 8b
aTag.href = `https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/`;

// 9 
h1.classList.add(`background`, `text-color`);

// 10 
h1.classList.remove(`background`);

// 11a 
const h4 = document.createElement(`h4`);
// console.dir(h4);
// 11b
h4.innerText = `CHICAGO: A great place to eat!`;
// 11c
const body = document.querySelector(`body`);
// body.innerText(`body`);
body.prepend(h4);


// 12a
const h5 = document.createElement(`h5`);
// 12b
h5.innerText = `See you in the Windy City Sometime!`;
// 12c
aTag.insertAdjacentElement(`afterend`, h5);

// 13
// const remove = document.querySelector(`li`);
// remove.classList.remove(`Jay's Beef`);
const remove = document.querySelector(`li`).remove();
links.remove();