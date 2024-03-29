const display = document.getElementById("display");
const buttons = document.getElementById("buttons");

buttons.addEventListener("click", (event) => {
  let target = event.target;
  if (target.innerHTML === "Clear") {
    display.value = "";
  } else if (target.classList.contains("number")) {
    display.value += target.innerHTML;
  } else if (target.classList.contains("operator")) {
    let lastChar = display.value[display.value.length - 1]; //last character of string
    if (["+", "-", "*", "/"].includes(lastChar)) {
      display.value = display.value.slice(0, -1) + target.innerHTML; //eliminates repeated operators
    } else {
      display.value += target.innerHTML;
    }
  } else if (target.innerHTML === "=") {
    if (display.value.length !== 0) {
      //handling unexpected syntax expressions
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Syntax Error!";
      }
    } else display.value = "";
  }
});

//we are adding key events to whole body
/*The keypress ignores keys such as delete, arrows, page up, page down, home, end, ctrl, alt, shift, esc, etc.*/

// document.body.addEventListener("keypress", (event) => {
//   let target = event.key; //key pressed
//   const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//   const operatorsArray = ["+", "-", "*", "/"];
//   if (target === "clear") {
//     display.value = "";
//   } else if (numbersArray.includes(target)) {
//     display.value += target;
//   } else if (operatorsArray.includes(target)) {
//     let lastChar = display.value[display.value.length - 1]; //last character of string
//     if (operatorsArray.includes(lastChar)) {
//       display.value = display.value.slice(0, -1) + target; //eliminates repeated operators
//     } else {
//       display.value += target;
//     }
//   } else if (target === "=") {
//     if (display.value.length !== 0) {
//       //handling unexpected syntax expressions
//       try {
//         display.value = eval(display.value);
//       } catch (error) {
//         display.value = "Syntax Error!";
//       }
//     } else display.value = "";
//   } else {
//     alert("Wrong key pressed!");
//   }
// });
