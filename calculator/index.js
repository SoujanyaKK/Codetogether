//"use strict";
var input = document.getElementById("input"),                   // ip/op button
number = document.querySelectorAll(".numbers div"),             //number buttons
operator = document.querySelectorAll(".operators div"),         //operator buttons
result = document.getElementById("result"),                     //equal button
clear = document.getElementById("clear"),                        //clear button
resultDisplayed = false;                                          //flag for what op is displayed

//adding click handlers to num buttons
for(var i=0;i<number.length;i++){
    number[i].addEventListener("click",function(e)
    {
        var currentString = input.innerHTML;        //stroing curr ip str & its last char in vars
        var lastChar = currentString[currentString.length-1];

        if(resultDisplayed === false){                  //if res not displayed keeps adding
            input.innerHTML += e.target.innerHTML;
        } else if (
            (resultDisplayed === true && lastChar === "+" )|| 
            lastChar === "-" || 
            lastChar === "*" || 
            lastChar === "/"                        //is res displayed and user pressed oprtn
            ){
                resultDisplayed = false;
                input.innerHTML += e.target.innerHTML;
        } else{
            resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += e.target.innerHTML;
        }
    });
}

//addind click handlers to num buttons
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener("click",function(e)
    {
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];


        if(
            lastChar === "+" ||
            lastChar === "-" || 
            lastChar === "*" ||
            lastChar === "/")
        {
            var newString = currentString.substring(0,currentString.length-1) + e.target.innerHTML;
            input.innerHTML = newString;
        } else if (currentString.length == 0){
            console.log("enter a number first");    //if the first key pressed is oprt
        }else {
            input.innerHTML += e.target.innerHTML;      //just add the oprt pressed to the input
        }
    });
}

//on click of equal button
result.addEventListener("click",function(){
    var inputString = input.innerHTML;          //this is str we will be processing
    var numbers = inputString.split(/\+|\-|\*|\//g);        //forming an array of numbers
    var operators = inputString.replace(/[0-9]|\./g,"").split("");          //forming an array of operators
    console.log(inputString);
    console.log(operators);
    console.log(numbers);
    console.log("---------------------");

    //looping through array and doing one oprtn at a time
    
    var divide = operators.indexOf("/");
    while(divide!= -1){
        numbers.splice(divide,2,numbers[divide] / numbers[divide+1]);
        operators.splice(divide,1);
        divide = operators.indexOf("/");
    }

    var multiply = operators.indexOf("*");
    while(multiply!=-1){
        numbers.splice(multiply,2,numbers[multiply]*numbers[multiply+1]);
        operators.splice(multiply,1);
        multiply = operators.indexOf("*");
    }

    var subtract = operators.indexOf("-");
    while(subtract!=-1){
        numbers.splice(subtract,2,numbers[subtract]- numbers[subtract+1]);
        operators.splice(subtract,1);
        subtract = operators.indexOf("-");
    }

    var add = operators.indexOf("+");
    while(add!=-1){
        numbers.splice(add,2,parseFloat(numbers[add]) + parseFloat(numbers[add+1]));    //using parsefloat is necc, otherwise it will resultin str concatenation
        operators.splice(add,1);
       add = operators.indexOf("+");
    }

        input.innerHTML = numbers[0];   //displaying op
        resultDisplayed = true;       //turning flag if result displayed
});


//clearing the ip on press of clear
clear.addEventListener("click",function(){
    input.innerHTML = "";
})
