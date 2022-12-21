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

class ImageMaker{
    constructor(width,height,bitDepth){
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
    

}



const firstTestObj=new ImageMaker(20,45,23);
console.log('');
const secondTestObj=new ImageMaker(22,3,43);
console.log('');
const thirdTestObj= new ImageMaker(61,46,11);

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




class Video extends ImageMaker {
    constructor(width,heigh,bitDepth,duration,framerate){
super(width,heigh,bitDepth);
this.duration=duration;
this.framerate=framerate;
    }

totalFrames(){
    return this.duration*this.framerate;
};
}

console.log('');
console.log('--------------------------------');

const videoTestObj =new Video(45,56,16,45,12);
new Video(35,24,14,16,11);

console.log(videoTestObj.totalFrames());

console.log('');
console.log('');
videoTestObj.printMore();

//With implenting with classes we can use printMore() method cose,Video class prototype extends parent prototype.
