// JavaScript এ একটা array এর প্রত্যেকটা Item কে কিভাবে Iterate করবেন ?
// JavaScript এ একটা array এর প্রত্যেকটা Item কে Iterate করার জন্য 
// আমাদের কে JavaScript Iterator Method গুলো ব্যবহার করতে হবে।

//for each method**************************
// JavaScript এ forEach Iterator Method এর কাজ কি?
// JavaScript এ forEach Iterator Method এর কাজ হচ্ছে 
// একটা array এর প্রত্যেকটা element এ iterate করা। আর তাই আপনি চাইলে 
// forEach() Method দিয়ে যেকোনো array key এবং value গুলো নিয়ে কাজ করতে পারেন।
// var fruits = ["apple", "orange", "cherry"];
// fruits.forEach(fun=(item,index)=>{document.getElementById("test").innerHTML += (index + item + '<br>'); });
// // function fun(item, index) {
// //     document.getElementById("test").innerHTML += (index, item ); 
// //   }


//map method****************
// JavaScript এ map() Iterator Method এর কাজ কি?
// JavaScript এ map() Iterator Method এর কাজ হচ্ছে 
// একটা array এর প্রত্যেকটা element এ iterate করা এবং 
// প্রত্যেকটা element এর উপরে যেকোনো operation করার সুযোগ সৃষ্টি করা।
//  আর এই কাজটি করতে হয় একটা callback ফাঙ্কশনের মাধ্যমে। 
// es5 style
// var numbers1 = [1,2,3,4,5,6];
// var numbers2 = numbers1.map(myFunction);
// document.getElementById("test").innerHTML = numbers2;
// function myFunction(value, index, array) {
//   return value * 2;
// }

//es6 style
// const number1=[1,2,3,4]
// const number2=number1.map((item ,index)=>{
//    return `${index} ${item*2} <br>`
// })
// document.getElementById('test').innerHTML=number2




//filtering method *******************
// JavaScript এ filter Iterator Method এর কাজ কি?
// JavaScript এ filter() Iterator Method এর কাজ হচ্ছে 
// একটা array এর প্রত্যেকটা element এ iterate করা এবং প্রত্যেকটা element এর উপরে 
// যেকোনো filtering operation করার সুযোগ সৃষ্টি করা।
//  আর এই কাজটি করতে হয় একটা callback ফাঙ্কশনের মাধ্যমে।
// es5 style
// var numbers = [1,2,3,4,5,6,7,8,9,10];
// var odd = numbers.filter(myFunction);
// document.getElementById("test").innerHTML = odd;
// function myFunction(value, index, array) {
//   return value %2==1;
// }

// es6 style
// const num1=[1,2,3,4,5,6]
// const num2=num1.filter((item,index)=>{
//     return item%2==1;
// })
// document.getElementById('test').innerHTML=num2





//reduce method *************************
// JavaScript এ reduce() Iterator Method এর কাজ কি?
// JavaScript এ reduce() Iterator Method এর কাজ হচ্ছে একটা array 
// এর প্রত্যেকটা element এ iterate করা এবং সবগুলো element কে একটা value 
// তে রূপান্তর করার সুযোগ সৃষ্টি করা। 
// আর এই কাজটি করতে হয় একটা callback ফাঙ্কশনের মাধ্যমে।
// es5 style
// var numbers = [1, 4, 9, 6, 5];
// var sum = numbers.reduce(myFunction);
// document.getElementById("test").innerHTML = "The sum is " + sum;
// function myFunction(total, value, index, array) {
//   return total + value;
// }

// es6 style
// const num1=[1,2,3,4,5]
// const num2=num1.reduce((total, item, index,array)=>{
//     return total+item
// })
// document.getElementById('test').innerHTML=num2

//give initial value *************************
// তবে আপনি চাইলে একটা initial value পাঠাতে পারেন।
//es5 style
// var numbers = [1,2,3,4,5];
// var sum = numbers.reduce(myFunction, 100);
// document.getElementById("test").innerHTML = sum;
// function myFunction(total, value) {
//   return total + value;
// }

//es6 style
// const num1=[1,2,3,4,5]
// const num2=num1.reduce((total, item, )=>{
//     return total+item
// },100)
// document.getElementById('test').innerHTML=num2




