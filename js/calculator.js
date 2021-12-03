"use sctrict";
function calc() {

    const calcInput = document.getElementById('calcInput').value;

    const oper = calcInput.replace(/\d/g, '');




    const calcArray = calcInput.split(oper);
    const item0 = parseFloat(calcArray[0]);
    const item1 = parseFloat(calcArray[1]);


    switch(oper) {
        case '+':
            calcResponse = item0 + item1;
            break;
        case '-':
            calcResponse = item0 - item1;
            break;
        case '*':
            calcResponse = item0 * item1;
            break;
        case '/':
            calcResponse = item0 / item1;
            break;
    }

    
    console.log(calcResponse);


var a = document.getElementById("calcResponse");
    a.innerText = calcResponse;


}





