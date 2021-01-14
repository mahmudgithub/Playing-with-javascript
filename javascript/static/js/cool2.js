

// let num;

// do {
//     console.log('Inside the Loop');
//     num = prompt('Enter the number: ');
// } while(num < 10);

// console.log('Outside the Loop');

// var x;
// do {
//     console.log('enter a name');
//     x= prompt('enter name:');

// } while(x !=='mahmud' );
// console.log('ok');
// // // break;

// for(var x=0; x<10; x++){
//     console.log('first');
//     console.log(x);

// }

// var num = 20;

// while(num < 10) {
//     console.log('Inside the Loop');
//     num = prompt('Enter the number: ');
// }

// console.log('Out of the loop');

// for (var x=0; x<10; x++){
//     if(x==8){
//         break;
//     }
//     console.log(x);
// }

// for (var x =0; x<10; x++){
//     if(x==5){
//         console.log(x +'is skeep');
//         continue;
//     }
//     console.log(x);
// }

// var cool= new Array('mahmud','hossain','nannu')
// console.log(cool)
// console.log(cool[2])
// cool[2]='lamyaa';
// console.log(cool);
// console.log(cool.length);
// console.log(cool['length']);

// for (var x=0; x<cool.length; x++){
//     console.log(x)
// }
// cool.push('nowsin');
// console.log(cool);
// cool.pop();
// console.log(cool)
// cool.shift();
// console.log(cool);
// cool.unshift('niva');
// console.log(cool);
// console.log(cool.indexOf('lamyaa'));
// console.log(cool.splice(1));
// var tol=cool;
// console.log(tol);
// console.log(cool===tol);

// var one={
//     first:'mahmud',
//     second:'hossain',
//     third:'lamyaa',
//     fourth:'nowsin',

// }
// var two=one
// console.log(two);
// console.log(two.first);
// console.log(two['fourth'])
// one.five='niva'
// console.log(two)
// one.first='korim'
// console.log(two);
// for (lol in one){
//     console.log(lol);
// }

// var cool=['love','shake','pak']
// one.zun=cool;
// console.log(two);

// var obj={
//     first:'mahmud',
//     second:'hossain',
//     third: function(s){
//         console.log('i am function:', s)
//     },
//     fourth:['love','loss']
// }
// var x=obj
// console.log(x);
// console.log(x.third('fffffffffffffffffff'));
// console.log(x.fourth);
// console.log(x)

// var obj={
//     first:'mahmud',
//     second:function(...s){
//         return `HELLO ${s}`;
//     }
// }
// console.log(obj.second(`lamyaa`,33000))
// document.getElementById('test').innerHTML=obj.second(3399);

// function s(x){
//     return `helo world ${x}`
// }
// console.log(s(1234567));

// var a =()=>{
//     return `hello`
// }
// console.log(a());

// const fun=(name)=>{
//     return `hello ${name}`
// }
// console.log(fun('lamyaa'));

// const fun=(a,b)=>{
//     sum=a+b
//     return `sum is ${sum}`
// }

// console.log(fun(1,1,1,2,2));

// var obj={
//     fist:'mahmud',
//     second:['one','two','three'],
//     third:function(){
//         return `hllo i am function one`
//     },
//     fourth:(x)=>{
//         return `i am function ${x}`
//     }
// }
// var s=obj
// console.log(s);
// console.log(s.second);
// console.log(s.third());
// console.log(s.fourth(2));


// var x=function(){
//     return `hello`
// }
// console.log(x())

// function fun(){
//     return `hi`
// }
// console.log(fun());
// var x=()=>{
//     return `hello`
// }
// console.log(x())

// var name='mahmud';

// var fun1=()=>{
//     console.log(`my name is ${name}`);
//     fun2();
// }
// var fun2=()=>{
//     var a='fun2'
//     console.log(`i am ${a}`);
//     fun3();
// }
// var fun3=()=>{
//     var b='fun3'
//     console.log(`i am ${b}`)

// }
// fun1()

// fun();
// console.log(fun())
// var fun=()=>{
//     return `hello`
// }

// aFunc();

// function aFunc() {
//    var a = 10;
//    var b = 20;
//    var sum = a + b;
//    console.log('Sum: ' + sum);
// }

// var x=()=>{
//     var nam='mahmud'
//     console.log(nam)
// }
// x();
// console.log(nam);

// var nam='mahmiud'
// var fun=()=>{
//     console.log(`my name is ${nam}`)

// }
// fun()
// console.log(`my name is ${nam}`);


// var fun1=()=>{
//     console.log(`i am global`)
//     var fun2=()=>{
//         console.log(` i am local`)
//     }
    
