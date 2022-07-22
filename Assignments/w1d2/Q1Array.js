"use strict";

Array.prototype.even = function() {
    //console.log("WORKING", this[3])
    if(this.length<1)
        throw new Error ("Invalid input")
    let copy=[];
    for(let i=0;i<this.length;i++){
        if(this[i]%2==0){
            copy.push(this[i])}
        }
    return copy;
}
let arr= [2,5,6,7,9,12,100];
console.log("Input is ", arr);
console.log("Even: ", arr.even());


Array.prototype.odd = function() {
    //console.log("WORKING", this[3])
    if(this.length<1)
        throw new Error ("Invalid input")
    let copy=[];
    for(let i=0;i<this.length;i++){
        if(this[i]%2==1){
            copy.push(this[i])}
        }
    return copy;
}
//let odd= [2,5,6,7,9,12,22,100];
console.log("Odd: ", arr.odd());