    // Nav Bar


var nav = document.createElement('nav');
document.body.append(nav);

var a = document.createElement('a');
nav.appendChild(a);

// Home

var home = document.createElement('a');
var homeLink = document.createTextNode('Home');

a.appendChild(homeLink);
a.title = 'Home';
a.href = 'https://www.javascript.com/';
a.appendChild(homeLink);

// Sign Up

var signUp = document.createElement('a');
var signUpLink = document.createTextNode('Sign Up');

signUp.appendChild(signUpLink);
signUp.title = 'Sign Up';
signUp.href = 'https://en.wikipedia.org/wiki/HTML#:~:text=Hypertext%20Markup%20Language%20(HTML)%20is,scripting%20languages%20such%20as%20JavaScript.';
signUp.appendChild(signUpLink);
nav.appendChild(signUp);

// About

var about = document.createElement('a');
var aboutLink = document.createTextNode('About');

about.appendChild(aboutLink);
about.tittle = 'About'
about.href = 'https://www.nasa.gov/';
about.appendChild(aboutLink);
nav.appendChild(about)

//nav.innerHTML += homeLink.outerHTML + signUpLink.outerHTML + aboutLink.outerHTML;

    // H1 tag


var siteH1 = document.createElement('h1');
siteH1.textContent = 'Basic Website';
document.body.append(siteH1);


    // Paragraph


var sitePara = document.createElement('p');
sitePara.textContent = 'Practice makes perfect';
document.body.append(sitePara);


    // List

    // List Header

var siteList = document.createElement('ol');
siteList.textContent = 'Coding Languages Learned';
document.body.append(siteList);

    //List Items

var item1 = document.createElement('li');
item1.textContent = 'Javascript';

var item2 = document.createElement('li');
item2.textContent = 'HTML';

var item3 = document.createElement('li');
item3.textContent = 'CSS';


siteList.innerHTML += item1.outerHTML + item2.outerHTML + item3.outerHTML;


    // Footer


var foot = document.createElement('footer');
document.body.append(foot);

    // Foot Contenet

var footContent = document.createElement('h6');
footContent.textContent = 'All Rights Reserved';


foot.innerHTML += footContent.outerHTML;