//     fun2()

// }
// fun1()
// fun2()

// var fun=()=>{
//     var obj={
//         name:'mahmud',
//         roll:124
//     }
//     console.log(obj)
    
// }
// fun()
// console.log(obj)

// var fun1=()=>{
//     var f_num='mahmud'
//     var fun2=()=>{
//         var l_num='hossain'
//         console.log(`my full name is ${f_num} ${l_num}`)
//     }
//     fun2()
// }
// fun1()

// var fun=(()=>{console.log(`hello`)} )();

// var fun=(()=>{ return `hello `,console.log('mahmd')})();

// var controller = (function() {
//     var a = {
//             name: 'Zonayed Ahmed',
//             uid: 1062
//             };
//     return a;   
//  })
//  console.log(controller())
//  ();
// console.log(x)
// var x=10;


// hi()
// var hi= ()=> {
// console.log('hello world')
// }

// function one(){
//     console.log('i am one');
//     function two(){
//         console.log('i am two');
//         function three(){
//             console.log('i am four');
//         }
//         three();
//     }
//     two();
// }
// one();

// function one(){
//     console.log('i am one')
//     function two(){
//         console.log('i am two')
//     }two()
// }
// one()

// var x=10;
// one();
// function one(){
//     var y=10;
//     two();

//     function two(){
//         var z=10;
//         three();

//             function three(){
//                 var s=10;

//                 console.log(x+y+z+s);
//             }

//         }
// }


// var x=10;

// one();

// function one(){
//     var y=10; 
//     two();

//     function two(){
//         var z=10;
//         three();
//         console.log(x+y+z);
//     }
//     }

//     function three(){
//         var s=10;
        
//         console.log(x+s+y+z);
//     }


// var fn=()=>{
//     this.names='mahmud';
//     roll=12345
// }
// fn()
// console.log(names)
// console.log(roll)


// var myCustomObj = {
//     name: 'Zonayed Ahmed',
//     age: 21,
//     job: 'Student',
//     msg: function() {
//         console.log('My name is '+ this.name);
//     }
//  }
// myCustomObj.msg();


// var obj={
//     cam:'mahmud',
//     roll:123,
//     fn:function(){
//         console.log(`my name is ${this.cam} and roll is ${roll}`);
//     }
// }
// obj.fn();

// var obj={
//     city:'dhaka',
//     country:function(names){
//         console.log(`my city is ${this.city} and name is ${names}`);
//     }
// }
// obj.country('mahmud');


// var myCustomObj = {
//     name: 'Zonayed Ahmed',
//     age: 21,
//     job: 'Student',
//     isTrue: function() {
//          console.log(this === myCustomObj);
//     }
//  }
//  myCustomObj.isTrue();



// var obj={
//     names:'mahmud',
//     first:{
//         names:'hossain',
//         second:function(){
//             console.log(this)
//         }
//     }
// }
// obj.first.second();

// var obj = {
//     fnames:'mahmd',
//     age: 21,
//     job: 'Student',
//     first:{
//         fnames:'hossain',
//         second:function(){
//             console.log(this);
//         }
//     }
// }
// obj.first.second.call(obj);


// var obj = {
//     name: 'Zonayed Ahmed',
    // age: 21,
    // job: 'Student',
//     first: {
//        name: 'Ahmed Zonayed',
//        second: function() {
//           console.log(this);
//        }
//     }
//  }
//  obj.first.second.call(obj);


// var obj={
//     fname:'mahmud',
//     first:{
//         mname:'hossain',
//         second:{
//             lname:'lamyaa',
//             third:function(){
//                 console.log(`my name is ${this.fname}`);
//             }.call(obj)
//         }
//     }
// }
// // obj.first.second.third.call(obj);


// var karim = {
//     name: 'Karim Rahman',
//     dob: 1994,
//     age: function(currentYear) {
//        console.log(this.name + ' is ' + (currentYear - this.dob) + ' years old!');
//     }
//  }

//  var rahim = {
//     name: 'Rahim Abdu',
//     dob: 1986
//  }

//  karim.age(2021)
//  karim.age.call(rahim, 2018);


// const firstName = "Justin";
// const lastName = "TimberLake";
// const fullName = firstName + " " + lastName + " is a good boy";
// const fullName2 = `${firstName} ${20+50+30} is a good boy.`;
// console.log(fullName)

// const multiLine = "I love you\n"
//     + "I miss you\n"
//     + "I need you";

// const multiLine2 = `I love you
// I miss you
// no. I don't need you
// Baily road e dorkar nai.`

