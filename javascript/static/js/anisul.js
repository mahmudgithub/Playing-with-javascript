///****************** how to chane data type
//function one(){
// var pol=2.23456789;
// 	//return 'ALALALLALAL'.toLowerCase();
// 	// return 'ALALALLALAL'.toUpperCase();
// 	// return 'ALALALLALAL'.toStringrCase();
// 	return pol.toFixed(3);
// }
// document.getElementById('one').innerHTML=one();
// console.log(one())


 // var pol=2.333334444;

// console.log(pol.toFixed(3));
// console.log(pol.toPrecision());



//***************calculate length of a string with arrrow function 
// var sos='hello wprld';
// var pol=()=>{


// 	return sos.length;
// }
// console.log(sos.length);
// document.getElementById('one').innerHTML=pol();


//*******************useing pompt method to get user input with arrow funtion and string decoretor
// var sos= prompt("Enter a string:");
// var pol=()=>{


// 	return `string is ${sos.toUpperCase()} and length is ${sos.length}`
// }
// console.log(sos.length);

// document.getElementById('one').innerHTML=pol();



//***********make a awon calculator, with prompt and parseInt method

// var first= prompt ("enter first number:");

// first=parseInt(first,10);
// var second= prompt("enter second nmber:");
// second=parseInt(second,10);
// var sum = first + second;
// var calculator=()=>{
// 	return sum;
// }
// console.log(sum);
// document.getElementById('one').innerHTML=calculator();


//**************** document.write er use in a function ,compire bellow 2 fubnction

// function sq(){

// 	var x=5;
// 	var y=5*5;
// 	 return y;
//console.log(y)
// }
// document.getElementById('one').innerHTML=sq();


// function sq(){
// 	var x=5;
// 	var y=x*x;

// 	document.write(y +"<br>");
// 	console.log(y)
// }
// sq();
// sq(); //for multiple time 
// sq();  //for multiple time 

// function sq(x,y){

// 	var sum=x+y;
// 	document.write(sum);
// }
// sq(2,2);


//**************array

//genaral format
// var name1,name2,name3,name4;
// name1='mahmud';
// name2='hossain';
// name3='cool';
// name4='bool';
// document.write(name1);
// console.log(name1)


// update_general_array_format to script_array_format

//example_1:
// var gam = new Array(5);

// gam[0]= "mahmud";
// gam[1]= 'hossain';
// gam[2]= 'cool';
// gam[3]= 'bool';
// gam[4]= 'tool';

// document.write(gam[0]);
// console.log(gam[0]);
// console.log(gam.length);

//exampl_2:

// var gam=['mahmud','hossain','cool','bool','tool']

// document.write(gam[0]);
// console.log(gam[0]);

//add new value in array index by push function
// var names=['mahmud','hossais','lol','pol']
// names.push('lamyaa');

// document.write(names[4]);
// console.log(names[4]);


//using pop function to remove any element from array

// var names=['mahmd','hossain','lol'] //actual length is 3

// names.pop();  //last element is removed

// console.log(names.length); //result length is show 2
// console.log(names[1]);
// console.log(names[2])   // result show undefine


//**************use push,pop,shift,unshift in array
//push add a new element in array of the last
//pop remove a element from array of last
// shift remove a array element from first
//unshift add a array element first

// var names=['mahmud','hossain']

// console.log(names.length);
// document.write(names.length+"<br/>");

// //use push

// names.push('lamyaa');
// console.log(names.length);
// document.write(names.length+"<br/>");

// //use pop
// names.pop();
// console.log(names.length);
// document.write(names.length+"<br/>");

// //use shift
// names.shift();
// console.log(names[0]);  //show hossai ,means mahmud is remove
// document.write(names[0]+"<br/>");


// //use unshift
// names.unshift('nowsin');
// console.log(names[0]);  //show nowsin ,means nowsin add 0 index
// document.write(names[0]);

//********** slice method, remove first element from array

// var names=['mahmud','hossan','lamyaa','nowsin','jeba','lima']

// console.log(names) 

// var names1=names.slice(2);
// //var names1=names.slice(1,3);
// console.log(names1)


//*********use sort method in alphabet or string

// var names=['a','c','b','z','o','p']
// console.log(names)  //otput show before sorted

// // var names1=names.sort();
// // console.log(names1);   //output show after soted

// //sort with reverse 
// var names=['a','c','b','z','o','p']
// console.log(names)  //otput show before sorted

