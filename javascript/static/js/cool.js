

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
// name;
// console.log('example of variable hoisting');
// var name;

// fn();
// function fn(){console.log('example of function hoisting')};

// fun('mahmud');
// function fun(fname){console.log(`i am ${fname}`)};

// x();
// var x=function (){console.log('hello')}


// fun('mahmd');
// function fun (name){console.log(`my name is ${name}`)}

// var x;
// for(x=0;x<10;x++){console.log(x)}

// for (var x=0; x<10; x++){console.log(x)}

// var s=10;
// for(var i=0; i<s; i++){console.log(i)}

// var arr=['mahmud','hossain','lamyaa','nowsin']
// for (var i=0; i<arr.length;i++){console.log(arr)};

// for(var i=0;i<10;i++){console.log('hu')}

// var name=['mahmud','hossain','lamyaa','nowsin']
// for(var one of name){console.log(one)}

// for (var i of name){console.log(i)};

// var obj={
// 	name:'mahmud',
// 	roll:12345,
// 	city:'rajshahi'
// }
// // console.log(obj)
// obj;

// var x=obj;
// // console.log(x.name);

// x.cgpa=2.76;
// // console.log(x)

// var arr=['mahmud','hossain','lamyaa','nowsin']
// x.push=arr;
// // console.log(x)

// function lol(){
// 	console.log('i am function')
// }
// x.push=lol();
// console.log(x);


// var obj={
// 	name:'mahmud',
// 	roll:1245,
// 	city:['raj','dhaka','khu'],
// 	fn:function(){
// 	console.log('i am a function')
// 	}
// }
// var x=obj;
// console.log(x);
// console.log(x.fn());
// console.log(x.name);
// console.log(x.city);

// var obj={
// 	obj2:{
// 		obj3:{
// 			obj4:{
// 				name:'mahmud'
// 			}
// 		}
// 	}
// }

// var x=obj;
// console.log(x.obj2.obj3.obj4);
// console.log(x['obj2']['obj3']['obj4']);


// var obj={
// 	fn:function(){
// 		return 'hello'
// 	}
// }
// var x=obj;
// console.log(x.fn());

// var obj={
// 	name:'mahd',
// 	roll:12345,
// 	class:'eight'
// }

// for (var props in obj){console.log(props)}
// for (var props in obj){console.log(obj[props])}
// for (var props in obj){console.log(`${props} : ${obj[props]}`)}

// var obj={
// 	name:'mahmud',
// 	roll:12345,
// 	city:['raj','dha','khu'],
// 	fun:function(){
// 		return 'hello'
// 	}
// }
// for(var props in obj){
// console.log(props);
// console.log(obj[props]);
// console.log(`${props} : ${obj[props]} ${obj.fun()}`)
// };

// function fn(){
// 	return ( 'hello');
// }
// console.log(fn());

// class one{
// 	 fn(){
// 		console.log('heelo');
// 	}
// }
// var x=new one;
// x.fn();
// ;

// class one{
// 	constructor(a,b){
// 		console.log(`su is ${a+b}` );
// 	}
// }
// var x= new one(2,2);


// lol=(name)=>{
// pol(name);
// }

// pol=(sos)=>{
// 	console.log(sos)
// }

// lol('mahmud')


// function calback(a) {
//   console.log(a)
// }

// function fn1() {
//   calback("Hello");
//   calback('mahmud');
// }

// function fn2() {
//   calback("Goodbye");
// }

// fn1();
// fn2();


// const getVar = () => {
// 	setTimeout(function() {
// 	   console.log('function one');
// 	}, 3000)
//  }
 
//  const printSomething = () => {
// 	console.log('Function two');
//  }
//  getVar();
//  printSomething();
 
 
 
 
//  const getVarC = (lol) => {
// 	setTimeout(function() {
// 	   console.log(' Function three');
// 	   lol();
// 	}, 3000)
//  }
 
//  const printSomethingC = () => {
// 	console.log('Function four');
//  }
//  getVarC(printSomethingC);




// function one(){
// return 'hello worlds';
// }
// document.getElementById('test').innerHTML=one();
// console.log(one())

//how define varible

// var name='mahmud'  
// var f_name=name;
// var _name=name;
// var l$name=name;
// console.log(name)
// console.log(f_name)
// console.log(_name)
// console.log(l$name)


// var f_name_l='mahmud'
// console.log(f_name_l)

// var Name='mahmud'
// var name='hossain'

// console.log(name)
// console.log(Name)

// var My_first_name='mahmud'
// console.log(My_first_name)

// // ****রিমিটিভ ডাটা টাইপঃ

// // প্রিমিটিভ টাইপের ডাটাগুলো তে ভ্যালু সরাসরি স্টোর করা থাকে। আমরা জানি জাভাস্ক্রিপ্ট এ সবই অবজেক্ট। কিন্তু এই প্রিমিটিভ ডাটা টাইপগুলো ছাড়া। এগুলা অবজেক্ট না। যেমনঃ

// // (i) নাম্বারঃ নরমাল নাম্বার থেকে শুরু করে যেকোনো ধরনের নাম্বার। দশমিক ও হতে পারে
//  var Int_number=10;
//  var Flot_number=10.5;
//  console.log(Int_number)
//  console.log(Flot_number)


// (ii) স্ট্রিংঃ টেক্সট নাম্বার সহ। মানে ক্যারেক্টার এর সিকুয়েন্স।
//  স্ট্রিং অবশ্যই ‘ ’ অথবা “ ” এর ভিতরে থাকবে। ডাবল (“”) নাকি সিঙ্গেল (‘ ’) ইউজ করবেন সেটা একদমি আপনার ইচ্ছা। 
//  তবে একবার ডাবল একবার সিঙ্গেল ইউজ করলে খারাপ দেখা যায়(যদিও এটাও লিগ্যাল, 
//  কিন্তু ভালো প্র্যাক্টিস না) তাই যেখানে যেভাবে লিখা শুরু করবেন সেভাবেই লিখবেন।
//  নাম্বারও যদি এভাবে ডাবল বা সিঙ্গেল এর ভিতরে লিখেন তাহলে সেটাও স্ট্রিং হিসেবে গণ্য হবে।
// var Myself="i am mahmud , i live in ....."
// console.log(Myself)


