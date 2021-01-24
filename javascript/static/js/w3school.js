//DETAILS OF JAVASCRIPT OBJECT
//1. HOW TO CREATE A SIMPLE OBJECT
// var person={
// 	name:'mahmud',
// 	roll:12345,
// 	city:['rajshahi','pabna','dhaka']
// };
// var obj=person
// console.log(obj.name);
// console.log(obj.city);

//2.method_1 EASY WAY TO DECLIRE AN OBJECT, IS CALLED 'Object Literal' FORMAT
// This is the easiest way to create a JavaScript Object.
// Using an object literal, you both define and create an object in one statement
// An object literal is a list of name:value pairs (like age:50) inside curly braces {}.

// var person={name:'mahmud',city:'rajshahi',roll:['123','456','789']};
// var x=person
// console.log(x.roll);

//3.METHOD_2, USING NEW KEY WORD
// Using the JavaScript Keyword new
// The following example also creates a new JavaScript object with four properties
// var person=new Object();   //Object er O must be capital ,otherwise error show
// person.name='mahmud';
// person.roll=12345;
// person.city=['raj','dha','pabna'];
// var x=person
// console.log(x.name);
// console.log(x.city);

//4.PASS OBJECT PARAMETER VALUE FROM OUTSIDE

// var person={name:'mahmd',age:'',city:'rajshhai'};
// var x=person
// x.age=12;
// console.log(x.age);

//OR
// var person={name:'mahmd',age:100,city:'rajshhai'};
// var x=person
// x.age=25;
// console.log(x.age);


//5.ACCESS OBJECT PROPERTICS IN TWO WAY

//WAY ONE by using (x.name)
// var person={name:'amhmud',roll:123};
// var x=person
// console.log(x.name);

//WAY TWO by usins x['name'])
// var person={name:'amhmud',roll:123};
// var x=person
// console.log(x['name']);

//6.ADDING NEW PROPERTICS IN OBJECT
// var person={name:'amhmud',roll:123};
// person.city=['raj','djha','pabna'];
// var x=person
// console.log(x.name);
// console.log(x.city);

//7.DELETE A PROPERTCS FROM OBJECT
//The delete keyword deletes both the value of the property and the property itself.
// var person={name:'amhmud',roll:123};
// delete person.name;
// var x=person
// console.log(x.name);
// console.log(x.roll);

//8.*****JavaScript Object Methods
// The this Keyword
// In a function definition, this refers to the "owner" of the function.
// In the example above, this is the person object that "owns" the fullName function.
// In other words, this.firstName means the firstName property of this object.
//EXAMPLE_1
// var person={
// 	name:'mahmd',
// 	roll:12345,
// 	details: function(){
// 		return "my name is" + this.name +"and roll is" +this.roll;  //MUST USE THIS KEY WORD IF FUNTION IN OBJECT

// 	}
// };

// var x=person
// console.log(x.details());

// //EXAMPLE_2
// var person={
// 	name:'mahmd',
// 	roll:12345,
// 	details: function(){
// 		return `my name is ${this.name} and roll is ${this.roll}`;  //USE THIS 

// 	}
// };

// var x=person
// console.log(x.details());

//9.WE CAN ADD A FUNCTION INTO OBJECT FROM OUTER
// var person = {
//   firstName: "mahmd",
//   lastName : "hossain",
//   id     : 5566,
// };
// person.detail = function() {
//   return this.firstName + " " + this.lastName;
// };
// var x=person
// console.log(x.detail());
// document.getElementById("test").innerHTML =x.detail(); 


//ANOTHER EXAMP0LE
// var person={
// 	name:'mahmud',
// 	roll:12345,
// };
// person.details=function(){
// 	return `${this.name} and ${this.roll}`;  //DONT FORGATE TO USE THIS KEY WORD,CAUSE FUNCTION DECLIRE IN OBJECT

// };
// var x=person
// console.log(x.details());  // DONT FORGATE TO USE () BEFORE DETAILS,CAUSE IT I A FUNCTION


//10. FOR LOOP IN OBJECT
// var y;
// var person={name:'mahmud',roll:12345,city:'raj'};
// var x;
// for(x in person){
// 	y+=person[x]+" ";}
// console.log(y);
// document.getElementById("test").innerHTML = y;


//11.APPLICATION OF "this" Keyword
//IT USE WHEN DEFINE A FUNCTION IN A OBJECT
// var person={
// 	names:'mahmud',
// 	roll:12345,
// 	city: function(){
// 		return `${this.names} and ${this.roll}`;
// 	}
// };
// var x=person
// console.log(x.city());
// document.getElementById("test").innerHTML=x.city();

