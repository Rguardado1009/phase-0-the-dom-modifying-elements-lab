// Write your code here!
document.querySelector('main').remove();

var newHeader =document.createElement('h1') 
newHeader.id='victory';
const newContent = document.createTextNode('Ronald is the champion');

newHeader.appendChild(newContent);