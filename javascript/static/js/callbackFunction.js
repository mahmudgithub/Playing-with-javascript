// link:https://js.zonayed.me/daily/post-13 

// কলব্যাক(Callback) ফাংশন**************************
//কলব্যাক ফাংশনের মানে এক কথায় এটা এমন একটা ফাংশন যেটা আরেকটা ফাংশন এক্সিকিউট হওয়ার পর
// এক্সিকিউট হয়। আর এজন্যেই এটার নাম কলব্যাক ফাংশন।
//আমরা জাভাস্ক্রিপ্ট এ হাইয়ার অর্ডার ফাংশনের কথা জানি। এখানে ফাংশনও অবজেক্ট।
// আর একটা ফাংশনকে আরেকটা ফাংশন রিটার্ণ করতে পারে আবার একই সাথে একটা ফাংশন আর্গুমেন্ট হিসেবে 
//আরেকটা ফাংশনকেও নিতে পারে। আর যখনি এরকম একটা ফাংশন আরেকটা ফাংশনকে আর্গুমেন্ট হিসেবে নেয়,
// তখনি আমরা সেই আর্গুমেন্টে যাওয়া ফাংশনটাকে কলব্যাক ফাংশন বলি।
//এখন কলব্যাকের কাজটা কি? আমরা জাভাস্ক্রিপ্ট এর অ্যাসিনক্রোনাস আচরণের কথা জানি।
// জাভাস্ক্রিপ্ট কোনো কাজ করতে সময় লাগলে সেখানে অপেক্ষা না করে পরের কোডে চলে যায়ঃ

// When to Use a Callback****************************
// The examples above are not very exciting.
// They are simplified to teach you the callback syntax.
// Where callbacks really shine are in asynchronous functions, 
// where one function has to wait for another function 
// (like waiting for a file to load).

// const fn=()=>{
//     console.log('start');
//     setTimeout(()=>{console.log('first line');},5000);
//     setTimeout(()=>{console.log('second line');},3000)
// }
// fn()
// এই কোডটা রান করালে জাভাস্ক্রিপ্ট এর অ্যাসিনক্রোনাস আচরণের জন্যে এরকমভাবে পরেরটা আগে,
//  আর আগেরটা পরে দেখাবেঃ\

//main structure of call back function
// const fn=(x)=>{
//     // console.log(x());
//     x();
// }
// const fn2=()=>{
//     return 'hello'
// }
// fn(fn2)
//on the above we declire two function , fn2 is call back function so it first include
//calling function fn as value/argument then let a variable x put function fn as a parameter 
//at last x keep in main functio as callbackfunction


//first example of call back function
//এখন এখানে আমাদের কি সমস্যা হতে পারে সেটা আমরা জানি। আমরা যদি কোনো ডাটা রিমোট 
//কোনো সার্ভার থেকে কোথাও দেখাতে চাই, তাহলে জাভাস্ক্রিপ্ট এর অ্যাসিনক্রোনাস আচরনের কারণে
// ডাটা রিমোট সার্ভার থেকে আসার আগেই ডাটা দেখানোর লাইনে চলে যাবে। আর সেখানে যেহেতু ডাটা 
//এখনো আসে নাই তাই যেরকমটা চাচ্ছিলাম সেরকম ফলাফল দেখাবে না। এররও আসতে পারে। 
//আর এখানেই কলব্যাক ফাংশনের খেলা।
//কলব্যাকের ফাংশনের সংজ্ঞা থেকে আমরা জেনেছিলাম এটা আরেকটা ফাংশন এক্সিকিউট হলে পরেই এক্সিকিউট হয়।
// আর তাই আমরা এখানে এই টেকনিকটা ইউজ করে এরকম পৃথক পৃথকভাবে দুইটা ফাংশন লিখেও কলব্যাকের 
//মাধ্যমে ঠিক যেসময় ফাংশনটাকে কল করা দরকার সেসময়েই করতে পারবোঃ
// const fn=(x)=>{
//     console.log('start');
//     setTimeout(()=>{console.log('i am mahmud'); 
//     x();},3000);}

