'use strict';

const jsonObject='{"width":15,"height":10,"bitDepth":15}';

const image=JSON.parse(jsonObject);
let rawsize;
let pixels;
image.computeSize=function(){
rawsize=(this.width*this.height*this.bitDepth)/8;
pixels=this.width*this.height;
};
image.computeSize();
console.log(rawsize);
console.log(pixels);

function ImageMaker(width,height,bitDepth){
    this.width=width;
    this.height=height;
    this.bitDepth=bitDepth;
    this.rawsize=(this.width*this.height*this.bitDepth)/8;
    this.pixels=this.width*this.height;

    const print=()=>{
for(let prop in this){
    console.log(prop +" = "+this[prop]);
}
    };

    print();

}

const firstTestObj=new ImageMaker(20,45,23);
const secondTestObj=new ImageMaker(22,3,43);
const thirdTestObj= new ImageMaker(62,46,11);

console.log('');
console.log('--------------------------');
ImageMaker.prototype.printMore=function(){
    for(let prop in this){
        console.log(prop +" = "+this[prop]);
    }
    const orientation=this.width<this.height?'Portrait':this.width==this.heigh?'Equals':'Landsape';
    console.log(orientation);
};
firstTestObj.printMore();
secondTestObj.printMore();
thirdTestObj.printMore();

// 4.d 1.QUESTION REPLY : If meaning of question if they can cosole.log different functions which is property of current object than no,
//if meaning of question is that functions can call other function inside thems own execution lexical enviroment than 
//reply is yes.
//
// 2.QUESTION REPLY: Difference between  functions is that first one is arrow function
//cose in it we nned to use "this" equals to place where function was defined.Second function is 
//is usual function cose in it we need this equals to object which executes it.
//


function Video(width,heigh,bitDepth,duration,framerate){
ImageMaker.call(this,width,heigh,bitDepth);
this.duration=duration;
this.framerate=framerate;
this.totalFrames=function(){
    return this.duration*this.framerate;
};
}

console.log('');
console.log('--------------------------------');

const videoTestObj =new Video(45,56,16,45,12);
new Video(35,24,14,16,11);

console.log(videoTestObj.totalFrames());

videoTestObj.printMore();

//4f Question reply: We cannot use method printMore on instance of Video ,cose we inherts 
//of Video not of its prototype where this method is assigned.
