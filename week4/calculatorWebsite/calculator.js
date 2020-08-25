/*
    Functions for Math Calculations
*/
function adding(number1, number2){
    return 'Calculating Addition: ' + (number1 + number2);
};
function subtracting(number1, number2){
    return 'Calculating Subtraction: ' + (number1 - number2);
};
function multiplying(number1, number2){
    return 'Calculating Multiplication: ' + (number1 * number2);
};
/*
    Heading
*/
var siteheader = document.createElement('h1');
    siteheader.textContent = 'Welcome To My Simple Calculator!';
    siteheader.style.textAlign = 'center'
    document.body.append(siteheader);
/*
    Addition
*/
    // Box
    var div1 = document.createElement('div');
        document.body.append(div1);
        div1.style.backgroundColor = 'tomato';
        div1.classList.add('boxes');
        div1.setAttribute('id', 'addition');
        div1.classList.add('boxes');
    // Heading
    var div1Header = document.createElement('h5');
        div1Header.textContent = 'Addition';
        div1Header.style.textAlign = 'center'
        document.getElementById('addition').appendChild(div1Header);
        div1Header.setAttribute('id', 'addHead1');
    // Result
    var div1Result = document.createElement('p');
        div1Result.style.textAlign = 'center';
        div1Result.textContent = '0';
        div1Result.id = 'resultOfAdd';
        div1.appendChild(div1Result)
    // Input #1
    var div1Input1 = document.createElement('input');
        div1Input1.style.width = '130px';
        div1Input1.style.margin = '0 auto';
        div1Input1.style.display = 'block';
        div1Input1.setAttribute('id', 'additionNum1');
        div1Input1.setAttribute('type', 'text');
        div1Input1.setAttribute('placeholder', 'First Number');
        div1.appendChild(div1Input1);
    // Input #2
    var div1Input2 = document.createElement('input')
        div1Input2.style.width = '130px';
        div1Input2.style.margin = '0 auto';
        div1Input2.style.display = 'block';
        div1Input2.setAttribute('id', 'additionNum2');
        div1Input2.setAttribute('type', 'text');
        div1Input2.setAttribute('placeholder', 'Second Number');
        div1.appendChild(div1Input2);
    // Addition Button
    var div1Button = document.createElement('button');
        div1Button.textContent = 'Calculate';
        div1Button.style.display = 'block'
        div1Button.style.marginLeft = 'auto';
        div1Button.style.marginRight = 'auto';
        div1Button.setAttribute('id', 'additionButton');
        div1.appendChild(div1Button);
    // Addition Event Listener
        document.getElementById('additionButton').addEventListener('mousedown', function(){
            document.getElementById('resultOfAdd').textContent =
                adding(parseInt(document.getElementById('additionNum1').value), parseInt(document.getElementById('additionNum2').value));
        });
/*
    Subtraction
*/
   // Box
   var div2 = document.createElement('div');
   document.body.append(div2);
   div2.style.backgroundColor = 'lightblue';
   div2.classList.add('boxes');
   div2.setAttribute('id', 'subtraction');
   div2.classList.add('boxes');
   // Heading
   var div2Header = document.createElement('h5');
       div2Header.textContent = 'Subtraction';
       div2Header.style.textAlign = 'center'
       document.getElementById('subtraction').appendChild(div2Header);
       div2Header.setAttribute('id', 'subHead1');
   // Result
   var div2Result = document.createElement('p');
       div2Result.style.textAlign = 'center';
       div2Result.textContent = '0';
       div2Result.id = 'resultOfSub';
       div2.appendChild(div2Result)
   // Input #1
   var div2Input1 = document.createElement('input');
       div2Input1.style.width = '130px';
       div2Input1.style.margin = '0 auto';
       div2Input1.style.display = 'block';
       div2Input1.setAttribute('id', 'subtractionNum1');
       div2Input1.setAttribute('type', 'text');
       div2Input1.setAttribute('placeholder', 'First Number');
       div2.appendChild(div2Input1);
   // Input #2
   var div2Input2 = document.createElement('input')
       div2Input2.style.width = '130px';
       div2Input2.style.margin = '0 auto';
       div2Input2.style.display = 'block';
       div2Input2.setAttribute('id', 'subtractionNum2');
       div2Input2.setAttribute('type', 'text');
       div2Input2.setAttribute('placeholder', 'Second Number');
       div2.appendChild(div2Input2);
   // Addition Button
   var div2Button = document.createElement('button');
       div2Button.textContent = 'Calculate';
       div2Button.style.display = 'block';
       div2Button.style.marginLeft = 'auto';
       div2Button.style.marginRight = 'auto';
       div2Button.setAttribute('id', 'subtractionButton');
       div2.appendChild(div2Button);
   // Addition Event Listener
       document.getElementById('subtractionButton').addEventListener('mousedown', function(){
           document.getElementById('resultOfSub').textContent =
               subtracting(parseInt(document.getElementById('subtractionNum1').value), parseInt(document.getElementById('subtractionNum2').value));
       });


/*
    Multiplication
*/

   // Box
   var div3 = document.createElement('div');
   document.body.append(div3);
   div3.style.backgroundColor = 'yellow';
   div3.classList.add('boxes');
   div3.setAttribute('id', 'multiplication');
   div3.classList.add('boxes');
   // Heading
   var div3Header = document.createElement('h5');
       div3Header.textContent = 'Multiplication';
       div3Header.style.textAlign = 'center'
       document.getElementById('multiplication').appendChild(div3Header);
       div3Header.setAttribute('id', 'mulHead1');
   // Result
   var div3Result = document.createElement('p');
       div3Result.style.textAlign = 'center';
       div3Result.textContent = '0';
       div3Result.id = 'resultOfMul';
       div3.appendChild(div3Result)
   // Input #1
   var div3Input1 = document.createElement('input');
       div3Input1.style.width = '130px';
       div3Input1.style.margin = '0 auto';
       div3Input1.style.display = 'block';
       div3Input1.setAttribute('id', 'multiplicationNum1');
       div3Input1.setAttribute('type', 'text');
       div3Input1.setAttribute('placeholder', 'First Number');
       div3.appendChild(div3Input1);
   // Input #2
   var div3Input2 = document.createElement('input')
       div3Input2.style.width = '130px';
       div3Input2.style.margin = '0 auto';
       div3Input2.style.display = 'block'
       div3Input2.setAttribute('id', 'multiplicationNum2');
       div3Input2.setAttribute('type', 'text');
       div3Input2.setAttribute('placeholder', 'Second Number');
       div3.appendChild(div3Input2);
   // Addition Button
   var div3Button = document.createElement('button');
       div3Button.textContent = 'Calculate';
       div3Button.style.display = 'block'
       div3Button.style.marginLeft = 'auto';
       div3Button.style.marginRight = 'auto';
       div3Button.setAttribute('id', 'multiplicationButton');
       div3.appendChild(div3Button);
   // Addition Event Listener
       document.getElementById('multiplicationButton').addEventListener('mousedown', function(){
           document.getElementById('resultOfMul').textContent =
               multiplying(parseInt(document.getElementById('multiplicationNum1').value), parseInt(document.getElementById('multiplicationNum2').value));
       });