// // (iii) বুলিয়ানঃ সত্য নাইলে মিথ্যা true, false। সব ছোটো হাতের। বড় হাতের বা ক্যাপিটেলাইজড ভ্যালু ভুল দেখাবে। 

// var x=10;
// var y=20;
// var result=x>y;
// console.log(result)

// var x=100;
// var y=20;
// var result=x>y;
// console.log(result)


// (iv) আন্ডিফাইন্ডঃ যখন আপনি ভ্যারিয়েবল ডিক্লেয়ার করেন, কিন্তু কোনো ডাটা ঐটাতে রাখা হয় না, তখন বাই ডিফল্ট undefined হয়ে থাকে সেটা(iv) আন্ডিফাইন্ডঃ যখন আপনি ভ্যারিয়েবল ডিক্লেয়ার করেন, কিন্তু কোনো ডাটা ঐটাতে রাখা হয় না, তখন বাই ডিফল্ট undefined হয়ে থাকে 
// var name;
// console.log(name)


// // নালঃ এটার কোনো অস্তিত্ব নাই। কিন্তু আন্ডিফাইন্ড না। মানে আপনি আপনার ভ্যারিয়েবলে কিছু রাখতে চাচ্ছেন না, কিন্তু আবার এটা আন্ডিফাইন্ড ও রাখতে চাচ্ছেন না। null ই হবে, Null বার NULL ভুল!
// var name=null;
// console.log(name)


// // কনকাটিনেশনঃ
// // এবার আসি আরো কিছু ব্যাসিক টপিক নিয়ে। কনকাটিনেশন বা কয়েকটা ডাটা একসাথে অ্যাড করতে চাইলে জাভাস্ক্রিপ্ট এ ‘+’ ইউজ করা হয়
// var Firtname='Mahmud';
// var Lastname='Hossain';
// var FullName='my full name is'+Firtname+' '+Lastname
// console.log(FullName)

 
 // // সেজন্যই জাভাস্ক্রিপ্ট এ কোনো ডাটা টাইপ দেখার জন্যে typeof
 // var name='mahmud'
 // console.log(typeof(name))


// // এখন যদি কয়েকটা টাইপ একসাথে অ্যাড করে একটা ভ্যারিয়েবলের সেইভ করি তাহলে সেটা কোন টাইপের হবে সেটা ডিপেন্ট করে আপনার ডাটার উপর। আপনি যদি নাম্বার নাম্বার অ্যাড করেন তাহলে সেটা কনকাটিনেশন না হয়ে অ্যাডিশন হবে। 
// // আর যদি আপনি স্ট্রিং এর সাথে নাম্বার যোগ করেন বা নাম্বারের সাথে স্ট্রিং যোগ করেন তাহলে পুরোটাই স্ট্রিং টাইপের হয়ে যাবে। কারণ নাম্বার নাম্বার ছাড়া ক্যারেক্টার সেইভ করতে পারে না। কিন্তু স্ট্রিং ক্যারেক্টারসহ নাম্বারও সেইভ করতে পারেঃ
// var name='mahmud'+10;
// console.log(name)
// console.log(typeof(name))


// // ভ্যারিবল এর ডাটা পরিবর্তনঃ
// // আপনি চাইলে আপনার একবার ডিক্লেয়ার করা ভ্যারিয়েবলের ডাটা পরিবর্তন করতে পারবেন। 
// // তবে একবার ডিক্লেয়ার করে পরে আবার ডিক্লেয়ার করার দরকার নেই। 
// // জাস্ট ভ্যারিয়েবল এর নাম লিখে ইকুয়্যাল টু আপনার ডাটা।
// var name='mahmud';
// name='hossain';
// name='mahmud hossain';
// console.log(name)


// // আবার প্রথমে নাম্বার নিয়ে পরে স্ট্রিং এও পরিবর্তন করতে পারবেন
// // যেটা জাভাস্ক্রিপ্ট এ একদম লিগ্যালঃ
// var name='mahmud';
// name=12345;
// console.log(name)


// যেকোনো ডাটা টাইপ থেকে যেকোনো ডাটা টাইপেই পরিবর্তন করতে পারবেন। 
// এখানে আপনার স্বাধীনতা আছে পুরোপুরি।
// কমেন্টঃ
// কোডে কমেন্ট করা ভালো প্র্যাক্টিসের মধ্যে পড়ে। 
// কারণ অনেকসময় কোডের কন অংশ কি করছে সেটা বুঝতে ঝামেলা হয়ে যায়। 
// সেক্ষেত্রে কিছু বর্ননা লিখে রাখলে যে এই অংশ এই কাজ করে ঐ অংশ ঐ কাজ করে তাহলে পরে যেকেউ বা আপনি নিজেও কয়েক বছর পরেও আপনার কোড দেখে বুঝতে পারবেন যে আসলে এই অংশের কাজ হচ্ছে এটা।
// তাই কোডে প্রোপার কমেন্ট রাখা ভালো। আর কমেন্ট গুলো জাভাস্ক্রিপ্ট এর ইঞ্জিন একদম কমপ্লিটলি এড়িয়ে চলবে। মানে এগুলা আইটপুটে আসবে না কখনো
// কমেন্ট দুইভাবে করা যায়ঃ
// ১। সিঙ্গেল লাইন কমেন্টঃ
// একই লাইনের কমেন্ট হলে ভা আপনার কোডের শেষে কিছু লিখতে চাইলেঃ
// var name='mahmud';  //this is firsr name


// // ২। মাল্টি-লাইন কমেন্টঃ
// // কয়েকটা লাইনে কমেন্ট লিখতে চাইলেঃ
// var fname='mahmud';
// var lname='hossain';
 /*
 on the above is 
 my first and 
last name */



