//  h2 list


var arrayList = [
    'Ismael',
    'Ashley',
    'John',
    'Jess'
]



var list = document.createElement('ul');
    document.body.append(list);

var listNames = document.createElement('li');
    listNames.textContent = h2;


for(var i = 0; i < arrayList.length; i++){
    var listNames = document.createElement('li');
    list.appendChild(listNames);
    var h2 = document.createElement('h2')
    h2.textContent = arrayList[i]
    listNames.appendChild(h2)
    h2.style.fontSize = '20px'
    h2.style.fontWeight = 'lighter'
    h2.style.fontFamily = 'sans-serif'
    h2.style.color = 'cornflowerblue'
};



// adding Class name

    
document.querySelector('ul').classList.add('border');