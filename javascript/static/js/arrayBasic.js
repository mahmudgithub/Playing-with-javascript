// // JavaScript এ কিভাবে array তৈরি করা হয় ?
// // JavaScript এ দুইভাবে array তৈরী করা যায় :
// // array literal উপায়ে
// // সরাসরি array class এর Object তৈরি করে (new keyword ব্যবহার করে)
// // JavaScript এ array literal উপায়ে array তৈরি
// // JavaScript এ array literal উপায়ে অ্যারে তৈরি করার সবচেয়ে সহজ। যার সিনটেক্স হচ্ছে নিম্নরূপ :
// // var array_name = [item1, item2, ...]; 
//simple array make*****************
//// make a array and access this array
// const arr=['mahmud','hossain','lamyaa']
// console.log(arr);


//access array value by index number**************
//// ইন্ডেক্স নাম্বার সাহায্য করবে আপনাকে অ্যারে থেকে স্পেসেফিক কোনো ডাটা বের করে আনতে।
// console.log(arr[1]);



//change any specific index value of arry************
//// এখন যদি আপনি স্পেসেফিক কোনো ভ্যালুও চেঞ্জ করতে চান তাহলেও পারবেন এই ইন্ডেক্স নাম্বারের সাহায্যেই
// console.log(arr[0]='change');



//add new value in array in specific index**********************
// arr[3]='nowsin'
// console.log(arr);




// length method ************************
// same function in python use len 
//// অ্যারেতে কয়টা আইটেম আছে সেটা জানার জন্যে lengthপ্রপার্টিজ অ্যাক্সেস করতে চাই 
//// তাহলে আমাদের এভাবে লিখতে হবে arrName.length
// console.log(arr.length);
// let arr=['mamud']
// console.log(arr.length);




// use for loop to access eatch array elements ******************
// for (let i=0 ; i<arr.length; i++){
//     console.log(i);
// }




//push method ********************
//অ্যারেতে শেষের দিক হতে কোনো নতুন আইটেম অ্যাড করতেঃ
//arrName.push('Shafiq');
// arr.push('last')
// console.log(arr);



//pop method ********************
//অ্যারেতে শেষের দিক হতে আইটেম রিমুভ করতেঃ
//arrName.pop();
// arr.pop()
// console.log(arr);




//unshift method **************************
//অ্যারেতে শুরুর দিক হতে কোনো নতুন আইটেম অ্যাড করতেঃ
//arrName.unshift('Shafiq');
// arr.unshift('first')
// console.log(arr);




//shift method ************************
//অ্যারেতে শুরুর দিক হতে আইটেম রিমুভ করতেঃ
//arrName.shift();
// arr.shift()
// console.log(arr);




//index of method **************************
//নির্দিষ্ট কোনো আইটেম এর ইন্ডেক্স নাম্বার জানতেঃ
//arrName.indexOf('Karim');
// console.log(arr.indexOf('mahmud'));




//splice method ***********************
//ইন্ডেস্ক নাম্বার দিয়ে কোনো আইটেম রিমুভ করতেঃ
//arrName.splice(1, 2);
//JavaScript এ একটা array এর শুরু ,
////শেষে এমনকি মধ্যবর্তি যে জায়গাতে কোনো value যুক্ত করতে splice() Method ব্যবহৃত হয়।
// console.log(arr.splice(0,2));



// join method ****************
// // এই ফাংশন দিয়ে অ্যারের এলিমেন্টকে স্ট্রিং এ রুপান্তর করা যায় এবং 
// // আপনি চাইলে যেকোন চিহ্ন দিয়ে স্ট্রিংগুলিকে আলাদা করে দেখতে পারেন। 
// // join() এর ভিতর ঐ চিহ্নটি প্যারামিটার হিসেবে পাঠাতে হয়।
// var tutorial = ['HTML', 'CSS', 'JavaScript', 'PHP'];
// var lol= tutorial.join(',');
// document.getElementById('a').innerHTML=lol




//splice method ****************
////একটা নির্দিষ্ট ইন্ডেক্স নাম্বার থেকে শুরু করে বাকি সবগুলো রিমুভ করতে 
////তাইলে প্রথম আর্গুমেন্টে জাস্ট যেখান থেকে রিমুভ করা শুরু করবেন সে ইন্ডেক্স নাম্বারটা দিলেই হবেঃ
//arrName.splice(3);
// console.log(arr.splice(1));




