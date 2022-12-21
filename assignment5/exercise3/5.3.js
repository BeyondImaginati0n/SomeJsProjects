const eventLog = document.getElementById('eventLog');
function delayedCalc(a,b) {
const promise = new Promise(
(resolve, reject) => {
if (a > b) {
setTimeout(
() => {
let c = a+b;
eventLog.innerHTML += a+" + "+b+" = "+c+"<br>";
resolve(c)
},
Math.floor(Math.random() * 2000));
}
else {
reject('error: b larger than a');
eventLog.innerHTML += "rejected<br>";
}
});
return promise;
}
// Change the code below to correctly use promises for an dealayed
// incremental computation
// of 5+3+7+14+23+25+1000+1
// delayedCalc(5,3);
// delayedCalc(7,14);
// delayedCalc(23,25);
// delayedCalc(1000,1);
try{(async () => {
let result= await delayedCalc(5,3);
result=await delayedCalc(result,7);
result=await delayedCalc(result,14);
result=await delayedCalc(result,23);
result=await delayedCalc(result,25);
result=await delayedCalc(result,1000);
result=await delayedCalc(result,1);
})();
}catch(err){
handleError(err);
}
function handleError(error) {
alert(error);
}
