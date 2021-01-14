let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/wicked.jpg') {
        myImage.setAttribute('src', 'images/prep.jpg');
    } else {
        myImage.setAttribute('src', 'images/wicked.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name:');
	if (!myName) {
		setUerName();
		} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'shainabank.com\nwelcomes you,\n' + myName + '!';
		}
	}

if (!localStorage.getItem('name')) {
	setUserName();
	} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'shainabank.com\nwelcomes you back,\n' + storedName + '!';
	}

myButton.onclick = function() { 
	setUserName(); 
	}