// জাভাস্ক্রিপ্টঃ অপারেটর নিয়ে সবকিছু
// জাভাস্ক্রিপ্ট এ কয়েকরকম এর অপারেটর আছেঃ
// ১। অ্যারিথমেটিক অপারেটর
// ২। কম্পারিজম অপারেটর
// ৩। লজিক্যাল/রিলেশনাল অপারেটর
// ৪। অ্যাসাইনমেন্ট অপারেটর
// ৫। কন্ডিশনাল/টার্নারি অপারেটর

// // ++(ইনক্রিমেন্ট) — এটা আপনার অপারেন্ড এর সাথে ১ যোগ করবে। ধরুন আপনার একটা ভ্যারিয়েবল আছে aযেটার ভ্যালু 10, 
// // এখন a++লিখলে এটার ভ্যালুর সাথে এক যোগ হবে। এটা a = a + 1এটার শর্টকাট বলা চলে
// var number =10;
// console.log(number++)  //10
// console.log(++number)  //11 right way
// console.log(number)


// // --(ডিক্রিমেন্ট) — অনেকটা ইনক্রিমেন্ট অপারেটরের মতোই কিন্তু ভ্যালু ১ কমাবে।
// //  সেইমভাবে এটাও a = a - 1এটার শর্টকাট।
// var number=10;
// console.log(number--) //10
// console.log(--number) //9 and rigt way
// console.log(number)


// // ২। কম্পারিজম অপারেটরঃ একটা ভ্যালুর সাথে আরেকটা কম্পেয়ার করার জন্য। দুইটা ভ্যালু সমান কি সমান না, নাকি বড় না ছোটো। এরা রেজাল্ট হিসাবে হয় সত্য trueঅথবা মিথ্যা falseরিটার্ন করে।
// // ==(ইকুয়্যাল) — দুইটার ভ্যালু সমান সমান কিনা দেখার জন্যে। সমান হলে সত্য trueনাইলে মিথ্যা falseরিটার্ণ করবে।
// var a=10;
// var b=5;
// var z=a==b;
// console.log(z)


// // !=(ইকুয়্যাল না) — দুইটার ভ্যালু সমান না হলে সত্য trueদেখাবে
// var a=10;
// var b=10;
// var z=a!=b;
// console.log(z);


// // >=(বড় অথবা ইকুয়্যাল) — একটা আরেকটা থেকে বড় বা সমান সমান কিনা সেটা দেখার জন্যে।
// // বড় বা সমান হলে সত্য trueনাইলে মিথ্যা false
// var a=10;
// var b=10;
// var z=a>=b;
// console.log(z);


// // <=(ছোটো অথবা ইকুয়্যাল) — একটা আরেকটা থেকে ছোটো বা সমান সমান কিনা সেটা দেখার জন্যে। 
// // ছোটো বা সমান হলে সত্য trueনাইলে মিথ্যা false
// var a=10;
// var b=10;
// var z=a<=b;
// console.log(z);


// // এগুলার বাইরেও আরো মোস্ট ইউস কিছু অপারেটর রয়েছে। যেমন ===এবং !==এগুলা ব্যাসিকেলি ইকুয়্যাল ==বা ইকুয়্যাল না !=অপারেটরের মতোই কিন্তু মেইন পার্থক্য হলো ট্রিপল ইকুয়্যাল অপারেটর ভ্যালু দুইটা সমান কিনা সেটা চ্যাক করে এবং সাথে দুইটা একই টাইপের কিনা সেটাও চ্যাক করে।
// // যেখানে ডাবল অপারেটরগুলো শুধুমাত্র ভ্যালু দুইটা সমান কিনা চ্যাক করে, টাইপ চ্যাক করে না।
// var a=10;
// var b='mahmud';
// var z=a===b;
// console.log(z)
// //and
// var s=a!==b;
// console.log(s)


// // লজিক্যাল অপারেটরঃ তিনরকমের হতে পারেঃ
// // &&(এন্ড) — সাধারণত দুইটা অপারেন্ড এর মাঝখানে বসে। এবং যদি দুইটা স্টেটমেন্ট সত্য trueহয় তাহলে পুরোটা সত্ য নাইলে যেকোনো একটাও যদি মিথ্যা falseহয় তাহলে পুরোটাই মিথ্যা false।
// // আর যদি দুইটাই মিথ্যা falseহয়, তাহলেও পুরোটা মিথ্যা false
// var a=10;
// var b=5;
// var c=2;
// var d=1;
// var result=(a>b)&&(c>d)
// console.log(result)
// var result=(a>b)&&(c<d)
// console.log(result)


// // ।।(অর) — সাধারণত দুইটা অপারেন্ড এর মাঝখানে বসে। এবং যদি যেকোনো একটা সত্য trueহয় তাহলে সত্য true, দুইটাই যদি সত্য trueহয় তাহলেও পুরোটা সত্য true। 
// // আর যদি একমাত্র দুইটা স্টেট্মেন্টই মিথ্যা falseহয় তাহলেই পুরোটা মিথ্যা falseহবে
// var a=10;
// var b=5;
// var c=2;
// var d=1;
// var result=(a>b)||(c>d)
// console.log(result)
// var result=(a>b)||(c<d)
// console.log(result)


// // !(নট) — সাধারণত একটা স্টেটমেন্ট এর পূর্বে বসে।
// // এবং সেটা যদি সত্য trueহয় তাহলে এটা রিটার্ন করবে মিথ্যা false, আর মিথ্যা falseহলে রিটার্ন করবে সত্য true।
// // মানে উল্টো
// var result=(2>10)
// console.log(!result)


// // +=যোগ এবং অ্যাসাইনমেন্ট অপারেটরঃ নিজের সাথে নিজের ভ্যালু যোগ করে সেটাকে 
// // আবার নিজের সাথেই অ্যাসাইন করা একই সাথে। a += 10এটার ফুল ফর্ম হচ্ছেঃ
// var a=10;
// a +=10;
// console.log(a)


// // -=বিয়োগ এবংঅ্যাসাইনমেন্ট অপারেটরঃ এটাও শর্টকাট আগেরটার মতোই। নিজের সাথে নিজের ভ্যালু বিয়োগ করে সেটাকে আবার 
// // নিজের সাথেই অ্যাসাইন করা একই সাথে। a -= 10এটার ফুল ফর্ম হচ্ছেঃ
// var a=10;
// a -=10;
// console.log(a)


