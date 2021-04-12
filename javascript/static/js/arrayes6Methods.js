// JavaScript এ একটা array এর প্রত্যেকটা Item কে কিভাবে Iterate করবেন ?************
// //JavaScript এ একটা array এর প্রত্যেকটা Item কে Iterate করার জন্য 
////                                                                                                                    আমাদের কে JavaScript Iterator Method গুলো ব্যবহার করতে হবে।

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

//let arr=['mahmud','hossain','a','b','c',1,2,3,4,5]
// arr.forEach((item) => {
//     console.log(item);
// });
// //combine sort and foreatch method
// let lol=arr.sort()
// lol.forEach((item)=>{
//     console.log(item);
// })


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

//// arr.map((item,index,element)=>{ 
//     console.log(index);
//     console.log(item);
//     console.log(element.sort())
// })

//es6 style
// const number1=[1,2,3,4]
// const number2=number1.map((item ,index,Array)=>{
//     console.log(index,item,Array);
//    return `${index} ${item*2} <br>`;
   
// })
// document.getElementById('a').innerHTML=number2




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

////es6 style
// const num1=[1,2,3,4,5,6]
// const num2=num1.filter((item,index)=>{
//     console.log(item%2==1);
//     return item%2==1;
   
// });

// document.getElementById('a').innerHTML=num2





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
// const num1=[1,2,3]
// const num2=num1.reduce((total, item, index,array)=>{
//     console.log(total+item);
//     return total+item;
// })
// document.getElementById('a').innerHTML=num2

//give initial value *************************
// তবে আপনি চাইলে একটা initial value পাঠাতে পারেন।
//es5 style
// var numbers = [1,2,3,4,5];
// var sum = numbers.reduce(myFunction, 100);
// document.getElementById("a").innerHTML = sum;
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
// document.getElementById("a").innerHTML = allOver18;
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
//     return item>7
// })
// document.getElementById('a').innerHTML=num2





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




// অ্যারেতে সাধারণত একাধিক ডাটা থাকে। এখন সেই ডাটাগুলো থেকে বেছে বেছে আমাদের প্রয়োজমতো 
// কিছু ডাটা বের করার জন্যে বা প্রয়োজনমতো এগুলোর উপর কোনো অপারেশন চালানোর জন্যে অ্যারেতে
// বেশ কিছু হ্যান্ডি মেথড রয়েছে। ঠিক আগের সেই ম্যাপ, ফিল্টার, রিডিউস মেথডের মতোই আরো দুইটা 
// কাজের মেথড রয়েছে। এরা হচ্ছে some()ও every()নামের সাথে এদের কাজেরও বেশ মিল আছে।
// আমাদের এরকম কোনো পরিস্থিতি আসতে পারে যে একটা অ্যারের ভিতর কোনো নির্দিষ্ট ডাটা আছে কিনা
// সেটা খুঁজতে হতে পারে। 
// এই some()আর every()সবসময় হয় সত্য trueবা মিথ্যা falseরিটার্ণ করবে।
// some() মেথডঃ*******************************************
// এই মেথডটা ঠিক নামের মতোই। আমাদের একটা অ্যারে আছে, এখন এই অ্যারেতে কি কিছু 
// ভ্যালু(এক বা একের অধিক) এরকম বা ওরকমভাবে আছে? এই প্রশ্নের উত্তরই দিবে এই some()
// es5 style 
// const arr1 = ['hello', 1, 2, 3, 'Bangla', 5, 'world', 7, 8, 9];
// const arr2=arr1.some(function(item,index,array){
//     return item=='world'
// })
// console.log(arr2);

// es6 style
// const arr1=['mahmud','hossain','nannu']
// const arr2=arr1.some((item)=>{
//     return item=='hossain'
// })
// document.getElementById('test').innerHTML=arr2