// const fn2=()=>{
//     console.log('i am hossain');
// }
// fn(fn2)
//আমরা এখানে আমাদের মেইন ফাংশন কলের ভিতরে আর্গুমেন্ট হিসেবে আমাদের ফাংশনটাকে পাস করে দিলাম।
// আর সেটা পরে ঠিক যেখানে দরকার সেখানেই কল করলাম। এখানে এই fn2()ফাংশনটাই 
//কলব্যাক ফাংশন হয়ে গেলো। এটা আমাদের মনের মতো ফলাফল দিবে। মানে একটার পরে আরেকটা।
// এটা ঠিকই ৩ সেকেন্ড ওয়েট করবে তারপর ফলাফল দিবে। কিন্তু সিরিয়াল মেইন্টেইন করে।
//প্রথমে প্রমিস শেষ হবে, সেখান থেকে ডাটা আসবে, তারপর কলব্যাক



//বাস্তব উদাহরণঃ**********************
//ধরি আমরা বাইরের কোনো রিমোট সার্ভার থেকে ডাটা এনে দেখাতে চাচ্ছি এরকমঃ
// const userInfo = getSomeData('https://aremoteserver.com');
// আমি আসলে একটা রিকোয়েস্ট এর মাধ্যমে ইউজারের কিছু ইনফো আনতে চাচ্ছি। 
// আর সেই ইনফোগুলো userInfoনামক ভ্যারিয়েবলে স্টোর করলাম। এখন আমি পরের লাইনে userInfoদেখাবোঃ

// const userInfo = getSomeData('https://aremoteserver.com');
// console.log(userInfo);

// এখন জাভাস্ক্রিপ্ট এর অ্যাসিনক্রোনাস আচরণের কারণে এখানে কি হতে পারে? 
// হ্যা ঠিকভাবেই ধারণা করতে পেরেছেন। এখানে বাইরের কোনো সার্ভার ডাটা আনতে কিছু সময় লাগবে। 
// আর এরমধ্যেই জাভাস্ক্রিপ্ট সেটার জন্যে অপেক্ষা না করে পরের লাইনের কন্সোল লগ এক্সিকিউট করে ফেলবে। 
// আর দেখুন এই কন্সোল লগে আমরা এমন কিছু লগ করতে চাচ্ছি যেটা আগের সেই লাইনের কোডের সাথে সম্পর্কযুক্ত।
//  এখন আগের লাইনের কোড তো জাস্ট ট্রিগার হয়েছে, ডাটা না আসতেই পরের লাইন এক্সিকিউট হয়ে গেছে।
//   স্বাভাবিকভাবেই এই অবস্থায় আমরা undefinedই দেখতে পাবো।
// এখানে আমরা যে অ্যাপিআই বা যার মধ্য দিয়ে এই রিমোট সার্ভারে রিকোয়েস্ট করবো সেগুলো বেশীরভাগই এরকম পরিস্থিতিতে এড়ানোর জন্যে কলব্যাক ফাংশন ব্যবহার করে। আপনি এভাবে রিকোয়েস্ট করবেন, তারপর এর সাথেই আবার আরেকটা ফাংশন পাস করবেন, যেটা আসলে কলব্যাক ফাংশন। আর তাই আগের ডাটা আসার পরেই এই কলব্যাক চলবে। আর তাই এই কলব্যাক ফাংশনের আর্গুমেন্ট হিসেবেই রিমোট সার্ভার থেকে আসা ডাটাগুলো পাস করা হয়। এখন এই ফাংশনের ভিতর থেকে আমরা নিরাপদে সেই ডাটা অ্যাক্সেস করতে পারি যেহেতু এটা একমাত্র আগের ফাংশন এক্সিকিউট হওয়া শেষ হলেই একমাত্র রান করেঃ
// getSomeData('https://aremoteserver.com', (userInfo) => {
//    console.log(userInfo);
// });
// এখানে (userInfo) => {…}পুরোট হচ্ছে কলব্যাক ফাংশন। আর এটার ভিতর থেকেই আমরা ঠিকমতো রিমোট সার্ভার থেকে আসা অ্যাক্সেস করতে পারবো।


