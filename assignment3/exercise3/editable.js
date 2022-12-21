'use strict';
const form = document.createElement('form');
const selectBox = document.createElement('select');
const textInput = document.createElement('input');
const textarea = document.createElement('textarea');
const formButton = document.createElement('button');
const sectionsList = document.querySelectorAll('section');
textInput.type = 'text';
formButton.disabled = true;

form.append(selectBox);
form.append(textInput);
form.append(textarea);
form.append(formButton);
const lastSection = sectionsList[sectionsList.length - 1];
lastSection.after(form);
form.style.marginTop = '40px';
textarea.rows = 10;
let i=0;
    for (let section of sectionsList ) {
        const option = document.createElement('option');
        option.value = ++i;
        option.textContent = section.childNodes[1].textContent;
        selectBox.append(option);
    }
function optionsUpdate(value,newHeader){
    if(newHeader){
        selectBox.childNodes[value].textContent=newHeader;
        console.log(value);
    }else{
        selectBox.childNodes[value].textContent='Noname';
    }

}
        



const defaultOption = document.createElement('option');
defaultOption.value = '';
defaultOption.selected = true;
defaultOption.disabled = true;
defaultOption.textContent = "Choose  section";
selectBox.prepend(defaultOption);
selectBox.addEventListener('change', (e) => {
    
    formButton.disabled = false;
    const sectionListMassive = Array.from(sectionsList);
    const choosenSection = sectionListMassive[selectBox.value-1];
    textInput.value = choosenSection.childNodes[1].textContent;
    textarea.value = choosenSection.innerHTML;
    let savedValue=textInput.value;
    formButton.addEventListener('click', (e) => {
        e.preventDefault();
        const choosenSection = sectionListMassive[selectBox.value-1];
        choosenSection.innerHTML=textarea.value;
        if(savedValue==textInput.value){
            textInput.value = choosenSection.childNodes[1].textContent;
 
        }else{
            savedValue=textInput.value;
            choosenSection.childNodes[1].textContent=savedValue;
            textarea.value=choosenSection.innerHTML;
        }
        optionsUpdate(selectBox.value,textInput.value);
    });
});