//reduce right method *******************
// JavaScript এ reduceRight() Iterator Method এর কাজ কি?
// JavaScript এ reduceRight() Iterator Method এর কাজ ও
//  reduce() Method এর মতোই। পার্থক্য হচ্ছে left-side থেকে কাজ করে, 
//  আর reduceRight right-side থেকে কাজ করে।
// var numbers = [1,2,3,4,5];
// var sum = numbers.reduceRight(myFunction); 
// document.getElementById("test").innerHTML = "The sum is " + sum;
// function myFunction(total, value, index, array) {
//   return total + value;
// }



//every method *********************
// JavaScript এ every() Iterator Method এর কাজ কি?
// JavaScript এ every() Iterator Method এর কাজ হচ্ছে array এর প্রতিটি element
//  একটা নির্দিষ্ট পরীক্ষায় পাশ কিনা তা চেক করা ।
//es5 style
// var numbers = [45, 4, 9, 16, 25];
// var allOver18 = numbers.every(myFunction); 
// document.getElementById("test").innerHTML = allOver18;
// function myFunction(value, index, array) {
//   return value > 18;
// }

//es6 style
// const num1=[1,2,3,4,5]
// const num2=num1.every((item,index)=>{
//     return item>100   //in here all element are geter then 100 ? check by every method
// })
// document.getElementById('test').innerHTML=num2



//some method***********************
// JavaScript এ some() Iterator Method এর কাজ কি?
// JavaScript এ some() Iterator Method অনেকটা every Method এর মতোই।
//  পার্থক্য হচ্ছে every Method এরে এর সবগুলো এলিমেন্ট একটা নির্দিষ্ট পরীক্ষায় কৃতকার্য হতে হয় ,
//  কিন্তু some Method এর কাজ হচ্ছে array এর কিছু element একটা নির্দিষ্ট পরীক্ষায় পাশ হলেই চলে 
//es5 tyle
// var numbers = [45, 4, 9, 16, 25];
// var someOver18 = numbers.some(myFunction); 
// document.getElementById("test").innerHTML = "Some over 18 is " + someOver18; 
// function myFunction(value, index, array) {
//   return value > 18;
// }

//es6 style
// const num1=[1,2,3,4,5,6]
// const num2=num1.some((item,index,array)=>{
//     return item>5  
// })
// document.getElementById('test').innerHTML=num2




//find method***************
// JavaScript এ কিভাবে একটা নির্দিষ্ট শর্তের ভিত্তিতে প্রথম array element টি বের করবেন?
// JavaScript এ একটা নির্দিষ্ট শর্তের ভিত্তিতে প্রথম array element টি বের করতে হলে 
// আপনাকে find() Method টি ব্যবহার করতে হবে।
// es5 style
// var numbers = [4, 9, 16, 25, 29];
// var first = numbers.findIndex(myFunction);
// document.getElementById("test").innerHTML = first
// function myFunction(value, index, array) {
//   return value > 18;
// }

//es6 style
// const num1=[1,2,3,4,5,6,7,8]
// const num2=num1.find((item,index)=>{
//     return item>5
// })
// document.getElementById('test').innerHTML=num2



//setTime and setTimeOut method *******************************
// জাভাস্ক্রিপ্ট setTimeout() ফাংশন টিউটোরিয়াল (JavaScript setTimeout Function
// জাভাস্ক্রিপ্টে setTimeout() নামে একটা ফাংশন আছে যেটা দিয়ে একটা ফাংশন তথা কোডব্লক নির্দিষ্ট সময় 
// পর এক্সিকিউট করাতে পারেন স্বয়ংক্রিয়ভাবে। এটা setInterval() ফাংশনের মতই একটা ফাংশন।
//  শুধু ছোট্র কয়েকটি পাথর্ক্য আছে। গুরত্বপূর্ন পার্থক্যটি হল setTimeout() ফাংশনে যে সময় দেয়া 
//  হবে সেটা পার হবার পর একবার কোডব্লক এক্সিকিউট হয় অপরদিকে setInterval() ফাংশনে যে 
//  সময় দেয়া থাকে সেই সময় পর পর কোডব্লক অটোমেটিক অনির্দিষ্টকালের জন্য এক্সিকিউট হতে থাকবে,
//   কখনও থামবেনা।
// setTimeout() এর ভিতরে প্যারামিটার হিসেবে প্রথমে ফাংশনটির নাম বা পুরো কোডটুকুই লিখে দিতে পারেন
//  এবং দ্বিতীয় প্যারামিটারে সময় দিতে হয়। মিলিসেকেন্ডে সময় দিতে হয়। যেমন ১ সেকেন্ড পর যদি কোডটি
//   চালাতে চান তাহলে দিবে ১০০০।
// setTimeout('refreshUserList()',4000);
// এই উদাহরনে refreshUserList() নামের ফাংশনটি ৪ সেকেন্ড পর রান করবে।
// যদি সরাসরি কোড দিতে চান ফাংশন না দিয়ে তাহলে নিচের মত করে দিতে হবে।
// setTimeout(function(){
//     console.log('hello');
//     }, 5000);



