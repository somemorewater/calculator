const buttonInput = document.querySelector('button');
const clearScreen = document.querySelector('#clear');
const showInput = document.querySelector('#inputScreen');
const showOutput = document.querySelector('#outputScreen');


buttonInput.addEventListener("click", () => {
    console.log(buttonInput.value);
})