// console.log(multiLine2);

// const ages = [12, 14, 16, 13, 17];
// const ages2 = [15, 16, 12];
// const ages3 = [25, 36, 22, 29];
// const allAges = ages.concat(ages2).concat([5]).concat(ages3);
// const allAges2 = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges2); 
// const business = 650;
// const minister = 450;
// const sochib = 250;
// const takaPoisa = [650, 450, 250, 850];
// // const maximum = Math.max(business, minister, sochib);
// const maximum = Math.max(...takaPoisa);
// console.log(maximum);

// const roll=[1,3,5,9]
// const roll1=[4,6,1,10]
// const all=roll.concat(roll1);
// console.log(all);
// console.log([...roll,...roll1])
// console.log(Math.max(...all))
// const lol = num => num * 2;

// const x=()=>{ }
// const give = () => 5;
// console.log(give());

// const doMath = (x, y) => {
//    const sum = x + y;
//    const diff = x - y;
//    const result = sum * diff;
//    return result;
// }
// const lol=doMath(4,2);
// console.log(lol);

// function add(num1, num2,...lol){
//    console.log([...lol]);
//    return num1 + num2 + lol[0];
   
// }
// const result = add(2, 3,1,1,1,1);
// console.log(result);


// const nums = [1,2,3,4,5,6,7,8];
// const part = nums.slice(2, 5);
// console.log(part);
// const removed = nums.splice(2,3, 77);
// console.log(removed);

// const x=[1,2,3,4,5,6,7,8,9]
// for(let i=0;i<x.length;i++){
//    if(x[i]>5){
//       break;
//    }
//    console.log(x[i]);
// }

// const x=10;
// for(let i=0;i<10;i++){
//    if(i>5){
//       break;
//    }
//    console.log(i);
// }

// const x=[1,2,3,4,5,6,7,8,9]
// for(let i=0; i<x.length; i++){
//    if(x[i]>5){
//       break;
//    }
//    console.log(x[i]);
// }


// const first = 1;
// const second = false;
// if(first == second){
//     console.log("condition is true");
// }
// else{
//     console.log("condition is false");
// }

// function one(ti){
//     return `${ti} mahmud`;
// }

// var x=one
// y=x
// console.log(y('hello'))
// var arr=[1,2,3,4,x]
// arr.push(x)
// console.log(arr)

// var obj={
//     names:'mahmud',
//     another:function(){
//         console.log(`my name is ${this.names}`)

//     }
// }
// var x=obj
// x.another()


// var x=2+(function(){return 10})()
// console.log(x)

// function one(){
//     console.log('i am outer function');
//     function two(){
//         console.log('i am inner function');
//     }
//     two();
// }
// var x=one
// x();


// function one(a,b){
//     function sum(){
//         return (a+b);
//     }
//     function sub(){
//         return (a-b);
//     }
//     function mul(){
//         return (a*b);
//     }
//     function div(){
//         return (a/b);
//     }
//     return sum() + sub()+mul()+div()
// }
// var result=one(8,2);
// console.log(result);
// function person(fname,gender){
//     if (gender=='male'){
//         return `i am ${fname} my gender is ${gender}`;
//     }
//     else if(gender=='female'){
//         return `i am ${fname} my gender is ${gender}`;
//     }
//     else{
//         return `i am not a gender`
//     }
// }
// var x=person('lamyaa','ftt');
// console.log(x);

// var out;
// function one(fname, gender){
//     if(gender=='male'){
//         out=`my name is ${fname} and gender is ${gender}`
//     }

//     else if(gender=='female'){
//         out=`my name is ${fname} and gender is ${gender}`
//     }
//     else{
//         out=`unknown name`
//     }
//     return out;
// }
// var x=one('mahmud','male')
// console.log(x);

// var out;
// function one(){
//     return {
//     name:'mahmud',
//     roll:12345,
//     other:[1,2,3,4,5,6,7,8,9],
//     fun:function(){
//         console.log(this.name, this.roll, this.other);
//     }
//     }
// }
// console.log(one());
// console.log(one().other);
// console.log(one().fun());


// function es5var() {
//     if(true) {
//        let a = 5;
//     }
//     console.log('Value: ' + a);
//  }
 
//  es5var();

// function fn(){
//     const x=10;
//    for(let s=0; s<x; s++){
//        console.log(s);
//    }
//    console.log(s)
// }
// fn();


// var i = 13;

// for(var i = 0; i < 5; i++) {
//    console.log(i);
// }

// console.log('Value: ' + i);


// var i = 20;

