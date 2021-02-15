// make a array and access this array
const arr=['mahmud','hossain','lamyaa']
console.log(arr);

//access array value by index number
// ইন্ডেক্স নাম্বার সাহায্য করবে আপনাকে অ্যারে থেকে স্পেসেফিক কোনো ডাটা বের করে আনতে।
console.log(arr[1]);


//change any specific index value of arry
// এখন যদি আপনি স্পেসেফিক কোনো ভ্যালুও চেঞ্জ করতে চান তাহলেও পারবেন এই ইন্ডেক্স নাম্বারের সাহায্যেই
console.log(arr[0]='change');

//add new value in array in specific index
arr[3]='nowsin'
console.log(arr);

//show array length
// অ্যারেতে কয়টা আইটেম আছে সেটা জানার জন্যে lengthপ্রপার্টিজ অ্যাক্সেস করতে চাই 
// তাহলে আমাদের এভাবে লিখতে হবে arrName.length
console.log(arr.length);

// use for loop to access eatch array elements 
for (let i=0 ; i<arr.length; i++){
    console.log(i);
}

//add new element in array from last
//অ্যারেতে শেষের দিক হতে কোনো নতুন আইটেম অ্যাড করতেঃ
//arrName.push('Shafiq');
arr.push('last')
console.log(arr);
//remove any elements from array from last
//অ্যারেতে শেষের দিক হতে আইটেম রিমুভ করতেঃ
//arrName.pop();
arr.pop()
console.log(arr);


//add new elements in array from first
//অ্যারেতে শুরুর দিক হতে কোনো নতুন আইটেম অ্যাড করতেঃ
//arrName.unshift('Shafiq');
arr.unshift('first')
console.log(arr);
//remove any elements from array from fir s 
//অ্যারেতে শুরুর দিক হতে আইটেম রিমুভ করতেঃ
//arrName.shift();
arr.shift()
console.log(arr);

//to show any indevidual array elemts index number
//নির্দিষ্ট কোনো আইটেম এর ইন্ডেক্স নাম্বার জানতেঃ
//arrName.indexOf('Karim');
console.log(arr.indexOf('mahmud'));

//use splice to remove any specific index number item
//ইন্ডেস্ক নাম্বার দিয়ে কোনো আইটেম রিমুভ করতেঃ
//arrName.splice(1, 2);
//JavaScript এ একটা array এর শুরু ,
//শেষে এমনকি মধ্যবর্তি যে জায়গাতে কোনো value যুক্ত করতে splice() Method ব্যবহৃত হয়।
console.log(arr.splice(0,2));
//if start to last
//একটা নির্দিষ্ট ইন্ডেক্স নাম্বার থেকে শুরু করে বাকি সবগুলো রিমুভ করতে 
//তাইলে প্রথম আর্গুমেন্টে জাস্ট যেখান থেকে রিমুভ করা শুরু করবেন সে ইন্ডেক্স নাম্বারটা দিলেই হবেঃ
//arrName.splice(3);
console.log(arr.splice(1));

//cope previuse array to create new array 
//অ্যারে কপি করতেঃ
//var newArr = arrName;
let newarr= arr
console.log(newarr);


// advance topics on array 
// এখানে একটা জিনিস হয়তো খেয়াল করবেন যে যতবারই আমরা spliceমেথড ইউজ করতেছি, 
// এটা কিছু ডাটা রিটার্ণ করছে। হ্যাঁ, আমরা যেগুলো রিমুভ করতে চাচ্ছি সেগুলোই রিটার্ন করে এই spliceমেথড। 
// তো আপনি চাইলে রিমুভ করা ডাটাগুলোও আবার আরেকটা ভ্যারিয়েবলে স্টোর করে রাখতে পারবেন।
// ধরি আমাদের একটা অ্যারে আছেঃ

// var newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// এখন এটার ইন্ডেক্স নাম্বার ৩ থেকে বাকী সবগুলো স্প্লাইস করে ফেললাম,
//  আর স্প্লাইসড ডাটাগুলো spliceArrতে স্টোর করলামঃ

// var spliceArr = newArr.splice(3)
// এখন মেইন অ্যারেটা দেখলেঃ

// console.log(newArr);


// আর আমাদের এই নতুন spliceArrটা দেখলেঃ

// console.log(spliceArr);



//JavaScript এ একটা array তে কতগুলো এলিমেন্ট আছে তা কিভাবে জানব ?
// JavaScript এ একটা array তে কতগুলো এলিমেন্ট আছে তা জানতে হলে আপনাকে 
// এর array Object এর length property টি ব্যবহার করতে হবে।
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("test").innerHTML = fruits.length;


// JavaScript এ একটা array এর value গুলোকে কিভাবে string আকারে প্রদর্শন করব?
// JavaScript এ একটা array এর value গুলোকে string আকারে প্রদর্শন করতে হলে 
// আপনাকে toString() Method অথবা join() Method ব্যবহার করতে হবে। 
// এক্ষেত্রে toString() মেথড বাই ডিফল্ট array এর value গুলোকে কমা (,) দিয়ে প্রদর্শন করে ,
// অন্যদিকে join() Method এ আপনি চাইলে নিজস্ব separator ব্যবহার করতে পারেন।
// তাহলে চলুন উদাহরণে দেখা যাক:

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("test").innerHTML = fruits.toString();
// document.getElementById("test").innerHTML = fruits.join();



// avaScript এ কিভাবে দুই বা ততোধিক array কে merge করবেন?
// JavaScript এ দুই বা ততোধিক array কে merge করার জন্য concat() method টি ব্যবহৃত হয়।
// var list1 = ["Sahin", "Ikram"];
// var list2 = ["Ridoy", "Sourov", "tariqul"];
// var all = list1.concat(list2);
// document.getElementById("test").innerHTML = all;


// JavaScript এ কিভাবে একটা array এর নির্দিষ্ট অংশ কেটে নিয়ে নতুন একটা array তৈরী করবেন?
// JavaScript এ একটা array এর নির্দিষ্ট অংশ কেটে নিয়ে নতুন একটা array তৈরী করতে হলে 
// আপনাকে slice() Method টি ব্যবহার করতে হবে।
// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(0,2);
// document.getElementById('test').innerHTML =citrus;



// JavaScript এ array element গুলোকে কিভাবে alphabetically sort করবেন ?
// JavaScript এ array element গুলোকে alphabetically sort করতে হলে 
// আপনাকে sort() Method টি ব্যবহার করতে হবে।
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("test").innerHTML = (fruits.sort());



// JavaScript এ array element গুলোকে কিভাবে reverse অর্ডারে sort করবেন?
// JavaScript এ array element গুলোকে reverse অর্ডারে sort করার জন্য
//  আপনি reverse() Method টি ব্যবহার করতে পারেন।
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("test").innerHTML = (fruits.reverse());



// JavaScript এ Numerical array এর element গুলোকে কিভাবে sort করবেন ?
// var points = [40, 100, 1, 5, 25, 10];
// document.getElementById("test").innerHTML = points.sort(function(a, b){return a - b});



// তবে আপনি চাইলে JavaScript এ Numerical array এর element গুলোকে descending 
// অর্ডারে sort করতে হলেও আগের টেকনিক টির সামান্য পরিবর্তন করে দিলেই হবে 
// var points = [40, 100, 1, 5, 25, 10];
// document.getElementById("test").innerHTML =points.sort(function(a, b){return b-a});



