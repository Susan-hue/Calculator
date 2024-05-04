// const display = document.querySelector(".display");
// const buttons = document.querySelectorAll("button");
// const specialChars = ["%", "*", "/", "-", "+", "="];
// let output ="";

// const calculate = (btnValue) =>{
//     if(btnValue === "=" && output !== ""){
//         output = eval(output.replace("%", "/100"));
//     }else if(btnValue === "AC"){
//        output = "" 
//     }else if (btnValue === "DEL"){
//         output = output.toString().slice(0, -1);  
//     } else{
//         if (output ="" && specialChars.includes(btnValue)) return;
//         output += btnValue;
//     }
//     display.value = output;

// }

// buttons.forEach((button) => {
// button.addEventListener("click", (e) => calculate(e.target.dataset.value));
// });  

const display = document.querySelector(".display"); // Use # to select by ID
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        output = eval(output.replace("%", "/100")); // Replace % with /100 before evaluation
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1); // Use slice instead of toString().slice
    } else {
        if (output === "" && specialChars.includes(btnValue)) return; // Correct comparison operator
        output += btnValue;
    }
    display.value = output;
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