//more pactics of callback function
//link:https://www.w3schools.com/js/tryit.asp?filename=tryjs_callback4 
//es5 style
// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
//   myCalculator(5, 5, myDisplayer);
//A callback is a function passed as an argument to another function.
// Using a callback, you could call the calculator function (myCalculator) 
// with a callback, and let the calculator function run the callback after 
// the calculation is finished:
// In the example above, myDisplayer is the name of a function.
// It is passed to myCalculator() as an argument.
// When you pass a function as an argument, remember not to use parenthesis.
// Right: myCalculator(5, 5, myDisplayer);
// // Wrong: myCalculator(5, 5, myDisplayer());.
//es6 style
// function one(num1, num2, x) {let sum = num1 + num2; x(sum);}
// function two(some) {console.log(some);}
// one(5, 5, two);



// const fun1=()=>{
//     return 'hello';
// }
// const fun2=(x)=>{
//     console.log(x());
// }
// fun2(fun1)


//link:https://www.impressivewebs.com/callback-functions-javascript/ 
// function mySandwich(param1, param2, callback) {
//     console.log('Started eating my sandwich. It has: ' + param1 + ', ' + param2);
//     callback();
//   }
  
//   mySandwich('ham', 'cheese', function() {
//     console.log('Finished eating my sandwich.');
//   });



//if define call back function but not use , console show error************
// function mySandwich(param1, param2, callback) {
//     console.log('Started eating my sandwich. It has: ' + param1 + ', ' + param2);
//     callback();
//   } 
//   // Missing required argument. Check the browser's developer tools for the error message: Uncaught TypeError: callback is not a function at mySandwich
//   mySandwich('ham', 'cheese');



//handel unuse callback function ********************
// function mySandwich(param1, param2, callback) {
//     console.log('Started eating my sandwich. It has: ' + param1 + ', ' + param2);
//     if (callback) {
//       callback();
//     }
//   }
//   // No third argument, but no error because we check for the callback first.
//   mySandwich('ham', 'cheese');




//links:vhttps:www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/v 
//What is a Callback Function?
//In JavaScript, functions are objects. Can we pass objects to functions as parameters? Yes.
//So, we can also pass functions as parameters to other functions and call them inside
// the outer functions. Sounds complicated? Let me show that in an example below:
// function lol(callback){
//     console.log('hello');
//     callback();
// }
// function pol(){
// }
// lol(pol)
//The lol( ) function takes another function as a parameter and calls it inside.
// This is valid in JavaScript and we call it a “callback”. So a function that is 
//passed to another function as a parameter is a callback function. 
//Why do we need Callback Functions?
//JavaScript runs code sequentially in top-down order. However, there are some cases
//that code runs (or must run) after something else happens and also not sequentially. 
//This is called asynchronous programming.
//Callbacks make sure that a function is not going to run before a task is completed
// but will run right after the task has completed. It helps us develop asynchronous
// JavaScript code and keeps us safe from problems and errors.
//In JavaScript, the way to create a callback function is to pass it as a parameter 
//to another function, and then to call it back right after something has happened or 
//some task is completed. Let’s see how…
// How to create a Callback
// To understand what I’ve explained above, let me start with a simple example. 
// We want to log a message to the console but it should be there after 3 seconds.

//asychonus function
// const fn=()=>{console.log('hello');}
// setTimeout(fn,3000)
//There is a built-in method in JavaScript called “setTimeout”, 
//which calls a function or evaluates an expression after a given period of time 
// (in milliseconds). So here, the “message” function is being called after 3 seconds
//  have passed. (1 second = 1000 milliseconds)
// In other words, the message function is being called after something happened 
// (after 3 seconds passed for this example), but not before. So the message function 
// is an example of a callback function.

// What is an Anonymous Function?
// Alternatively, we can define a function directly inside another function,
//  instead of calling it. It will look like this:
// setTimeout(()=>{console.log('i am animpnus function');},3000)
//As we can see, the callback function here has no name and a function 
//definition without a name in JavaScript is called as an “anonymous function”. 





//link:https://adrianmejia.com/callbacks-concurrency-in-javascript-node/ 
//all the asynchronous functions use a callback (or promises).
//A callback is a function that is passed as an argument to another function.
//Callbacks are also known as higher-order function.
// example:
// const compute = (n1, n2, callback) => callback(n1, n2);
// const sum = (n1, n2) => n1 + n2;
// const product = (n1, n2) => n1 * n2;
// console.log(compute(5, 3, sum));     // ↪️  8
// console.log(compute(5, 3, product)); // ↪️  15
//As you can see the function compute takes two numbers and a callback function.
// This callback function can be sum, product and any other that you develop that 
//operates two numbers.As you can see the function compute takes two numbers and 
//a callback function. This callback function can be sum, product and any other that 
//you develop that operates two numbers.