// for(let i = 0; i < 5; i++) {
//    console.log(i);
// }

// console.log('Value: ' + i);


// var i = 13;

// for(const i = 0; i < 5; i++) {
//    console.log(i);
// }

// console.log('Value: ' + i);

// (function fn(){
//     console.log('hell')
// })();

// var x= (function(s){console.log(`hello ${s}`)})(2);

// var x=((s)=>{console.log('i amam '+s)})(5);

// (function fn(){console.log('hello')})();
// console.log(fn());

// {
//     let x=10;
//     console.log(x);
// }
// console.log(x)


// {const s=function fn(){
//     const x=10;
//     console.log(x);
// }}
// // console.log(x);
// s();

// function fn1(){
//     return function(){
//         return `hllo`;
//     }
// }
// var x=fn1();
// console.log(x());

// var x=10;
// console.log(x) 

// for(var i=0; i<10; i++){
//     console.log(i);
// }
// var arr=['mahmd','hossain','lamyaa','niva','nowsin']
// for(i=0;i<arr.length;i++){
//     console.log(i);
// }
// console.log(arr[3]);
// console.log(arr[arr.length-2]);
// console.log(arr.indexOf('lamyaa'));
// console.log(arr.sort());

// arr.forEach(function(arr){
//     console.log(arr);
// })

// arr.forEach(lol)
//  function lol(arr){
//      console.log(arr)
//  }

// var arr=['mahmud','hossain','lamyaa','nowsin']
// function lol(arr){
//     console.log(arr);
// }

// arr.forEach(lol);

// var x=[1]
// function lol(x){
//     console.log(x);
// }
// x.forEach(lol);

// var arr=['mahmud','hossain','lam','n0owson']
// arr.forEach(function(arr){
//     console.log(arr);
// })

// arr.forEach(function(arr){
//     console.log(arr);
// })
// arr.forEach(function(arr){console.log(arr);})

// arr.forEach(function(arr){
//     var x=arr.length;
//     var y=arr.toLocaleUpperCase();
//     console.log(x);
//     console.log(y);
// })

// class one{

// 	fn1(){
// 		console.log('hello i am first function fron class')

// 	}
// 	fn2(){
// 		console.log(`i am secondj function from class`)
// 	}
// 	fn3(a,b){
// 		console.log(`sum of: ${a+b}`)
// 	}
// 	fn4(c,d){
// 		console.log(`sum is : ${c+d}`)
// 	}
// }
// var x= new one;
// x.fn1();
// x.fn2();
// x.fn3(2,2);
// x.fn4(3,3);

// class one{
// 	constructor(a,b){
// 		console.log(`su is ${a+b}` );
// 	}
// }
// var x= new one(2,2);


// class one{
// 	constructor(a,b){
// 		this.a=a
// 		this.b=b
// 	}

// 	lol(){
// 		console.log(`sum : ${this.a+this.b}`)
// 	}
// }

// var x=new one(2,2);
// x.lol();

// class one{
// 	lol(){
// 		console.log('i am fine')
// 	}
// }

// var x=new one;
// x.lol();

// class one{
// 	constructor(){
// 		console.log('i am constructor')
// 	}
// }
// new one();


// class one{
	
// 	constructor(arr){
// 		this.arr=arr
// 		console.log(this.arr)

// 	}
// }
// var x=new one(11)


// class one{
// 	static lol(){
// 		console.log('lamyaa')
// 	}

// }
// one.lol();

// class one{static lol(a,b){console.log(`sum: ${a+b}`)}}one.lol(2,2)

// class father{
// 	one(){
// 		console.log('i am function one')
// 	}
// 	two(){
// 		console.log('i am function two')
// 	}
// }

// class son extends father{
// 	demo(){
// 		console.log('alalalalalalalalalalal')
// 		super.one()
// 		super.two()
// 	}

// }

// var x=new son();
// x.demo();
// x.one();

// var x=(...s)=>{console.log(` total ${s}`)}
// var lol=x(1,2,3,4,5);
// lol;

// function one(...name){
// 	console.log(name)
// }
// one('mahmud','hossain','lamyaa','nowsin')

// const name='mahmiud'
// const name='hossain'
// console.log(name)
// name='lamyaa'
// console.log(name)

// name='mahmud';
// console.log(name);
// var name;

// lol();
// function lol(){console.log('hello')};


//but it not work
// x();
// var x=function(){console.log('hello')};

// pactics of hoisting
name;
console.log('example of variable hoisting');
var name;

fn();
function fn(){console.log('example of function hoisting')};

fun('mahmud');
function fun(fname){console.log(`i am ${fname}`)};