// // *=গুণ এবংঅ্যাসাইনমেন্ট অপারেটরঃ এটাও শর্টকাট।নিজের সাথে নিজের ভ্যালু গুণ করে সেটাকে আবার
// //  নিজের সাথেই অ্যাসাইন করা একই সাথে। a *= 5এটার ফুল ফর্ম হচ্ছেঃ
// var a=10;
// a *=10;
// console.log(a)


// // /=ভাগ এবংঅ্যাসাইনমেন্ট অপারেটরঃ এটাও শর্টকাট। নিজের সাথে নিজের ভ্যালু ভাগ করে সেটাকে আবার
// //  নিজের সাথেই অ্যাসাইন করা একই সাথে। a /= 2এটার ফুল ফর্ম হচ্ছেঃ
// var a=100;
// a /=10;
// console.log(a)


// // %=ভাগশেষ এবংঅ্যাসাইনমেন্ট অপারেটরঃ এটাও আরেকটা শর্টকাট।নিজের সাথে নিজের ভ্যালু মড করে সেটাকে আবার
// //  নিজের সাথেই অ্যাসাইন করা একই সাথে। a %= 5এটার ফুল ফর্ম হচ্ছেঃ
// var a=100;
// a %=10;
// console.log(a)


// // কন্ডিশনাল/টার্নারি অপারেটরঃ ? :এটাও আরেকটা শর্টকাট। উদাহরন দেখলে বুঝতে পারবেনঃ
// // যদি কন্ডিশন সত্য হয় ? তাইলে ভ্যালু এটা : নাইলে ভ্যালু এইটা
// var a=10;
// var b=5;
// var result=a>b? 'yes':'no'
// console.log(result)


// জাভাস্ক্রিপ্টঃ কন্ডিশনাল স্টেটমেন্ট নিয়ে সবকিছু
// ফেসবুককেই উদাহরণ হিসাবে নিলে, আপনি রেজিস্ট্রেশন/লগিন না করলে একটা লগিন/সাইন-আপ পেজ দেখতে পাবেন।
//  আর রেজিস্ট্রেশন করে লগিন করলে আবার অন্যরকম জিনিস দেখতে পারতেছেন। তো এগুলাই আসলে প্রোগ্রামিং এ ডিসিশন।
// আর এগুলাকেই কন্ট্রোল করা হয় কন্ডিশনাল স্টেটমেন্ট দিয়ে।
// জাভাস্ক্রিপ্ট এ কন্ডিশনাল স্টেটমেন্ট ৩ রকমের আছেঃ
// ১। ifstatement
// ২। if...elsestatement
// ৩। if...else ifstatement
// আরো একটা আছে switchস্টেটমেন্ট নামে,


// ifstatement
// if(সত্য কিছু হয়) {
//    তাহলে আমার ভিতরের জিনিস এক্সিকিউট হবে
// }
// এটা হচ্ছে শুধু একটা কন্ডিশন চ্যাক করবে। যদি অমুক সত্য হয় তাইলেই আমার ভিতরে যা আছে তা দেখাবা নাইলে কিছু দেখানোর দরকার নাই
// var name='mahmud';
// if (name=='mahmud'){
// 	console.log('true')
// }
//or
// var name='mahmud';
// var email='mahmud@gmail.com';
// var password='12345';
// if(name=='mahmud'||email=='mah@gmail.com'||password=='12345'){
// 	console.log('login')
// }


// // if...elsestatement
// // if(সত্য কিছু হয়) {
// //    তাহলে আমার ভিতরের জিনিস এক্সিকিউট হবে
// // } else {
// //    নাইলে আমার ভিতরের জিনিস এক্সিকিউট হবে
// // }
// // এটা হচ্ছে যদি ifঅমুক সত্য হয় তাইলে আমার ভিতরে যা আছে দেখাবা নাইলে elseএগুলা দেখাবা। 
// // এটা আপনাকে আরো কন্ট্রোল এনে দিবে কন্ডিশনাল স্টেটমেন্ট এর উপরে। 
// // এখানে যদি সত্য হয় তাহলে ifএর ভিতরের জিনিস এক্সিকিউট হবে।
// // আর যদি মিথ্যা হয় তাহলে elseএর ভিতরের জিনিস এক্সিকিউট হবে।
// var name='mahmud';
// var password='12345';
// if(name=='mahmud' && password=='123456789'){
// 	console.log('login')
// }
// else{
// 	console.log('registry pleae')
// }



// // ৩। if...else ifstatement
// // if(সত্য কিছু হয়) {
// //    তাহলে আমার ভিতরের জিনিস এক্সিকিউট হবে
// // } else if(নইলে যদি আমি সত্য হই){
// //    তাহলে আমার ভিতরের জিনিস এক্সিকিউট হবে
// // } else if(নইলে যদি আমি সত্য হই){
// //    তাহলে আমার ভিতরের জিনিস এক্সিকিউট হবে
// // } 
// // ...
// // else {
// //    নাইলে আমার ভিতরের জিনিস এক্সিকিউট হবে
// // }
// // …মানে যতবার ইচ্ছা else ifইউজ করা যাবে
// // এটা হচ্ছে যদি অমুক সত্য হয় তাহলে আমার ভিতরে যা আছে দেখাবা নাইলে যদি অন্যকিছু সত্য হয়
// // তাইলে এগুলা দেখাবা বা যদি কিছুই সত্য trueনা হয় তাহলে elseআমার ভিতরের গুলা দেখাবা
// var name='mahmud';
// var password='12345';

// if(name=='mahmud' && password=='12345'){
// 	console.log('login')
// }
// else if(name=='mahmud' && password=='123456'){
// 	console.log('try again by good password')
// }
// else if(name=='mahmuds' && password=='12345'){
// 	console.log('try again by good name')
// }
// else{
// 	console.log('please registry')
// }