// example but not runn**********
// $(document).ready(function(){
//     $('h1').hide();
//     setTimeout(function(){
//         $('h1').slideDown();
       
//     },5000);
// });
// ব্যাখ্যা: প্রথমে $('h1').hide(); দিয়ে হেডিংটি লুকিয়ে রেখেছি এরপর setTimeout() 
// এ slideDown() দিয়ে হেডিংটি দৃশ্যমান করেছি তবে ৫ সেকেন্ড পরে। "প্রয়োগ দেখুন" 
// এ গিয়ে দেখুন ৫ সেকেন্ড পর হেডিংটি স্লাইডিং করে দৃশ্যমান হচ্ছে।
// ধরুন উপরের উদাহরনে h1 ৫ সেকেন্ড পরে লোড হবার আগেই আপনি থামিয়ে দিতে চান
//  তাহলে clearTimeout() ফাংশনটি দিয়ে সেটা করতে পারেন। এজন্য আপনাকে setTimeout()
//   ফাংশনটি আগে একটা ভেরিয়েবলে নিয়ে নিতে হবে। যেমন
// $(document).ready(function(){
//     var sliderId;
//     $('h1').hide();
//     sliderId = setTimeout(function(){
//      $('h1').slideDown();
        
//      },5000);
//     $('#cancel').click(function(){
//           clearTimeout(sliderId);
//      });
// });
// প্রয়োগ দেখুন
// দেখুন sliderId নামের একটি ভেরিয়েবলে পুরো setTimeout() ঢুকিয়ে দিয়েছি 
// এরপর cancel বাটনে ক্লিক করলে clearTimeout() এর ভিতর sliderId দিয়ে একশন থামিয়ে দিয়েছি। 
// এখন এই্ কোড রান করিয়ে দেখুন ৫ সেকেন্ড পরে h1 স্লাইডিং করে বের হবে তবে যদি ৫ সেকেন্ডের
//  আগেই cancel বাটনে ক্লিক করেন তাহলে আর স্লাইডিং হবেনা।
// উপরের দুটি উদাহরনেই setTimeout() এর ভিতরেই কোড লিখেছি, 
// এবার ঐ কোডগুলিই ফাংশন ব্যবহার করে একটি উদাহরন-
// var sliderId;
// $(document).ready(function(){
//     $('h1').hide();
//     slider();
//     $('#cancel').click(function(){
//         stopSlider();
//     });
// });
// function slider(){
// sliderId = setTimeout(function(){
//  $('h1').slideDown();       
//      },5000);
// }
// function stopSlider(){
//    clearTimeout(sliderId);
// }
// ব্যাখ্যা: slider নামে ফাংশন তৈরী করে সেখানে h1 এর স্লাইডিং কোডটুকু রেখেছি
//  এবং stopSlider নামে আরেকটি ফাংশন তৈরী করে সেখানে clearTimeout() রেখেছি।
//   আর ready ইভেন্টে slider ফাংশন দিয়ে পেজ লোড হবার সাথে সাথে স্লা্‌ইডিং হবে এ নির্দেমনা দিয়েছি।
//    সবশেষে cancel আইডিধারী বাটনে ক্লিক করলে stopSlider() ফাংশন কল করেছি।
// আগের উদহারনে জাভাস্ক্রিপ্টের কোড এই কোড দিয়ে প্রতিস্থাপন করে প্রয়োগ দেখে নিতে পারেন।
// এখানে যদিও setTimeout() ফাংশনটি জাভাস্ক্রিপ্টের ফাংশন, তবে আমরা উদহারনে জেকোয়েরি ব্যবহার করেছি।



