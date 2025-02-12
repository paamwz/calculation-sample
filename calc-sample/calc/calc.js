(() => {
const $doc = document;
const disp = $doc.getElementById("display");

const calc = (calcNum) => {
    console.log(calcNum);
    return result = eval(calcNum);
};

let inputNumber = [];

$doc.getElementById("calcButtons").addEventListener("click",(e) => {
    let pressed = e.target;    
    if(pressed.id === "="){
        const displayedNum = inputNumber.join("");
        calc(displayedNum);
        console.log("hello");
        console.log(result);
        $doc.getElementById("display").textContent = result;
    } else if(pressed.id === "C"){
        inputNumber.pop();
        $doc.getElementById("display").textContent = inputNumber.join("");
    } else {
        inputNumber.push(pressed.id);
        console.log(inputNumber);
        $doc.getElementById("display").textContent = inputNumber.join("");
    };
});


})();