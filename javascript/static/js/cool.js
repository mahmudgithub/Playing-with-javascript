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


// এখন যদি কয়েকটা টাইপ একসাথে অ্যাড করে একটা ভ্যারিয়েবলের সেইভ করি তাহলে সেটা কোন টাইপের হবে সেটা ডিপেন্ট করে আপনার ডাটার উপর। আপনি যদি নাম্বার নাম্বার অ্যাড করেন তাহলে সেটা কনকাটিনেশন না হয়ে অ্যাডিশন হবে। 
// আর যদি আপনি স্ট্রিং এর সাথে নাম্বার যোগ করেন বা নাম্বারের সাথে স্ট্রিং যোগ করেন তাহলে পুরোটাই স্ট্রিং টাইপের হয়ে যাবে। কারণ নাম্বার নাম্বার ছাড়া ক্যারেক্টার সেইভ করতে পারে না। কিন্তু স্ট্রিং ক্যারেক্টারসহ নাম্বারও সেইভ করতে পারেঃ
var name='mahmud'+10;
console.log(name)
console.log(typeof(name))