// এটা রান করলে সত্য trueআসবে, কারণ আসলেই আমাদের এই অ্যারেতে নাম্বার 'hossain'আছেঃ
// এখন এটাকে যদি আরো ব্যাখ্যা করে বলি, ভিতরের কলব্যাক ফাংশনটা অ্যারের প্রত্যেকটা আইটেমের উপর 
// একবার একবার করে চলবে। কলব্যাক ফাংশন আবার তিনটা আর্গুমেন্ট অ্যাক্সেপ্ট করে। যথাক্রমেঃ প্রথম আর্গুমেন্ট 
// অ্যারের বর্তমান আইটেম যেটার উপর কলব্যাক ফাংশনটা চলছে, তারপরের আর্গুমেন্ট সেটার ইন্ডেক্স নাম্বার, 
// তারপরের আর্গুমেন্টটায় পুরো অ্যারেটাই অ্যাক্সেস পাবেন।
// আমরা নিচের এই একটা উদাহরণ দিয়ে দেখতে পারি এখানে কোন আর্গুমেন্ট কোন কাজ করেঃ
// const arr1=['mahmud','hossain','nannu']
// const arr2=arr1.some((item,index,array)=>{
//     console.log(item);
//     console.log(index);
//     console.log(array);
// })
// প্রথমটা বর্তমান ইলিমেন্ট, দ্বিতীয়টায় ইন্ডেক্স নাম্বার আর শেষেরটায় পুরো অ্যারেঃ
// এখন some()এর আরেকটা ব্যাপার হলো, এটার যেহেতু জানার দরকার অন্তত একটা ইলিমেন্ট 
// আমাদের শর্ত মানে কিনা, trueরিটার্ণ করতেছে কিনা, সেহেতু একবার কোনো শর্ত সত্য trueহয়ে গেলে
//  এটা কাজ করা বন্ধ করে দেয়। পরের ইলিমেন্ট এ আর হাত দেয় না।
// দেখেন প্রথমটা দেখলো, সেটা মিথ্যা falseরিটার্ণ করেছে। তাই আবার পরেরটায় গেলো যেটা আসলে 
// আমাদের কন্ডিশন/শর্ত মেনেছে, আর তাই এটা সত্য রিটার্ণ করেছে। ব্যাস এই মেথড এখন trueরিটার্ণ করে দিবে,
//  আর চলবে না। আমরা আউটপুটেও ঠিক তেমনটাই দেখতে পাচ্ছি।
// এখন আমরা একটা স্পেশাল স্টেটমেন্ট এর কথা জানি, সেটা হচ্ছে breakএর কাজ হচ্ছে কোনো লুপ চলতে থাকলে 
// সেটাকে নির্দিষ্ট একটা কন্ডিশনে বন্ধ করে দেওয়া। যদি আপনি পরিচিত না থেকে থাকেন তাহলে নিচের এই উদাহরণটা
//  দেখুনঃ
// using condition to break
// const num1=[1,2,3,4,5,6,7,8,9]
// for (let i=0; i<num1.length; i++){
//     console.log(i);
//     if(i==7){break}
// }
// এখানে আমরা একটা অ্যারের উপর লুপ চালাচ্ছি। 
// এখন যদি আমাদের অ্যারের ইলিমেন্ট 5হয় তাহলে লুপ থেকে বেড়িয়ে যাবো।
//  যার জন্যে আমরা কন্ডিশন ইউজ করে breakস্টেটমেন্ট দিয়েছি যে ঠিক 5আসলেই লুপ থেকে বের হয়ে যাবা।
// এখন এই breakস্টেটমেন্ট আপনি map(), filter(), reduce(), some()বা এরকম কোথাও ব্যবহার করতে
//  পারবেন না। কিন্তু আপনার এরকম সময় আসতে পারে যখন এরকম লুপ বা এক্ষেত্রে ইটারেশন বন্ধ করা লাগতে পারে।
//   তো এটা some()মেথড দিয়েও আমরা একটু অন্যরকমভাবে করতে পারবোঃ
//using some to break 
// const num1=[1,2,3,4,5,6,7,8,9]
// const num2=num1.some((item)=>{
//     console.log(`current value: ${item}`);
//     return item===5
// })
// console.log(num2);
// দেখুন এটাও ঠিক আমাদের উপরের লুপের মতোই যখনি 5পেয়েছে, ইটারেশন ব্রেক করে দিয়েছেঃ

// আমরা এই মেথড অ্যারে অব অবজেক্ট এও কাজে লাগাতে পারি।
// এখন ধরি আমরা পরীক্ষা করতে চাচ্ছি যে এখানে কিছু আইটেমের ageনামে কোনো প্রপার্টি আছে কিনাঃ
// const obj=[{
//     names:'mahmud',
//     roll:12345
// },{
//     city:'rajshahi',
//     roll:123451

// },{
//     board:"dhka",
//     roll:12456
// }
// ]
// const num=obj.some((item)=>{
//     console.log(item.roll);

// })
// এখন আবার চাচ্ছি এখানে থাকা সবার ডাটার মধ্যে roll 12345 কেউ আছে কিনাঃ
// const obj=[{
//     names:'mahmud',
//     roll:12345
// },{
//     city:'rajshahi',
//     roll:123451