//12. Using Object.values()
//Any JavaScript object can be converted to an array using Object.values()
// var person={
// 	name:'mahmud',
// 	roll:12345,
// 	city:'rajshahai'
// };
// var arr=Object.values(person);
// console.log(arr);

//13.Using JSON.stringify()
//Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify()
// var person={
// 	name:'mahmud',
// 	roll:12345,
// 	city:'rajshahai'
// };
// var x=JSON.stringify(person);

// console.log(x);


//14.Stringify Dates
//JSON.stringify converts dates into strings:
// var person={
// 	name:'mahmud',
// 	today:new Date(),
// 	//15.Stringify Functions
// };
// var x=JSON.stringify(person);
// console.log(x);


//15.JSON.stringify will not stringify functions:
// var person={
// 	name:'mahmud',
// 	roll:12345,
// 	city:function(){
// 		return 50;
// 	}
// };
// var x=JSON.stringify(person);
// console.log(x); //not show 50

//resolve funtion strinfy to array, by using //person.age = person.age.toString();//
// var person={name:'mahmud',age: function () {return 50;}};
// person.age = person.age.toString();
// var x=JSON.stringify(person);
// console.log(x); 
// document.getElementById("test").innerHTML = x;


//16.Stringify Arrays
//It is also possible to stringify JavaScript arrays:
// var arr=['one','two','three','four'];
// var x=JSON.stringify(arr);
// console.log(arr);

//17.JavaScript Accessors (Getters and Setters)
//JavaScript Getter (The get Keyword)
//This example uses a lang property to get the value of the language property.

//example_getter_method
// var person={
// 	name:'mahmud',
// 	roll:12345,
// 	get fullName(){
// 		return this.name;  //mus use this keyword, cause get fyuntion declire in object
// 	}
// };
// var x=person
// console.log(x.fullName);

//example_setter_method
// var person = {
//   firstName: "John",
//   lastName : "Doe",
//   language : "",
//   set lang(value) {
//     this.language = value;
//   }
// };
// // Set a property using set:
// var x=person;
// x.lang = "eng";
// // Display data from the object:
// document.getElementById("test").innerHTML = x.language;
// console.log(x.language);


//18. DIFFERENCE BTWEEN GET/SET AND OBJECT_FUNCTION
//access fullName as a function: person.fullName().
//access fullName as a property: person.fullName.#

// var person={
// 	name:'mahmud',
// 	age:function(){

// 		return this.name;
// 	}
// };
// var x=person;
// console.log(x.age());  //here use  "x.age()" , it means age here fnction 

// var person={
// 	name:'mahmud',
// 	get age (){

// 		return this.name;
// 	}
// };
// var x=person;
// console.log(x.age); //but here use "x.age" ,it means age here proterics


//19. Why Using Getters and Setters?
// It gives simpler syntax
// It allows equal syntax for properties and methods
// It can secure better data quality
// It is useful for doing things behind-the-scenes


//20.JavaScript Object Constructors
// function person(fname,lname,city){
// 	this.fname=fname
// 	this.lname=lname
// 	this.city=city
// }
// var sos= new person('mahmud','hossin','raj'); //must use new keyword
// console.log(sos.lname)


// 21. mutiple objects in constructor
// Object Types (Blueprints) (Classes)
// The examples from the previous chapters are limited. They only create single objects.
// Sometimes we need a "blueprint" for creating many objects of the same "type".
// The way to create an "object type", is to use an object constructor function.
// In the example above, function Person() is an object constructor function.
// Objects of the same type are created by calling the constructor function with the new keyword:
// function person(fname,lname,age){
// 	this.fname=fname
// 	this.lname=fname
// 	this.age=age
// }
// var one=new person('mahmud','hossain',26);
// var two=new person('lamyaa','nowsin',30);
// console.log(one.fname +"  "+ two.fname);


// 22.Adding a Property to an Object
// function person(fname,lname){
// 	this.fname=fname
// 	this.lname=lname
// }
// var one=new person('mahmud','hossain');
// console.log(one.fname);
// one.age=26            //here new parameetr added to object by multipling with object and after object define
// console.log(one.age);


//23.Adding a Property to a Constructor
//You cannot add a new property to an object constructor the same way you add a new property to an existing object
// function person(fname,lname){
// 	this.fname=fname;
// 	this.lname=lname;
// }
// person.age='26'; //here new parameetr added to construtor by multipling with constructor_function and before object define
// var one=new person('mahmud','hossain');
// console.log(one.fname);
// console.log(one.age);

//ANOTHRER
// function person(name,roll){
// 	this.name=name;
// 	this.roll=roll;
// 	this.age='26';
// }
// var sos=new person('mahmud',12345);
// console.log(sos.age);

