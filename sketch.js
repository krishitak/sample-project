
//Prompt will create a dialogue box as soon as the web page starts.
var a = prompt('Enter the first variable: ');

var b = prompt('Enter the second variable: ');

function setup(){
  var b1 = createButton("click here to Add");
  var b2 = createButton("click here to Subtract");
  var b3 = createButton("click here to Divide");
  var b4 = createButton("click here to Multiply");
  b1.mousePressed(add);
  b2.mousePressed(subtract);
  b3.mousePressed(divide);
  b4.mousePressed(multiply);

  }


function draw()

{
}

//Below will create a function multiply, and the body is between the curly braces.
function multiply() {
  var c = a*b; 
  console.log("answer="+c);
//above line will print on the browser console the output of your multiplication and we have written a plus sign to combine our english and variables
// this operation of adding plus is known as contatenation
}
//Below will create a function divide, and the body is between the curly braces.
function divide() {
  var c = a/b; 
  console.log("answer="+c);
  //above line will print on the browser console the output of your division and we have written a plus sign to combine our english and variables
// this operation of adding plus is known as contatenation
}
//Below will create a function add, and the body is between the curly braces.
function add() {
  var c = a+b;
  console.log("answer="+c); 
  //above line will print on the browser console the output of your addition and we have written a plus sign to combine our english and variables
// this operation of adding plus is known as contatenation
}
//Below will create a function subtract, and the body is between the curly braces.
function subtract() {
  var c = a-b;
  console.log("answer="+c);
  //above line will print on the browser console the output of your subtraction and we have written a plus sign to combine our english and variables
// this operation of adding plus is known as contatenation
}