// more map method pactics ********************
// let numbers=[1,2,3,4,5,6,7];

// numbers.map((number)=>{
//     console.log(number);
// })

// const names=['mahmud','hossai','lamyaa','nowsin']

// names.map((names,index)=>{
//     console.log(index, names);
//     return names
// })

// let lol=['mahmud']
// lol.map((lol,index)=>{
//     console.log(index,...lol);
// })

// const lol=[1,2,3,4,5,6,7,8,9]
// lol.map(lol,index=>{
//     console.log(lol);
// })



// নিত্যদিনের জাভাস্ক্রিপ্টঃ map(), filter() ও reduce() methods ****************
// এই তিনটা মেথড সবচেয়ে বেশী ব্যবহৃত হয়.এখানে তিনটা মেথডের কাজই প্রায় একই টাইপের।
// এরা অ্যারের, Arrayর মেথড, এদের মেইন কাজ হলো অ্যাপ্লাইকৃত অ্যারের প্রত্যেকটা আইটেমের উপর একটা ফাংশন 
// অ্যাপ্লাই করা। অনেকটা লুপের মতো কাজ করে, কিন্তু লুপের মতো অর্থহীন বা জটিল টাইপের না। প্রথমে বুঝতে হয়তো 
// একটু সমস্যা হতে পারে। তবে একবার বুঝে গেলে তখন মনে হবে এগুলাই সবচেয়ে বেস্ট।
// এখানে উল্লেখিত মেথডগুলোর মধ্যে map()আর reduce()প্রথম আর্গুমেন্ট হিসেবে একটা কলব্যাক ফাংশন 
// আর দ্বিতীয় আর্গুমেন্ট হিসেবে এই কলব্যাক ফাংশনের ভিতরে thisএর ভ্যালু কি হবে সেটা সেট করা যায়। 
// যেমন map()এর ক্ষেত্রেঃ
// myArray.map(callbackFunction, thisArg);
// তবে মনে রাখবেন এখানে thisএর ভ্যালু ডিটারমাইন করা আর্গুমেন্টটা অ্যারো ফাংশনে অ্যারো ফাংশনের লেক্সিক্যাল স্কোপিং
//  এর কারণে একটু অন্যরকমভাবে কাজ করবে। এটা খুব বেশী কাজে লাগে না, তবে এরকম কিছু একটা আছে জেনে রাখা ভালো।



// map methos **************************************
// আপনি ম্যাপ কোনো অ্যারেতে কল করলে সেটা সেই অ্যারের প্রত্যেকটা আইটেমের উপর আপনারই দেওয়া একটা ফাংশন অ্যাপ্লাই করবে, 
// এবং সবশেষে সবগুলো আবার আরেকটা অ্যারে হিসেবে রিটার্ন করবে।
// example :without map mathod, squre all array elemnts
// const num1=[1,2,3,4,5]
// for(let i=1; i<num1.length; i++){
//     console.log(i*i);
// }