//24.adding funtion/method in object
//Adding a Method to an Object
// function person(fname,lname){
// 	this.fname=fname
// 	this.lname=lname
// }
// var one=new person('mahmud','hossain');
// console.log(one.fname);
// one.age=function(){
// 	return this.fname+ "  " + this.lname;
// }
// console.log(one.age());

//OR
// function person(name,roll){
// 	this.name=name
// 	this.roll=roll
// }
// var sos=new person('mahmud',12345);
// console.log(sos.name);
// sos.age=function(){
// 	return this.name + this.roll;
// }
// console.log(sos.age());


// 25.*************Adding a Method to a Constructor
// You cannot add a new method to an object constructor the same way you add a new method to an existing object.
// Adding methods to an object constructor must be done inside the constructor function:
// function person(name,roll,city){
// 	this.name=name;
// 	this.roll=roll;
// 	this.city=function(){    //must method added in construtor
// 		return this.name+this.roll;
// 	}};
// var sos=new person('mahmd',12345);
// console.log(sos.city());

// 26. change by nehod 
// function person(name,roll,age){
// 	this.name=name;
// 	this.roll=roll;
// 	this.city=function(serial){
// 		this.roll=serial;
// 	}};
// var sos=new person('mamud',12345);
// sos.city(101010);  //Change last city
// console.log(sos.roll);


//27.Prototype Inheritance
// All JavaScript objects inherit properties and methods from a prototype:
// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype
// Person objects inherit from Person.prototype
// The Object.prototype is on the top of the prototype inheritance chain:
// Date objects, Array objects, and Person objects inherit from Object.prototype.
//The JavaScript prototype property allows you to add new properties to object constructors:
// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// Person.prototype.lang = "English";

// var sos = new Person("John", "Doe", 50, "blue");
// console.log(sos.lang);
//ADD MULTIPLE PARAMEETR IN OBJECT
// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// Person.prototype.lang = "English";
// Person.prototype.city = "usa";
// Person.prototype.roll =100;

// var sos = new Person("John", "Doe", 50, "blue");
// console.log(sos.lang);
// console.log(sos.city);
// console.log(sos.roll);


// 28.The JavaScript prototype property also allows you to add new methods to objects constructors:
// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// Person.prototype.name = function() {
//   return this.firstName + " " + this.lastName
// };

// var sos = new Person("John", "Doe", 50, "blue");
// console.log(sos.name());


//MULTIPLE METHOD PASSED TO CONSTRUCTOR
// function person(name,roll){
// 	this.name=name;
// 	this.roll=roll;
// };
// person.prototype.cool = function(){
// 	return this.name + this.roll
// };
// person.prototype.pol = function(){
// 	return this.name + this.roll
// };
// person.prototype.tol = function(){
// 	return this.name + this.roll
// };
// var sos = new person('mahmud','1234');
// console.log(sos.cool());
// console.log(sos.pol());
// console.log(sos.tol());


//29.JavaScript Function Definitions
// JavaScript functions are defined with the function keyword.
// function person(name,roll){
// 	return `nam is ${name} and roll is ${roll}`;
// }
// var sos=person('mahmud',12345);
// console.log(sos);


// 30.anonymous function
// The function above is actually an anonymous function (a function without a name).
// Functions stored in variables do not need function names. They are always invoked (called) using the variable name.
// The function above ends with a semicolon because it is a part of an executable statement.
// var sos=function(x,y){return x*y;}
// var pos=sos(2,10);
// console.log(pos);


//31.The Function() Constructor
// As you have seen in the previous examples, JavaScript functions are defined with the function keyword.
// Functions can also be defined with a built-in JavaScript function constructor called Function().
// var sos=new Function('a','b', "return a*b" );
// var pol=sos(5,20);
// console.log(pol);


//32.Function Hoisting
// Hoisting applies to variable declarations and to function declarations.
// Because of this, JavaScript functions can be called before they are declared:
// console.log(pol);
// var pol=sos(10,10);
// var sos=function(x,y){return x*y};


// 33.Self-Invoking Functions
// Function expressions can be made "self-invoking".
// A self-invoking expression is invoked (started) automatically, without being called.
// Function expressions will execute automatically if the expression is followed by ().
// (function (){console.log('hello world')})();

// 34.Functions are Objects
// The typeof operator in JavaScript returns "function" for functions.
//The arguments.length property returns the number of arguments received when the function was invoked:
// function person(x,y,z){return arguments.length;};
// console.log(person(2,5,5));
// console.log(person(2,5));
// console.log(person(2));

//The toString() method returns the function as a string:
// function person(x,y){
// 	return x*y;
// };
// //var sos=person(5,5);
// console.log(person.toString());


// 35.Arrow Functions
//You don't need the function keyword, the return keyword, and the curly brackets.
// Arrow functions do not have their own this. They are not well suited for defining object methods.
// Arrow functions are not hoisted. They must be defined before they are used.
// Using const is safer than using var, because a function expression is always constant value.
// You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:
//ARROW FUNTION WITHOUT RETURN KEYWORD
// const sos=(x,y)=>x*y;
// const x=sos(5,5);
// console.log(x);