// var names1=names.sort();
// names1.reverse();
// console.log(names1)

// use sort method in number

// var numbers=[1,4,8,5,6,29,0];
// numbers.sort(function (a,b){
// 	return a-b;
// 	// return b-a;
// });
// console.log(numbers)

//*****object 

// make a single student object
// var student1={
// name:'mahmd',
// roll:12345,
// age:25,
// city:'rajshahi',
// language:['arabic','bangla','english','japani']
// }
// console.log(student1.name);

//make multile student objexcts
// var student1={
// name:'mahmd',
// roll:1,
// age:20,
// city:'rajshahi',
// language:['arabic','bangla','english','japani']
// }

// var student2={
// name:'hossai',
// roll:2,
// age:25,
// city:'pabna',
// language:['arabic','bangla','english','japani']
// }
// var student3={
// name:'nannu',
// roll:3,
// age:30,
// city:'dhaka',
// language:['arabic','bangla','english','japani']
// }

// console.log(student1.name);
// console.log(student2.city);
// console.log(student3.language);
// document.write(student1.language)

//above object alternatve idea, by using function constructor

// function students(name,roll,city,language) {

// 	this.name=name;
// 	this.roll=roll;
// 	this.city=city;
// 	this.language=language;
// }
// var student1=new students('mahmud',1,'rajshhai',['bangla','arabic','english']);
// var student2=new students('hossain',2,'pabna',['arabic','math','english']);

// console.log(student1.name);


//***********local stoage multidata save formula

// var profile={
// 	name:'mahmud',
// 	roll:1234
// };
// console.log(typeof profile)
// var json=JSON.stringify(profile)
// console.log(typeof json)
// localStorage.setItem('cool',json);


//**************************work with variable(var/let/consts)****************
//**************************work with data type conversion( string to other, upper,lower...)*********
//**************************work with condition(if/else/elseif) ****************
//**************************work with switch****************
//**************************work with for loop ****************
//**************************work with function****************
//**************************work with simple array construction and arry methods(length,push,pop,shift)******
//**************************work with how object creatre and work****************
//**************************work with DOM elements, getElementBy(id,TagName,ClassName),QuerySelector******

//***getElementById use
//**format one
// document.getElementById('one').innerHTML= "cool boy" ;
 //**format two
// var sos=document.getElementById('one')
// sos.innerHTML='cool boysssss';
//***getElementByIdTagName
// document.getElementsByTagName('p')[0].innerHTML='LOL';  //tag name h1 
// document.getElementsByTagName('h1')[0].innerHTML='LOL';  //tag name p
//***getElementByIdClassName
// document.getElementsByClassName('pop')[0].innerHTML='LOL';  //class name pop
//****	Queryselector
//this selector work for both(id,tagname and classname)
//**for id selector  use '#' HASS before id name
//**for tag selector use 'tagname' TAGNAME ,no need anythong before tagNane
//**for class select use '.' DOT before className
// document.querySeslector('#one').innerHTML='i like you'; //select by id
// document.querySelector('.pop').innerHTML='i like you'; //select by class
// document.querySelector('h1').innerHTML='i like you'; //select by tagNmae
//**************************work with Button onClick property****************
// a work hapend when click on button
// function one(){
// document.querySelector("#test").innerHTML='you clicked button_1';
// }
// function two(){
// document.querySelector("#test").innerHTML='you clicked button_2';
// }

// **************************work with DOM(create,adding,remove)****************
// **************************work with use image****************
// var pol =document.querySelector("#test");
// function one(){

// pol.src="static/image/one.PNG"; 

// }
// **************************work with use css****************
//**************************work with use audio****************
//**************************work with use animation****************
//**************************work with use lisener****************
//**************************work with use for_eatch function****************
//**************************work with use map and filter function****************
//**************************work with use arrow function of ES6****************
//**eaxmple1_
//let fun=()=>{
// 	return 'i am arrow function';
// }
// document.getElementById('test').innerHTML=fun();

//example_2.more simple above program
// let fun=()=>'i am arrow functionssssssss'
// document.querySelector("#test").innerHTML=fun();

//parameter pass n arrow function

// let fun=(x,y)=>{

// 	return x+y;
// }
// document.getElementById('test').innerHTML=fun(2,5);

//OR
// let fun=(x,y)=>x+y;
// document.getElementById('test').innerHTML=fun(2,5);

