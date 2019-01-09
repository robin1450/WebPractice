/**
 * 
 */

var myImage = document.querySelector('#ok');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/ok.jpg') {
        myImage.setAttribute('src', 'images/which.png');
    } else {
        myImage.setAttribute('src', 'images/ok.jpg');
    }
};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to my Garden, ' + myName;
}


if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Welcome to my Garden, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
};