// },{
//     board:"dhka",
//     roll:12456
// }
// ]
// const num=obj.some((item)=>{
//     console.log(item.roll==12345);

// })
// এখন ধরি আবার চাচ্ছি এখানে khulna আছে কিনা কেউঃ
// const obj=[{
//     names:'mahmud',
//     roll:12345
// },{
//     city:'rajshahi',
//     roll:123451

// },{
//     board:"dhka",
//     roll:12456
// }
// ]
// const num=obj.some((item)=>{
//     console.log(item.board=='khulna');

// })
// কিন্তু এখানে কোনো khulna নাই, তাই মিথ্যা রিটার্ণ করবেঃ
// এভাবেই বিভিন্নরকমভাবে আপনি এই মেথড ইউজ করে 
// আপনার ডেভেলপমেন্ট লাইফ আরো অনেক সহজ করে ফেলতে পারবেন।




// every() মেথডঃ**********************************
// এটাও ঠিক আগের মেথডগুলোর মতোই, তবে এক্ষেত্রে এটা পরীক্ষা করবে
//  আপনার অ্যারের প্রত্যেকটা আইটেম আপনার দেওয়া শর্ত মেনে চলছে কিনা। 
//  যদি প্রত্যেকটা আইটেমই শর্ত মেনে চলে, তাহলেই একমাত্র এটা trueরিটার্ণ করবে। 
//  আর যদি একটা আইটেমও সেই শর্ত পূরণ না করে তাহলে এটা falseরিটার্ণ করবে।
// এখন এখানকার প্রত্যেকটা আইটেমই কি 1
// es5 style
// const num1=[1,1,1,1,1,1,1,2]
// const num2=num1.every(function(item){return item===1})
// document.getElementById('test').innerHTML=num2


// এখন এখানে যদি একটা আইটেমও 1ছাড়া অন্যকিছু হতো তাহলে এটা falseরিটার্ণ করতো
//es6 style
// const num1=[1,1,1,1,1,]
// const num2=num1.every((item)=>{return item===1})
// document.getElementById('test').innerHTML=num2

//es6 advance
// num1.every(item => item === 1);
// এখন এই মেথডও ঠিক আগেরগুলোর মতোই তিনটা আর্গুমেন্ট নেয়।
// num2.num1.every((item,index,array)=>{})
// প্রথমটা অ্যারের যে ইলিমেন্ট এর উপর কলব্যাক চলছে সেটা, 
// দ্বিতীয়টা অ্যারেতে তার ইন্ডেক্স নাম্বার এবং শেষেরটা পুরো অ্যারেঃ
// এখন এই every()ও ঠিক some()এর মতোই, যেহেতু এখানে কোনো 
// একটা শর্তfalseহলেই পুরোটা falseরিটার্ণ করবে। তাই যখনি এমন কোনো শর্ত আসে যেটা false,
//  তখনি এই ইটারেশন বন্ধ হয়ে যায়।
// const anNumberArrEvery = [1, 1, 1, 3, 4, 5, 6, 7, 8, 9];
// anNumberArrEvery.every(anElement => {
//     console.log(`${anElement} is printed`);
//     return anElement === 1;
//  })
//  এখন এটা রান করলে দেখবেন ঠিক যখনি এটা falseরিটার্ণ করছে, তখনি এটা বন্ধ হয়ে গেছেঃ

// তো সেইমভাবে আমরা এখানে ব্রেক স্টেমটমেন্টও ব্যবহার করতে পারবো। 
// আবার এই মেথড আরো নানান কাজে লাগাতে পারবো। যেমন আমরা এখন দেখতে চাচ্ছি
//  আমাদের উপরের অ্যারের সব আইটেম নাম্বার কিনাঃ
// anNumberArrEvery.every(anElement => typeof anElement === 'number');
//এভাবে আরো অনেকরকমভাবে এই মেথড ইউজ করা যাবে। যেমন আমরা অবজেক্টেও ইউজ করতে পারি।
// const num1=[{
//     name:'mahmud',
//     city:'rajshahi'
// },
// {
//     roll:12345,
//     city:'dhaka'
// },
// {
//     board:'rajshahi',
//     city:'rajshahi'
// }]
// //find city in every object
// const num2=num1.every((item)=>{return item.city})
// document.getElementById('test').innerHTML=num2
// //find city==rajshahi in every object
// const num=num1.every((item)=>{return item.city=='rajshai'})
// document.getElementById('test').innerHTML=num3