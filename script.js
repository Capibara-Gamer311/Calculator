// step 1: HTML elements ko select kar rahe hai
const currDisplay = document.querySelector(".curr-display") // current number display
const prevDisplay = document.querySelector(".pre-display") // previous number display
const numbers = document.querySelectorAll(".number") // saare button numbers
const operands = document.querySelectorAll(".operation") // + - * / Buttons
const clearBtn = document.querySelector(".clear") // clear button
const delBtn = document.querySelector(".delete") // delete button
const equalBtn = document.querySelector(".equal") // equal button

let operation; // current operation store carega (+, -, *, /)

// step 2: Number ko display par add karne ka function
function appendNumber(number){
    // agar alrready decimal hai aur dubar "." press hua to innore karo
    if(number === "." && currDisplay.innerText.includes(".")) return;

    // number ko displai mai add karo
    currDisplay.innerText += number;
}

// step 3: operation choose karne ka function (+, -, *, /)
function chooseOperation(operand){
    // agar current display empty hai to kuch mat karo
    if(currDisplay.innerText === "") return;

    // pahle se koi calculation pending hai to compute karo
    compute(operand);

    // current operation store karo
    operation = operand;

    // dispaly me operation symbol add karo
    currDisplay.innerText +=operand;

    // previous display mai pura value dikhao
    prevDisplay.innerText = currDisplay.innerText;

    // current dispaly clear karo next number ke liye
    currDisplay.innerText = "";
}

// step 4: display clear karne ka function
function clearDisplay(){
    currDisplay.innerText = ""; // current clear
    prevDisplay.innerText = ""; // previous clear
}

// step 5: calculation karne ka main function
function compute(operand){
    let result;

    // previous aur current values ko number mai convert karo
    const previousValue = parseFloat(prevDisplay.innerText);
    const currentValue = parseFloat(currDisplay.innerText);

    // agar valid number nahi hai to return
    if(isNaN(previousValue) || isNaN(currentValue)) return;

    // operation ke according calculation karo
    switch(operation){
        case "+":
            result = previousValue + currentValue;
            break;
        case "-":
            result = previousValue - currentValue
            break;
        case "*":
            result = previousValue * currentValue
            break;
        case "/":
            result = previousValue / currentValue
            break;
        default:
            return;
    }

    // result ko dispplay mai show karo
    currDisplay.innerText = result;

}

// step 6: har number button par click event lagana
numbers.forEach((number)=>{
    number.addEventListener("click",()=>{
        appendNumber(number.innerText); // number display mai bhejo
    });
});

// step 7: har operation button par click event lagana
operands.forEach((operand)=>{
    operand.addEventListener("click", ()=>{
        chooseOperation(operand.innerText); // operation select karo
    });
});

// setp 8: claer button ka event
clearBtn.addEventListener("click",()=>{
    clearDisplay(); // display clear karo
})

// step 9: equal button par event
equalBtn.addEventListener("click", ()=>{
    compute();// calculation karo
    prevDisplay.innerText = "";
})

// Final step 10: delete button par event

delBtn.addEventListener("click", ()=>{
    currDisplay.innerText = currDisplay.innerText.slice(0, -1);
});