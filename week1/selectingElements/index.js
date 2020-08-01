// Practice
var sElement = document.getElementById('sElement');
    console.log(sElement);
    console.dir(sElement);

// Selecting Elements

let h1Element = document.getElementById('sElement');
    h1Element.innerHTML += 'This is Selecting Elements';

// Append  Child

let appElement = document.createElement('h1');
    appElement.id = 'sElement';
    appElement.textContent = 'Append Child';
    document.body.appendChild(appElement);