// // নেস্টিং কন্ডিশনাল স্টেট্মেন্টঃ
// // নেস্টিং মানে হচ্ছে একটা কন্ডিশনাল স্টেটমেন্ট এর ভিতরে আরেকটা কন্ডিশনাল স্টেটমেন্ট।
// //  এবং এটা সম্পূর্নরূপে বৈধ। আপনি যেভাবে ইচ্ছা শুধু ifএর ভিতরেও else if…elseবা else ifইউজ করতে পারবেন বা অন্যগুলার ভিতরেও শুধু ifইউজ করতে পারবেন
// //  এখানে ধরা বাধার কোনো নিয়ম নাই।
// var number=10;
// if(number>2){
// 	if(number>18){
// 		console.log('inside me yes')
// 	}
// 	else{
// 		console.log('inside me not')
// 	}
// }
// else{
// 	console.log('i am not')
// }
// একটার ভিতরে আরেকটা, আরেকটার ভিতরে আরেকটা, এভাবে যতোবার ইচ্ছা করতে পারবেন



// // সুইচ স্টেটমেন্টঃ
// // এবার আসি switchস্টেটমেন্ট এ। আমরা শেষের যেটা ইউজ করলাম, if…else ifঐটা ইউজ করে সবসময় ফ্লেক্সিবল নাও হতে পারে। ধরুন আপনি একটা ভ্যালুর উপরেই ডিসিশন নিতে চাচ্ছেন। কেস যদি অমুক হয় তাইলে এটা প্রিন্ট করা হবে, আর কেস যদি তমুক হয় তাইলে ঐটা প্রিন্ট করা হবে।

// // সুইচ (এক্সপ্রেশন) {
// //    কেস যদি এটা(১) হয়ঃ 
// //       এখানের কোড এক্সিকিউট হবে;
// //       ব্যাস তারপর শেষ;

// // কেস যদি এটা(২) হয়ঃ 
// //       এখানের কোড এক্সিকিউট হবে;
// //       ব্যাস তারপর শেষ;
// //    ...

// //    কেস যদি এটা(.) হয়ঃ 
// //       এখানের কোড এক্সিকিউট হবে;
// //       ব্যাস তারপর শেষ;

// //    কেস যদি এটা হয়ঃ 
// //       এখানের কোড এক্সিকিউট হবে;
// //       ব্যাস তারপর শেষ;

// //    কেস যদি কোনোটাই না হয় তাইলে বাই ডিফল্টঃ
// //       এখানের কোড এক্সিকিউট হবে;
// // }
// var weekday='sunday';
// switch(weekday){
// 	case 'suterday' :
// 	console.log('first day in week');
// 	break;

// 	case 'mionday' :
// 	console.log('third the in week');
// 	break;

// 	case 'sunday':
// 	console.log('great day');
// 	break;


// 	default:
// 	console.log('select a day');
// }


// জাভাস্ক্রিপ্টঃ লুপ নিয়ে সবকিছু
// প্রোগ্রামিং এ লুপ অনেক রকমের হয়। তবে জাভাস্ক্রিপ্ট এ বেশ কয়েকরকমের লুপ আছে।
//  নিচের এই স্টেটমেন্টগুলো লুপের জন্যে ইউজ করা হয়ঃ
// ১। forস্টেটমেন্ট
// ২। do…whileস্টেটমেন্ট
// ৩। whileস্টেটমেন্ট
// ৪। breakস্টেটমেন্ট
// ৫। continueস্টেটমেন্ট

// // ১। forস্টেটমেন্টঃ
// // জাভাস্ক্রিপ্ট এ ফর লুপ অন্যান্য কমন প্রোগ্রামিং ল্যাংগুয়েজের মতোই। ফর লুপ সাধারণত ইউজ করা হয় আপনি যদি কোন কাজ নির্দিষ্ট টাইম পর্যন্ত করতে চান। এখানে শুরুটা বলে দিবেন, তারপর কতক্ষন পর্যন্ত চলবে সেটা বলে দিবেন 
// // আর সবশেষে প্রতিটা স্টেপে কতটুকু যেতে চান
// // for(শুরু; কন্ডিশন; স্টেপ) {
// //    স্টেটমেন্ট;
// // }
// var i;
// for(i=0; i<8; i++){
// 	console.log(i);
// }

// // or
// var i;
// for(i=0; i<8; i++){
// 	console.log('number: ' + i);
// }



// ৩। whileস্টেটমেন্টঃ
// যতক্ষন(আমি সত্য) {
//    স্টেটমেন্ট; 
// }
// এটাও আগেরটার মতোই তবে প্রথমেই আপনার কন্ডিশন চ্যাক করে নিবে।
// যদি মিথ্যা হয় তাহলে সরাসরি লুপ থেকে বের হয়ে যাবে কোনো কিছু জিজ্ঞাসা বা এক্সিকিউট করার আগেই, 
// আর সত্য হলে লুপের ভিতরে থেকে এক্সিকিউট করবে
// var name = 'mahmud';
// while(name =='mahmud') {
//     console.log('Inside the Loop');
//     //break;
//     name = prompt('Enter the name: ');
// }
// console.log('Out of the loop');



// // ৪। breakস্টেটমেন্টঃ
// // আপনি লুপের স্টেটমেন্ট এর ভিতরে থেকেও লুপকে কন্ট্রোল করতে পারবেন। 
// // একটা চলন্ত লুপে একটা নির্দিষ্ট টাইমে যদি আপনি চান লুপ থেকে পুরোপুরি বের হয়ে আসতে তাহলে breakস্টেটমেন্ট ব্যবহার করা হয়ঃ
// var i;
// for(i=0; i<10; i++){
// 	if(i==6){
// 		break;
// 	}
// 	console.log('num: '+i)
// }



// // ৫। continueস্টেটমেন্টঃ
// // এটাও এরকম লুপকে কন্ট্রোল করতে ব্যবহার করা হয়। 
// // কিন্তু এক্ষেত্ত্রে লুপ থেকে পুরোপুরি বের হয়ে না এসে জাস্ট সেই লুপটা স্কিপ করে যায়ঃ
// for(var i = 0; i < 10; i++) {
//     if(i == 5) {
//         console.log(i + ' is skipped');
//         continue;
//     }
//     console.log('i is now at: ' + i);
// }


