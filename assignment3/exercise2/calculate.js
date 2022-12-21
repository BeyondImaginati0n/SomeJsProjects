'use strict';
const thicknessInputs = document.querySelectorAll("input[name='thickness']");
const widthInput = document.querySelector('#width');
const heightInput = document.querySelector('#height');
const colorInput = document.querySelector('#color');
const form=document.querySelector('form');
const priceInput=document.querySelector('#price');
function sicknessCalculating() {
    for (let elem of thicknessInputs) {
        if (elem.checked) {
            return elem.value;
        }
    }
    return 0;
}

function grayChecker(color) {
    return (parseInt(color.substr(1, 2), 16) == parseInt(color.substr(3, 2), 16)) && (parseInt(color.substr(5, 2), 16) == parseInt(color.substr(3, 2), 16));
}

function priceCalculator() {
    if (grayChecker(colorInput.value)) {
        return (widthInput.value * heightInput.value * (sicknessCalculating()/10)) / 100;
    }
    return (widthInput.value * heightInput.value * (sicknessCalculating()/10)) / 64;
}

function update(){
if(checkValidity()){
    priceInput.value=priceCalculator()+'$';
    return;
}
    priceInput.value='-';
}
function checkValidity(){
    if(!sicknessCalculating()){
        return false;
    }
    for(let input of allInputs){
        if(!input.value){
    return false;
        }    
}
return true;
}


const allInputs=[...thicknessInputs,widthInput,heightInput,colorInput];

update();

for(let input of allInputs){
    input.addEventListener('input',update);
}