//cope previuse array to create new array ***************
//অ্যারে কপি করতেঃ
//var newArr = arrName;
// let newarr= arr
// console.log(newarr);



// advance topics on array *****************************

//splice method***************************
// //এখানে একটা জিনিস হয়তো খেয়াল করবেন যে যতবারই আমরা মেথড ইউজ করতেছি, 
//// এটা কিছু ডাটা রিটার্ণ করছে। হ্যাঁ, আমরা যেগুলো রিমুভ করতে চাচ্ছি সেগুলোই রিটার্ন করে এই spliceমেথড। 
//// তো আপনি চাইলে রিমুভ করা ডাটাগুলোও আবার আরেকটা ভ্যারিয়েবলে স্টোর করে রাখতে পারবেন।
//// ধরি আমাদের একটা অ্যারে আছেঃ
// var newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// // এখন এটার ইন্ডেক্স নাম্বার ৩ থেকে বাকী সবগুলো স্প্লাইস করে ফেললাম,
// //  আর স্প্লাইসড ডাটাগুলো spliceArrতে স্টোর করলামঃ
// var spliceArr = newArr.splice(4)
// // এখন মেইন অ্যারেটা দেখলেঃ
// console.log(newArr);
// // আর আমাদের এই নতুন spliceArrটা দেখলেঃ
// console.log(spliceArr);



//length method *************
////JavaScript এ একটা array তে কতগুলো এলিমেন্ট আছে তা কিভাবে জানব ?
// //JavaScript এ একটা array তে কতগুলো এলিমেন্ট আছে তা জানতে হলে আপনাকে 
// //এর array Object এর length property টি ব্যবহার করতে হবে।
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("test").innerHTML = fruits.length;




//toString method **********************
// // JavaScript এ একটা array এর value গুলোকে কিভাবে string আকারে প্রদর্শন করব?
// // JavaScript এ একটা array এর value গুলোকে string আকারে প্রদর্শন করতে হলে 
// // আপনাকে toString() Method অথবা join() Method ব্যবহার করতে হবে। 
// // এক্ষেত্রে toString() মেথড বাই ডিফল্ট array এর value গুলোকে কমা (,) দিয়ে প্রদর্শন করে ,
// // অন্যদিকে join() Method এ আপনি চাইলে নিজস্ব separator ব্যবহার করতে পারেন।
// // তাহলে চলুন উদাহরণে দেখা যাক:
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("a").innerHTML = fruits.toString();
// document.getElementById("a").innerHTML = fruits.join();
//console.log(fruits.toString(','));
//console.log(fruits.join('+'));





//concrete method *********************
//// avaScript এ কিভাবে দুই বা ততোধিক array কে merge করবেন?
//// JavaScript এ দুই বা ততোধিক array কে merge করার জন্য concat() method টি ব্যবহৃত হয়।
// var list1 = ["Sahin", "Ikram"];
// var list2 = ["Ridoy", "Sourov", "tariqul"];
// var all = list1.concat(list2);
// document.getElementById("test").innerHTML = all;




//slice method *********************
//// JavaScript এ কিভাবে একটা array এর নির্দিষ্ট অংশ কেটে নিয়ে নতুন একটা array তৈরী করবেন?
//// JavaScript এ একটা array এর নির্দিষ্ট অংশ কেটে নিয়ে নতুন একটা array তৈরী করতে হলে 
//// আপনাকে slice() Method টি ব্যবহার করতে হবে।
// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(0,2);
// document.getElementById('test').innerHTML =citrus;




//sort method *************************
//// JavaScript এ array element গুলোকে কিভাবে alphabetically sort করবেন ?
//// JavaScript এ array element গুলোকে alphabetically sort করতে হলে 
//// আপনাকে sort() Method টি ব্যবহার করতে হবে।
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("test").innerHTML = (fruits.sort());




//reverse method **********************
//// JavaScript এ array element গুলোকে কিভাবে reverse অর্ডারে sort করবেন?
//// JavaScript এ array element গুলোকে reverse অর্ডারে sort করার জন্য
////  আপনি reverse() Method টি ব্যবহার করতে পারেন।
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("test").innerHTML = (fruits.reverse());


//numerical array ites short *************
//// JavaScript এ Numerical array এর element গুলোকে কিভাবে sort করবেন ?
// var points = [40, 100, 1, 5, 25, 10];
// document.getElementById("test").innerHTML = points.sort(function(a, b){return a - b});