// // জাভাস্ক্রিপ্টঃ অ্যারে নিয়ে সবকিছু
// // অ্যারে নন-প্রিমিটিভ/রেফারেন্স ডাটা টাইপ। আমি এগুলো নিয়ে পূর্বে লিখেছিলাম। অ্যারে একধরনের অবজেক্ট। আর অবজেক্ট মানে কি জানি? হ্যা, অবজেক্ট মানে এটার কিছু প্রপার্টিজ থাকবে। আপনি অবজেক্ট হলে আপনার হাত, কান, গলা, চোখ ইত্যাদি ইত্যাদি আপনার প্রপার্টিজ। সেভাবে অ্যারেরও কিছু প্রপার্টিজ আছে যেগুলো ইউজ করে
// // অ্যারে ডিক্লেয়ার করাঃ অ্যারে দুইভাবে ডিক্লেয়ার করা যায়। তার মধ্যে প্রথমটা খুব বেশী ইউজ করা হয় না কিন্তু জেনে রাখা ভালো
// var Name = new Array('Rahim', 'Karim', 'Rafiq', 'Jabbar');
// console.log(Name)

// // দেখুন এখানে প্রত্যেকটা ডাটার সাথে একটা নাম্বার দেখাচ্ছে। হ্যা,
// //  এটাকে বলে ইন্ডেক্স নাম্বার। ইন্ডেক্স নাম্বার সাহায্য করবে আপনাকে অ্যারে থেকে স্পেসেফিক কোনো ডাটা বের করে আনতে।

// console.log(Name[2])

// // এখন যদি আপনি স্পেসেফিক কোনো ভ্যালুও চেঞ্জ করতে চান তাহলেও পারবেন এই ইন্ডেক্স নাম্বারের সাহায্যেইঃ
// Name[2]='lamyaa';
// console.log(Name)

// // অ্যারেতে কয়টা আইটেম আছে সেটা জানার জন্যে length প্রপার্টিজ 
// //অ্যাক্সেস করতে চাই তাহলে আমাদের এভাবে লিখতে হবেঃ একে ডট নোটেশান বলে
// console.log(Name.length)

// // এই ডট নোটেশান আর ব্র্যাকেট নোটেশান সব অবজেক্ট এর বেলাতেই ইউজ হয়। 
// // তাই এগুলার ইউসেজ মাথায় রাখা অবশ্যই জরুরী। 
// // ব্র্যাকেট নোটেশান ইউজ করে এই প্রপার্টিজ অ্যাক্সেস করতে চাইলেঃ
// console.log(Name['length'])
// // নামের সাথে বেশ মিল আছে তাই আশা করি ডট নোটেশান আর ব্র্যাকেট নোটেশান মনে রাখতে হবে না।


// // এবার কিভাবে অ্যারের সবগুলো আইটেম অ্যাক্সেস করা যেতে পারে? 
// // মনে হয় আগের পর্বে লুপ নিয়ে আলোচনা করেছিলাম। 
// // একইরকম কাজ বারবার করা লাগলে নাকি লুপ ইউজ করতে হয়। হ্যা!
// // আপনি লুপ ইউজ করে ইজিলি অ্যারের সবগুলো আইটেম অ্যাক্সেস করতে পারবেনঃ
// var names=['mahmud','hossain','lamyaa'];
// var i;
// for(i=0; i<names.length; i++){
// 	console.log(names[i]);
// }


// // অ্যারেতে শেষের দিক হতে কোনো নতুন আইটেম অ্যাড করতেঃ
// var names=['mahmud','hossain'];
// console.log(names);
// names.push('lmayaa')
// console.log(names);


// //অ্যারেতে শেষের দিক হতে আইটেম রিমুভ করতেঃ
// var names=['mahmud','hossain'];
// console.log(names);
// names.pop()
// console.log(names);


// // অ্যারেতে শুরুর দিক হতে আইটেম রিমুভ করতেঃ
// var names=['mahmud','hossain','lamyaa']
// console.log(names)
// names.shift();
// console.log(names)

// // এখন শুরু আইটেম রিমুভ করায় সবার ইন্ডেক্স নাম্বার পরিবর্তন হবে খেয়াল রাখবেন।
// console.log(names[0])

// // // অ্যারেতে শুরুর দিক হতে কোনো নতুন আইটেম অ্যাড করতেঃ
// var names=['hossain','lamyaa']
// console.log(names)
// names.unshift('mahmud')
// console.log(names)

// // নির্দিষ্ট কোনো আইটেম এর ইন্ডেক্স নাম্বার জানতেঃ
// console.log(names.indexOf('lamyaa'));


// // ইন্ডেস্ক নাম্বার দিয়ে কোনো আইটেম রিমুভ করতেঃ
// console.log(names.splice(2));


// // এখানে ইনডেক্স নাম্বার কত থেকে শুরু করে কত পর্যন্ত রিমুভ করতে চাচ্ছেন সেগুলা আর্গুমেন্ট হিসেবে এখানে যাবে
// var names=['mahmud','hossain','lamyaa','me','he','we']
// console.log(names)
// console.log(names.splice(2,4))


// // আর যদি চান একটা নির্দিষ্ট ইন্ডেক্স নাম্বার থেকে শুরু করে বাকি সবগুলো রিমুভ করতে 
// // তাইলে প্রথম আর্গুমেন্টে জাস্ট যেখান থেকে রিমুভ করা শুরু করবেন সে ইন্ডেক্স নাম্বারটা দিলেই হবেঃ
// var names=['mahmud','hossain','lamyaa','me','he','we']
// // console.log(names)
// console.log(names.splice(2))


// // অ্যারে কপি করতেঃ
// // যদি একটা অ্যারে থেকে আরেকটা অ্যারে কপি করতে চাই তাহলে অনেকভাবেই করা যায়। সবচেয়ে সিম্পলভাবে(কপি বাই রেফারেন্স)ঃ
// // var newArr = arrName;

// var names=['mahmud','hossain','lamaa']
// var copynames=names;
// console.log(copynames);

