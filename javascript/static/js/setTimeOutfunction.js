link: https://www.w3schools.com/jsref/met_win_settimeout.asp 

// The setTimeout() method calls a function or evaluates an expression after
//  a specified number of milliseconds.
// Tip: 1000 ms = 1 second.
// Tip: The function is only executed once. If you need to repeat execution, 
// use the setInterval() method.
// Tip: Use the clearTimeout() method to prevent the function from running.

//Syntax****************
// setTimeout(function, milliseconds, param1, param2, ...)


//simple example of setTimeout function
//es5 style
// function lol() {
//     setTimeout(function(){  console.log('hello'); }, 3000);}
// lol()

//es6 style example'
// const fun=()=>{
//     console.log('start');
//     setTimeout(()=>{console.log('first');},5000);
//     setTimeout(()=>{console.log('second');},2000);
//     setTimeout(()=>{alert('end time');},7000);
// }
// fun()



// more complex button and asuchonus example*******************
// function timedText() {
//     var x = document.getElementById("txt");
//     setTimeout(function(){ x.value="2 seconds" }, 2000);
//     setTimeout(function(){ x.value="4 seconds" }, 4000);
//     setTimeout(function(){ x.value="6 seconds" }, 6000);
//   }
// <button onclick="timedText()">Display timed text</button>
// <input type="text" id="txt"></input>



//Click the button to open a new window and close the window 
//after three seconds (3000 milliseconds)
{/* <button onclick="openWin()">Open "myWindow"</button>

<script>
function openWin() {
  var myWindow = window.open("", "myWindow", "width=200, height=100");
  myWindow.document.write("<p>This is 'myWindow'</p>");
  setTimeout(function(){ myWindow.close() }, 3000);
}
</script> */}




// const fn=()=>{console.log('mahmud');}
// setTimeout(fn,3000)

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

// //set timeout with function in invock 
// (function lol(){setTimeout(()=>{console.log('hello');},4000)})()


// //set timeout with map method
// const arr=[1,2,3,4,5,6,7,8,9,10];
// (fn=()=>{
//   arr.map((item)=>{
//     console.log(item);
//   });
//   arr.map((item)=>{
//     console.log(item<5);
//     return item<5;
//   });
//   setTimeout(()=>{
//     arr.map((item,index,array)=>{
//       console.log(index,item,array);
//     });
//     setTimeout(()=>{
//       arr.filter((item)=>{
//         console.log(item<2,item);
//       })
//     },7000);

//   },5000);
// })();