//deceding mthod ***********************
//// তবে আপনি চাইলে JavaScript এ Numerical array এর element গুলোকে descending 
//// অর্ডারে sort করতে হলেও আগের টেকনিক টির সামান্য পরিবর্তন করে দিলেই হবে 
// var points = [40, 100, 1, 5, 25, 10];
// document.getElementById("test").innerHTML =points.sort(function(a, b){return b-a});



//indexof method ************************
// JavaScript এ কিভাবে একটা নির্দিষ্ট array element এর position বের করবেন?
// JavaScript এ একটা নির্দিষ্ট array element এর position বের করতে হলে
// আপনাকে indexOf() Method ব্যবহার করতে হবে।
// es5 style
// var fruits = ["Apple", "Orange", "Pineapple", "Mango"];
// var a = fruits.indexOf("Mango");
// document.getElementById("test").innerHTML = a;

// es6 style
// const num1=['mahmud','hossain','lamyaa','nowsin']
// const num2=num1.indexOf('lamyaa')
// document.getElementById('test').innerHTML=num2

//lastIndexOf method
// তবে indexOf Method এরে তে শুরু থেকে index search করে। এতে সমস্যা হয় ,
//  যদি আপনার এরে তে একাধিক একই value থাকে , তাহলে এটি শুরু থেকে যাকে পাবে , 
//  তার index প্রদর্শন করবে। এক্ষেত্রে আপনি যদি array এর শেষের দিক থেকে index search করতে চান ,
//তাহলে আপনাকে lastIndexOf() Method ব্যবহার করতে হবে
// es5 style
// var fruits = ["Apple", "Orange", "Apple", "Mango"];
// var a = fruits.lastIndexOf("Apple");
// document.getElementById("test").innerHTML =a

// es6 style
// const num1=['mahmud','hossain','nannu']
// const num2=num1.lastIndexOf('hossain')
// document.getElementById('test').innerHTML=num2
// console.log(num2);




//make a empty arry and then input value 
// let arr=[]
// for(let i=0;i<=10;i++){
//     arr.push(i)
// }
// console.log(arr);

//use range function 
// function range(start, end) {
//     var ans = [];
//     for (let i = start; i <= end; i++) {
//         ans.push(i);
//     }
//     return ans;
// }
// console.log(range(1,1000));
// let arr=[];
// function fn (a,z){
//     let arr=[];
//     for(let i=0; i<=z; i++){
//         arr.push(i);
//     }
//     arr.map((item)=>{
//         console.log(item);
//     })
// }
// fn(1,10)

////advance array more pactics link
//https://dev.to/ycmjason/how-to-create-range-in-javascript-539i 

///pactics all method at a serial
//make an arry
// const arr=[1,2,3,4,5,6,7,'nowsin']
// //access arry 
// console.log(arr);
// //access array by index number
// console.log(arr[3]);
// //change array index value
// arr[3]='mahmud'
// console.log(arr[3]);
// //add new array value by index number
// arr[7]='cool'
// console.log(arr[7]);
// console.log(arr);
// //determine array length
// console.log(arr.length);
// //apply for loop in array 
// for (let i=0; i<arr.length; i++)
// {
//     console.log(i);
// }
// //use puhs method in arry 
// arr.push('lamyaa')
// console.log(arr);
// //pop method on arry 
// arr.pop()
// console.log(arr);
// //arry unshift method
// arr.unshift('one')
// console.log(arr);
// //arry shift method
// arr.shift()
// console.log(arr);
// //index of methoc
// console.log(arr.indexOf('nowsin'));
// //splice methoc
// arr.splice(1,3)
// console.log(arr);
// //join method
// const arr2=['a','b','c']
// console.log(arr.join(','+arr2));
// //copy arry 
// let arr3=arr
// console.log(arr3);
// //to string method
// arr.toString()
// console.log(arr);
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString(','));
// //difference btween toString and join method
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.join('+'));  //style as wise 
// console.log(fruits.toString(','));  //commonly use comma
// //concrete method 
// console.log(arr.concat(fruits));
// //sort method
// console.log(arr.sort());
// //all method in one statement
// console.log(arr.concat(fruits).sort().join('++'));
// //reverse method 
// console.log(arr.reverse());
// //numerical arry value short 
// console.log(arr.sort());
// //decending method
// console.log(arr.sort(function(a,b){return b-a}));
// //difference btween revense and decending method
// console.log(arr);
// console.log(arr.reverse());
// console.log(arr.sort(function(a,b){return b-a}));
// //last indexOf method
// console.log(arr.lastIndexOf(5));
