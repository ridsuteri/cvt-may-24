// ____________ 1. capturing html elements _______ 

// 1. select the element
var h1 = document.getElementsByTagName('h1');
// 2. select by className
var title = document.getElementsByClassName('secondTitle');
// 3. select by id name
var uniqueTitle = document.getElementById('unique');

// 4. query selector
var querySelector = document.querySelector('input');
var querySelectorAll = document.querySelectorAll('.dummy-div p');
// console.log(querySelectorAll[1].textContent)
// console.log(querySelector.value)




// console.log(title)
// console.log(h1);
// console.log(uniqueTitle)


// 2. accessing value of elements

// i. innerHTML
// ii. innerText
// iii. textContent


// 3. creating & appending elements to html

var newH1 = document.createElement('h1');
newH1.innerText = 'Created using js';
document.body.appendChild(newH1)