// using map method
// es5 style
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var newArr = arr.map(function(item) {
//     return item * item;
//  })
//  console.log(newArr);

//es6 style
// const num1=[1,2,3,4,5,6,7]
// const num2=num1.map((item,index,array)=>{
//     return item*item +'<br>'
// })
// document.getElementById('test').innerHTML=num2
// এখন এখানে দেখবেন আমরা আর্গুমেন্ট হিসেবে একটা itemইউজ করেছি।
//  কিন্তু এখানে map() তিনটা আর্গুমেন্ট অ্যাক্সেপ্ট করে।
// প্রথমটা তো দেখলামি, এটা অ্যারের প্রত্যেকটা আইটেম সিলেক্ট করে,
// দ্বিতীয় আর্গুমেন্ট হচ্ছে অ্যারের আইটেমের ইন্ডেক্স নাম্বার, আর তৃতীয় নাম্বার টা সবসময়ই পুরো অ্যারে দিবে।
//es6 style
// const num1=[1,2,3,4,5,6,7]
// const num2=num1.map((item,index,array)=>{
//     return ` index:${index}     item:${item}    array:${array} <br>`
// })
// document.getElementById('test').innerHTML=num2

//more compact of map method
// const num1=[1,2,3,4,5,6,7]
// const num2=num1.map(item=>item*item)
// document.getElementById('test').innerHTML=num2



// ফিল্টার method 
// ফিল্টার সেইম ম্যাপের মতোই কিন্তু এখানে অ্যাপ্লাইকৃত ফাংশন যদি trueরিটার্ণ করে 
// তাহলেই সেটা নতুন অ্যারেতে স্থান পাবে, নতুবা যদি ফাংশন falseরিটার্ণ করে তাহলে
//  সেই আইটেম অ্যারেতে স্থান পাবে না।
// ধরুন আমি নিচের অ্যারে থেকে শুধুমাত্র জোড় নাম্বার গুলো বের করে নতুন অ্যারেতে রাখতে চাচ্ছিঃ
// ফিল্টারও ম্যাপের মতোই তিনটা আর্গুমেন্ট অ্যাক্সেপ্ট করেঃ
// es5 style
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var newArr = arr.filter(function(item) {
//     return item % 2 == 0
//  })
//  console.log(newArr);
// প্রত্যেকটা আইটেমের উপর ফাংশন টা অ্যপ্লাই করা হয়েছে। 
// এবং যেটা এখানে trueরিটার্ণ করেছে, সেটাই নতুন অ্যারেতে স্থান পেয়েছে।
//  আর যেটা falseরিটার্ণ করেছে সেটা নতুন অ্যারেতে স্থান পায় নি।

// es6 style
// const num1=[1,2,3,4,5,6]
// const num2=num1.filter((item,index,array)=>{
//     return 4>item
// })
// document.getElementById('test').innerHTML=num2
// console.log(num2);

//more compact systext
// const num1=[1,2,3,4,5,6]
// const num2=num1.filter(item=>item%2===0)
// console.log(num2);



// রিডিউস method
// রিডিউস ও ম্যাপ, ফিল্টার এর মতো হলেও এটা একটা আর্গুমেন্ট বেশী নেয়।
// আমরা প্রোগ্রামিং ওয়ার্ল্ড এ স্ট্যাট ভ্যারিয়েবলের কথা জানি। এর কাজ হচ্ছে কোনো কিছুর কাউন্ট করা,
// বা ডিটেক্ট করে রাখা কোনো অপারেশনের চলার সময়। সহজ কথায় বললে আমরা যদি 
// কোনো অ্যারে থেকে অ্যারের সব নাম্বারের টুটাল বের চাই, তাহলে সেক্ষেত্রে রিডিউস ইউজ করে সহজেই 
// করে ফেলতে পারি। রিডিউসে যেহেতু স্ট্যাট ভ্যারিয়েবল আছে, তাই এটাই এধরণের অপারেশনের জন্য পার্ফেক্ট চয়েজ হতে পারে।
// es5 style
// var arr = [1, 2, 3, 4]
// var total = arr.reduce(function(sum, item){
//     return sum += item;
//  }, 0);
// document.getElementById('test').innerHTML=total

// es6 style
// const num1=[1,2,3,4,5]
// const num2=num1.reduce((total,item,index,array)=>{
//     return total+item
// },10)  //here 10 is initial value which add total array number
// document.getElementById('test').innerHTML=num2
// এখানে অনেককিছু নতুন দেখা যাচ্ছে। হ্যা, এটা শুধুমাত্র একটা আর্গুমেন্ট শুরুর দিক হতে বেশী নিচ্ছে। 
// যেটা হচ্ছে স্ট্যাট ভ্যারিয়েবল। আর একদম শেষে সেই স্ট্যাট ভ্যারিয়েবলের ইনিশিয়াল ভ্যালু কতো হবে সেটা 
// সেট করে দিতে পারবেন। আমার ক্ষেত্রে জিরো দিয়েছি। আপনি ১০ দিলে ১০ থেকে শুরু হতো। রেজাল্ট আসতো ২০। 
// আর সবশেষে এই মেথড আপনার টুটাল রিটার্ণ করতেছে, অন্যগুলোর মতো অ্যারে না, বরং টুটালটাই রিটার্ণ করবে।

// ES6 সিনট্যাক্স ইউজ করলেঃ
// const t = arr.reduce((sum, item) => sum += item, 0)
// and
// const num1=[1,2,3,4,5]
// const num2=num1.reduce((total,item)=>{return total+item},10)
// document.getElementById('test').innerHTML=num2