// // অথবা আমরা চাইলে এভাবেও করতে পারি। সেক্ষেত্রে একটু মডিফাই করেও আপনি অ্যারে টাকে কপি করতে পারবেনঃ
// var names=['mahmud','hossain','lamaa']
// var copynames=names.slice(0,3);
// console.log(copynames);

// তবে ডিরেক্ট অ্যারে কপি করা আর স্লাইস ইউজ করে কপি করার মধ্যে একটু তফাৎ আছে। 
// ডিরেক্ট অ্যারে কপি করাকে কপি বাই রেফারেন্স বলে।
//  এখানে আমি নতুন যে অ্যারে নিয়েছি সেটা আর আগেরটা সেইম অবজেক্ট কেই রেফার করবে 
//  যদি আপনি অ্যাসাইনমেন্ট = অপারেটর ইউজ করেন। আপনি যদি যেকোনো একটাতে কিছু চ্যাঞ্জ করেন তাইলে দুইটা তেই সেটার ইফেক্ট পাবেন।
//  কারণ দুইজনই সেইম অবজেক্ট রেফার করতেছে

// newArr[0] = 'Changed Rahim'
// নতুন অ্যারেতে আইটেম চ্যাঞ্জ করার কারণে সেটা আগের অ্যারেতেও ইফেক্ট পড়েছে। 
// কারণ আসলে দুইটা অ্যারে সেইম মেমোরি লোকেশান বা সেইম অবজেক্টকেই রেফার করছে।
// arrName === newArr

// আর স্লাইস ইউজ করে কপি করাকে কপি বাই ভ্যালু বলে। এখানে শুধু ভ্যালু বা আইটেমগুলোই কপি হবে নতুন অ্যারেতে। 
// কিন্তু দুইটা অ্যারে সম্পূর্ন পৃথক পৃথক দুইটা অবজেক্ট
// আর === ইউজ করলে দেখবেন ফলস দেখাচ্ছে কারণ দুইটা সেইম অবজেক্ট না, জাস্ট ভ্যালুগুলো কপি হয়েছেঃ
// arrName === newArr


// জাভাস্ক্রিপ্টঃ ব্যাসিক অবজেক্ট
// অবজেক্ট ডিক্লেয়ার করা যায় কয়েকভাবে।
// var student={
// 	name:'mahmud',
// 	roll:12345,
// 	city:'raj'
// }
// console.log(student);

// //or
// a=student
// console.log(a)


// // এবার আসি কিভাবে অবজেক্ট অ্যাক্সেস করবেন। 
// // আমি গত পর্বে যদিও এটা নিয়ে আলোচনা করেছি, তবে এখানে এটা বেশী কাজে আসবে। 
// // আমরা দুইভাবে একটা অবজেক্ট থেকে আইটেম অ্যাক্সেস করতে পারি
// // ১। ডট নোটেশান
// // ২। ব্র্যাকেটস নোটেশান
// // এখন চলুন এই নোটেশানের বিস্তারিত আলোচনায় যাইঃ
// // ১। ডট নোটেশানঃ এখানে ডট দিয়ে একটা অবজেক্ট এর ভিতরের আইটেম অ্যাক্সেস করা হয়। 
// // এবং জাভাস্ক্রিপ্ট এ সাধারণত এই নোটেশানটাই বেশী ইউজ করা হয়। 
// // mahmud এর পুরোনাম ডট নোটেশানে অ্যাক্সেস করতে চাইলে অবজেক্ট এর নাম তারপর ডট দিয়ে পুরোনামের কীওয়ার্ড দিলেই হবেঃ

// var student={
// 	name:'mahmud',
// 	roll:12345
// }
// var a=student
// console.log(a.name)
// console.log(a.roll)


// // এখন একটা অবজেক্ট ডিক্লেয়ার করা হয়ে গেছে। 
// // এখন যদি এখানে নতুন কোনো আইটেম অ্যাড করতে চাই তাহলে কি উপায়? 
// // হ্যা আমরা দেখেছি যে অবজেক্ট এর কোন ইনডেক্স নাম্বার নাই। 
// // তাই এখানে একটার পর একটা আইটেমের সিরিয়াল মেইন্টেইন করা জরুরী না। 
// // আমরা জাস্ট কীওয়ার্ড দিয়েই যেকোনো আইটেম অ্যাক্সেস করতে পারি। 
// // একবার অবজেক্ট ডিক্লেয়ার করা হয়ে গেলে পড়ে যদি আমরা নতুন কোনো আইটেম অ্যাড করতে চাইঃ
// var student={
// 	name:'mahmud'
// }
// student.roll=12345
// var a=student
// console.log(a.roll + '  '+' ' + a.name )


// //change any predifine item value,অলরেডি আছে এমন একটা আইটেমের ভ্যালু চ্যাঞ্জ করতে চাইঃ
// var student={
// 	name:'mahmud'
// }
// student.roll=12345
// student.name='hossin'
// var a=student
// console.log(a.roll + '  '+' ' + a.name )




// // অবজেক্ট এর সবগুলো আইটেম অ্যাক্সেস করতে চাইলে, loop use
// var student={
// 	name:'mahmud',
// 	roll:12345,
// 	city:'raj',
// 	age:100
// }
// for(item in student){
// console.log(item)
// }


// // function in object
// var all={
// 	name:'mahmud',
// 	roll:12345,
// 	one:function (){
// 		console.log('i am in object functoion');
// 		console.log(this.name);
// 	}
// }
// all.one()


// এখন অবজেক্ট এতোই ফ্লেক্সিবল যে আপনি চাইলে অবজেক্ট এর ভিতরে অ্যারেও ইউজ করতে পারবেন
// আবার অ্যারের ভিতরেও অবজেক্ট ইউজ করতে পারবেন।
// var cool={
// 	name:'mahmud',
// 	arr:[1,2,3,4,5,'sssssssssssssss']
// }
// console.log(cool.arr[5])
// console.log(cool.name)



