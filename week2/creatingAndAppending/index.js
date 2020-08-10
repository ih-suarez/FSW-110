
    // Header 


var siteHeader = document.createElement('h1');
siteHeader.textContent = 'Welcome to my JS site';
document.body.append(siteHeader);


    // Paragraph


var sitePa = document.createElement('p');
sitePa.textContent = 'All this was created with Javascript';
document.body.append(sitePa);


    // Ordered list


var siteOl = document.createElement('ol');
siteOl.textContent = 'List'
document.body.append(siteOl);

var li1 = document.createElement('li');
li1.textContent = 'Hello';

var li2 = document.createElement('li');
li2.textContent = 'Big';

var li3 = document.createElement('li');
li3.textContent = 'World';


siteOl.innerHTML += li1.outerHTML + li2.outerHTML + li3.outerHTML;

/*
document.body.append(li1);
document.body.append(li2);
document.body.append(li3);
*/