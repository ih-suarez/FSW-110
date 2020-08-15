// Initial h1


var newH1 = document.createElement('h1');
    newH1.textContent = 'Hello World';
    document.body.append(newH1);


// for loop of h1


for(var i = 0; i < 10; i++){
    var newH1 = document.createElement('h1');
    newH1.textContent = 'Hello World';
    document.body.append(newH1);
    newH1.style.color = 'tomato';
}


// array


var names = [
    'Steve', 
    'Larry', 
    'Joe', 
    'Shirley', 
    'Steph', 
    'Nate', 
    'Rick', 
    'Emily' 
]


// unorganized list of names


var listOfNames = document.createElement('ul');
    document.body.append(listOfNames);


// list content

    
for(var i = 0; i < names.length; i++){
    var newLi = document.createElement('li');
    newLi.textContent = names[i];
    listOfNames.appendChild(newLi);
}