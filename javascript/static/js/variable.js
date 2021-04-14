// define different name and different values in one line
// let x,y,z='mahmud';'hossain';'nannu';
// console.log(x);
// not possible this form in javascript but it possible in python 

// alter way is applecable in javascript
// let first='mhmud';
// let second='hossain'
// console.log(first);
// console.log(second);

// // define same value but different variable
// let x=y=z='mahmud hossain'
// console.log(x);
// console.log(y);
// console.log(z);


//distructuring
//it call unpake variable in python
// let names=['mamud','hossain','nannu']
// let [x,y,z]=names;
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(names);
// console.log(names[0]);


// // global variable
// let names='mahmud'
// function fn(){
//     console.log(names);
// }
// fn()
// local variable
// name2='mahmd'
// function fn2(){
//     let name2='hossain'
// }
// fn2()
// console.log(name2);

// convert a local variable to global by this key word 
//this same work done in python using globa key word
function fn(){
     this.names='mahmud';
    let name2='hossain';
}
fn()
console.log(names);
// console.log(name2);