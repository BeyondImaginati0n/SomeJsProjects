'use strict';
const puzzleTarget=document.querySelector('#puzzleTarget');
const puzzleSource=document.querySelector('#puzzleSource');

let choosenIMg=null;

const imgesRelativeColors=[];
for(let img of puzzleSource.children){
imgesRelativeColors.push(img.style.backgroundColor);
}

function  gameFinished(){
    for(let cell of puzzleTarget.children){
        if(!cell.style.backgroundImage){
            return false;
        }
    }
    return true;
}

function checkResult(){
    let winn=true;
    for(let cell of puzzleTarget.children){
    if(cell.style.background.slice(5,14)!=cell.attributes['data-result'].nodeValue){
winn=false;
    }
   
    }
    
    for(let img of puzzleSource.children){
img.style.display='inline';
img.style.position='relative';
img.style.left='';
img.style.top='';
    }
    let i=0;
    for(let cell of puzzleTarget.children){
       cell.style.background=imgesRelativeColors[i++];    
    }
    alert(winn?'You win!':'You lose!'); 
}
document.onmousemove=function (e) {
    if(choosenIMg){
        choosenIMg.style.position='absolute';
        choosenIMg.style.left=e.pageX+5 + 'px';
        choosenIMg.style.top=e.pageY + 'px'; 
    }
};

puzzleTarget.addEventListener('click',(e)=>{
if(choosenIMg&&(e.target.id!='puzzleTarget')){
    let src=choosenIMg.src.slice(57,67);
    let currentBackgroundSrc=e.target.style.background.slice(5,14);
    for(let img of puzzleSource.children){
        if(img.src.slice(57,67)==currentBackgroundSrc){
            img.style.display='inline';
            img.style.position='relative';
            img.style.left='';
            img.style.top='';
        }
    }
    e.target.style.background= "url("+src+")";
choosenIMg.style.display='none';
choosenIMg=null;
if(gameFinished()){
checkResult();
}
}
});


for(let img of puzzleSource.children){
    img.addEventListener('click',(e)=>{
choosenIMg=e.target;
    });
}

