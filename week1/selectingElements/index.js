// Document

console.log(document);

// Practice

var sElement = document.getElementById('sElement');
    console.log(sElement);
    console.dir(sElement);
    

// Selecting Elements Id

let h1Element = document.getElementById('sElement');
    h1Element.innerHTML += 'This is Selecting Elements';
    console.log('Selecting Elements By Id')

// Append  Child

let appElement = document.createElement('h1');
    appElement.id = 'sElement';
    appElement.textContent = 'Appending Child';
    document.body.appendChild(appElement);
    console.log('Appending Child') 