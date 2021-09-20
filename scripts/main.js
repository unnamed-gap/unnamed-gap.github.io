var myImage = document.querySelector('img');

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1.jpg') {
      myImage.setAttribute ('src','images/2.png');
    } else {
      myImage.setAttribute ('src','images/1.jpg');
    }
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  alert('Здарова, заебал, ' + myName);
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  alert('Здарова, заебал, ' + myName);
}

myButton.onclick = function() {
  setUserName();
}