// // জাভাস্ক্রিপ্টঃ ব্যাসিক ফাংশন
// // ফাংশনকে একটা ম্যাশিনের সাথে তুলনা করতে পারেন। 
// // এখানে আপনি জাস্ট কিছু ইনপুট দিবেন আর সেটা আপনাকে আপনার মতো করে আউটপুট দিবে।
// // function funcName() {
// //    //Statements
// // }
// // এভাবে ফাংশন ডিক্লেয়ার করাকে ফাংশন স্টেটমেন্ট বলে।
// function student(){
// 	var name='mahmud'

// 	console.log(name)
// }
// student()


// // আবার এভাবেও ফাংশন ডিক্লেয়ার করতে পারিঃ
// // var funcName = function() {
// //    //Statement
// // }
// var student=function(){
// 	name='mahmud'

// 	console.log(name);
// }
// student()



// // use return keyword
// // var names;
// function student(x,y){
// 	var sum=x+y;
// 	return sum;
// }
// console.log(student(2,2));



// জাভাস্ক্রিপ্ট অ্যাডভান্সঃ ‘this’ কীওয়ার্ড
// সাধারণত একটা ফাংশনকে কিভাবে কল করা হচ্ছে সেটার উপর ভিত্তি করে this এর ভ্যালু ডিটারমাইন করা হয়। 
// আর এটার ভ্যালু ডিটারমাইন করা হয় এক্সিকিউশনের সময়।
// শুধুমাত্র নিচের এই চারটা রুলস মনে রাখবেন যেগুলো দিয়ে this এর ভ্যালু ডিটারমাইন করা যাবেঃ
// ১। গ্লোবাল রুলস
// ২। অবজেক্ট রুলস
// ৩। স্পষ্ট রুলস
// ৪। new কীওয়ার্ড রুলস
// var myCustomObj = {
//    name: 'Zonayed Ahmed',
//    age: 21,
//    job: 'Student',
//    msg: function() {
//         console.log(this.job);
//    }
// }
// myCustomObj.msg();


// var myCustomObj = {
//    name: 'Zonayed Ahmed',
//    age: 21,
//    job: 'Student',
//    anotherObj: {
//       name: 'Ahmed Zonayed',
//       msg: function() {
//          console.log('My name is: ' + this.name);
//       }
//    }
// }
// myCustomObj.anotherObj.msg();



//****************************pactics more and more 
// //a function store in a variable
// function student(name,roll,age){
// 	return 'name is :'+name+',  roll is :'+roll+',  age is: '+age;
// }
// var x=student('mahmud',12345,100);
// console.log(x);
// document.getElementById('test').innerHTML=x;


// //a function store in an array
// function one(name,age,roll){
// 	return name+age+roll;
// }
// var x=one('mahmud',12345,100);
// var arr=[1,2,3,4,5]
// arr.push(x)
// console.log(arr)
// document.getElementById('test').innerHTML=arr


// // //a function can be store in an object
// var person={

// 	name:'mahmud',
// 	one:function(){
// 		console.log('hello  '+this.name);
// 	}
// }
// var x=person;
// x.one();


// // //add a function with a variable or self invocking function
// var x=(function(){ return 'hello'})();
// console.log(x)
// //another example of summ
// var x=10+(function(){return 10})();
// console.log(x)



// //a function can be use as anher function argument
// function one(){
// 	return 'hello';
// }
// one()
// // console.log(one());

// function two(name,fun){
// 	return fun + name;
// }
// var s=two('mahmud',one());
// console.log(s);

// //another example by invoking function
// var x=10+(function(){return 10})();  //1st invoking function
// var y=function(name,fun){            //2nd function
// 	return name + fun; 
// }
// var s=y('mahmud',x)
// console.log(s);


// //higher order function concept
// function one(a){
// 	return function(b){
// 		var result =1;
// 	for (var i=0; i<a; i++){
// 		console.log(i);
// 		result *=b;
// 	}
// 	return result;

// 	}
// }
// var s=one(20);
// s();



// //concept of nested /inner-outer function
// function outer(){
// 	console.log('i am outer')
// 	function inner(){
// 		console.log('i am inner ')
// 	}
// 	inner()
// }
// outer()

// //another example ,use of inner function
// function result(a,b){
// 	function add(){
// 		return a+b;
// 	}

// 	function sub(){
// 		return a-b;
// 	}
// 	function mul(){
// 		return a*b;
// 	}
// 	function div(){
// 		return a/b;
// 	}

// 	return sub()+add()+mul()+div();
// }
// var s=result(10,2);
// console.log(s);


// //use of return statement 
// function one(name,gender){

// 	if (gender=='male'){
// 	return 	'he is '+ name+'and sex is '+gender;
//     }

		
// 	else if (gender=='female'){
// 	return 'she is '+ name+'and sex is '+gender;	
// 	}


// }
// var s=one('mahmd','male');
// var p=one('mahmuda','female');
// console.log(s);
// console.log(p);

// //same function in different way 
// function one(name,gender){

// 	var x;

// 	if (gender=='male'){
// 	x='he is '+ name+'and sex is '+gender;
//     }

		
// 	else if (gender=='female'){
// 	x='she is '+ name+'and sex is '+gender;	
// 	}
// return x;

// }
// var s=one('mahmd','male');
// var p=one('mahmuda','female');
// console.log(s);
// console.log(p);

// //fist program ,how can show output in consol and webpage
// console.log('hello')
// document.getElementById('test').innerHTML=('hello');

// //how to define and accss array
// var name=['mahmud','hossain','lamyaa','niva']
// console.log(name)
// console.log(name[0])

// console.log(this)
// function helloThis(){
// 	'use strict';
//    console.log(this);
// }

// helloThis();


// console.dir(document);
// console.log(document);

//call back function
// function one(x){
// 	two(x)
	
// }
// one('mahmud');

// function two(y){

// console.log(y);
// }

// function one(name,two){
// 	two(name);
// }

// one('mahmud',function(name){
// 	console.log('hello  '+name);
// });

// one('mahmud',function(name){
// 	console.log('hi  '+name);
// });

// application of map function

// let lol=[1,2,3,4,5]
// let arr=['mahmud','hossain','lamyaa','niva']
// let data=arr.map(x=>{
// 	console.log(x);
// 	})