//ARROW FUNCTION WITH RETURN KEYWORD
// const sos=(x,y)=>{return x*y};
// const x=sos(5,5);
// console.log(x);


//36.The JavaScript call() Method
// The call() method is a predefined JavaScript method.
// It can be used to invoke (call) a method with an owner object as an argument (parameter).
//With call(), an object can use a method belonging to another object.

//simple call method
// var person={
// 	name:'mahmud',
// 	roll:'12345'
// }
// var person1={
// 	age:26,
// 	city:'raj'
// }
// var person2={
// lang:'bnagla',
// color:'black'
// }
// var all={
// 	details:function(){
// 		return this.name + this.roll;
// 	}
// }
// var x=all.details.call(person);
// console.log(x);


// 38.The call() Method with Arguments
// var person={
// 	name:'mahmud',
// 	roll:12345
// }
// var person1={
// 	city:'raj',
// 	age:26
// }
// var all={
// 	details:function(lang,color){
// 		return this.name + this.roll + lang + color;
// 	}
// };
// var sos=all.details.call(person,'bangla','white');
// console.log(sos);


//39.The JavaScript apply() Method
// The apply() method is similar to the call() method (previous chapter).
//SIMPLE APPLY METHOD EXAMPLE
// var person={
// 	name:'mahmud',
// 	roll:12345
// }
// var person1={
// 	age:26,
// 	city:'raj'
// }
// var all={
// 	details:function(){
// 		return this.name + this.roll;
// 	}
// };
// var sos=all.details.apply(person);
// console.log(sos);



//40.The Difference Between call() and apply()
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

// The apply() Method with Arguments
// The apply() method accepts arguments in an array:
// var person={
// 	name:'mahmud',
// 	roll:12345
// }
// var person1={
// 	age:26,
// 	lang:'bangla'
// }
// var all={
// 	details:function(color,sex){
// 		return this.name + this.roll + color + sex;
// 	}
// };
// var sos=all.details.apply(person,['red','male']);  // here parameter given by array
// console.log(sos);

//The call() method takes arguments separately.
// var person={
// 	name:'mahmud',
// 	roll:12345
// }
// var person1={
// 	age:26,
// 	lang:'bangla'
// }
// var all={
// 	details:function(color,sex){
// 		return this.name + this.roll + color + sex;
// 	}
// };
// var sos=all.details.call(person,'red','male');  // here parameter given by separatelly
// console.log(sos);


// 41.simple class with method example
// Use the keyword class to create a class.
// Always add a constructor() method.
// class person{
// 	constructor(name,roll){
// 		this.name=name;
// 		this.roll=roll;
// 	}};
// var sos=new person('mahmud','12345');
// console.log(sos.name);


//42.The Constructor Method
// The constructor method is a special method:
// It has to have the exact name "constructor"
// It is executed automatically when a new object is created
// It is used to initialize object properties
// It if you do not define a constructor method, JavaScript will add an empty constructor method.
// class person{
// 	constructor(x,y){
// 		this.x=x;
// 		this.y=y;
// 	}};
// var sos=new person(5,5);
// console.log(sos.x+sos.y);


//43.Class Methods
//Class methods are created with the same syntax as object methods.
// class person{
// 	constructor(name){
// 		this.name=name;
// 	}
// 	age(){
// 		return this.name;
// 	}};
// var sos=new person('mhmud');
// console.log(sos.age());


//44.Class Inheritance
// To create a class inheritance, use the extends keyword.
// The super() method refers to the parent class.
// By calling the super() method in the constructor method, 
// we call the parent's constructor method and gets access to the parent's properties and methods.
// class one{             //create a class with constructor must use
// 	constructor(name){
// 		this.name=name;
// 	}
// 	sos(){                 //create a method in class 
// 		return this.name ;
// 	}
// }
// class two extends one{          //inherate class one by extends keyword
// 	constructor(city,name){
// 		super(name);            //must use super keyword to calling parent clss
// 		this.city=city;
// 	}
// 	show(){                      //another method in class two
// 		return this.sos() + this.city;
// 	}
// };
// var pos=new two('mahmud','rajshahi');
// console.log(pos.show());

//another example
// class person{
// 	constructor(name,age){
// 		this.name=name;
// 		this.age=age;
// 	}
// }
// class student extends person{
// 	constructor(name,age){
// 		super(name,age);
// 	}
// 	show(){
// 		return this.name+this.age;
// 	}};
// var x=new student('mahmud',26);
// console.log(x.show());



function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);

document.getElementById("test").innerHTML = result;