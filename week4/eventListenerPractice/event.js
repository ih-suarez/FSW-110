var siteH1 = document.createElement('h1');
    siteH1.textContent = 'Welcome to my site. Here is my box.'
    document.body.append(siteH1);

var box = document.createElement('div');
    document.body.append(box);

document.querySelector('div').classList.add('box');


// Event Listener For Hover


var selectingClass = document.querySelector('.box');
    
selectingClass.addEventListener('mouseover', function() {
        selectingClass.style.backgroundColor = 'blue';
});


// Event Listener For Click Hold


selectingClass.addEventListener('mousedown', function(){
    selectingClass.style.backgroundColor = 'red';
});


// Event Listener For Letting Click Go


selectingClass.addEventListener('mouseup', function(){
    selectingClass.style.backgroundColor = 'yellow';
})


// Event Listener For Double Click


selectingClass.addEventListener('dblclick', function(){
    selectingClass.style.backgroundColor = 'green';
});


// Event Listener For Scroll


window.onscroll = function(event){
    selectingClass.style.backgroundColor = 'orange'
};


// Key strokes 


document.onkeyup = function() {
    var keyCode = window.event ? window.event.keyCode : event.which;
    changeColor(keyCode);
}

function changeColor(keyCode) {
    if (keyCode == 66 ) { 
        selectingClass.style.background = 'blue';
    } else if (keyCode == 82 ) { 
       selectingClass.style.background = 'red';
    } else if (keyCode == 89) {
        selectingClass.style.backgroundColor = 'yellow'
    } else if (keyCode == 71) {
        selectingClass.style.backgroundColor = 'green'
    } else if (keyCode == 79){
        selectingClass.style.backgroundColor = 'orange'
    } else {
        console.log('Error')
    }
};