// const fn=(callback)=>callback();
// const sum=()=> 'hello world'
// console.log(fn(sum));


// const fn=(callback)=>{ return callback();}
// const sum=()=> { return 'hello world'}
// console.log(fn(sum));



// const mainfn=(x,y,lol)=> lol(x,y);
// const sum=(x,y)=> x+y;
// const sub=(x,y)=> x-y
// console.log(mainfn(2,2,sum));
// console.log(mainfn(5,2,sub)); 

//Callback Advantages*************************
//Callbacks can help to make your code more maintainable if you use them well. They will also help you to:
// Keep your code DRY (Do Not Repeat Yourself)
// Implement better abstraction where you can have more generic functions like compute that can handle all sorts of functionalities (e.g., sum, product)
// Improve code readability and maintainability
//Asynchronous callbacks************************
// An asynchronous callback is a function that is passed as an argument to
//  another function and gets invoke zero or multiple times after certain events happens.

// const id = setInterval(() => console.log('tick ⏰'), 1e3);
// setTimeout(() => clearInterval(id), 8e3);


// Callbacks are a way to make sure a particular code doesn’t execute 
// until another has already finished.


//Callback Hell problem and solutions*********************************
// Callback hell is when you have too many nested callbacks.like bellow 
// a(() => {
//     b(() => {
//       c(() => {
//         d();
//       });
//     });
//   });
// Keep you code shallow (avoid too many nested functions): keep your code 
// at 1-3 indentation levels.
// Modularize: convert your anonymous callbacks into named functions.
// Use promises and async/await.





//Check callback function before call********
 // It's very good practice to check the callback argument before it is called.
//  If the callback argument is not a function type then it will throw an error.
// const second =()=> console.log('hello world');
// const first =(x)=> console.log(x());
// first(second)


// function abc() {alert("I am callback function. type checked");}    
// function xyz(callback){ if (typeof callback == "function")    
//         callback();    
//     else    
//         alert("Argument is not function type");    
// }    
// xyz(abc);



//Pass argument to the callback function*****************************
// function abc(var1,var2) {    
//     alert(var1 + var2);    
// }    
// function xyz(name,surname,callback) {    
//     if (typeof callback == "function")    
//         callback(name,surname);    
//     else    
//         alert("Argument is not function type");    
// }    
// xyz("Sourav "," Kayal", abc);    

//es6 style
// const fn1=(x,y,callback)=> callback(x,y);
// const fn2=(x,y)=> x+y;
// var s=fn1(2,10,fn2)
// console.log(s);






//link: https://www.toolsqa.com/javascript/callback-functions-javascript/ 
//javascript sycronus *******************
// const one=()=> console.log('i am fun one');
// const two=()=> console.log('i am fun two');
// two();
// one();

//invoke a callback function inside another callback?********************
// function multiply(a, b, callback1, callback2)
//             {
//                 var result = a * b;
//                 callback1(result, callback2); //callback2 is passed as parameter to callback1
//             }
 
//             function ouput(result)
//             {
//                 console.log("I am in output function");
//                 console.log("Multiplication of the provided inputs are: " + result);
//             }
 
//             function display(result, callback)
//             {
//                 console.log("I am in display function");
//                 console.log("Multiplication of the provided inputs are: " + result);
//                 callback(result);
//             }
 
//             function CallBackFunction(result) {            
//                 console.log("I am inside callback function");             
//             } 
 
//             multiply(5, 6, ouput); // output is passed as callback
 
//             // display and CallBackFunction are passed as callbacks
//             multiply(7, 6, display, CallBackFunction);

// What is callback hell?**********************************
// When you have lots of callback functions in your code! It gets harder to work with 
// them. The more of them you have in your code, and it gets particularly bad to invoke
//  and handle them. It occurs because, in JavaScript, the only way to delay computation 
//  so that it runs after the asynchronous call returns is to put the delayed code inside
//   a callback function. You cannot delay code that we wrote in a traditional 
//   synchronous style, so you end up with nested callbacks everywhere.






// link://https://dmitripavlutin.com/javascript-callback/ 
