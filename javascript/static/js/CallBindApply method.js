//link:https://js.zonayed.me/advance/post-1 
//call(), bind() এবং apply() মেথড***************************************
//জাভাস্ক্রিপ্ট ভালো করে আয়ত্তে আনতে হলে এই তিনটা (call, bind,apply) মেথড সম্পর্কে আপনার পরিষ্কার ধারণা থাকতে হবে। 
//এই তিনটা মেথডই প্রথম আর্গুমেন্ট হিসাবে thisকীওয়ার্ডের কন্টেক্সট বা ভ্যালু কি হবে সেটা নেয়। 
//তারমধ্যে call()আর bind()আনলিমিটেড আর্গুমেন্ট নিতে পারে আর অন্যদিকে apply()মাত্র
// দুইটা আর্গুমেন্ট(প্রথমটা সবসময়েই thisএর ভ্যালু ডিটারমাইন করতে, আর দ্বিতীয়টা একটা অ্যারে) নেয়।
// এখন বুঝলাম প্রথম আর্গুমেন্ট thisডিটারমাইন করার জন্যে দেওয়া হয়, কিন্তু বাকী আর্গুমেন্টগুলা কিসের? 
//হ্যাঁ বাকিগুলো আপনি যে ফাংশনের সাথে এই মেথডগুলো লাগাবেন সেই ফাংশনেরও আর্গুমেন্ট থাকতে পারে,
// সে আর্গুমেন্ট যতটাই হউক আপনি call()আর bind()এর ক্ষেত্রে একটার পর একটা দিতে পারবেন।
// অন্যদিকে apply()এর ক্ষেত্রে যে অ্যারেটা দিবেন সেটা হবে সেই ফাংশনের সবগুলো আর্গুমেন্টের অ্যারে।
//আরেকটা ডিফারেন্স হলো call(), apply()আর bind()এর মধ্যে। যেখানে call(), apply()যে ফাংশনের 
//সাথে ইউজ করবেন সেটা সাথে সাথে কল হয়ে যাবে। অন্যদিকে bind()সাথে সাথে ফাংশনটাকে কল করে না,
// বরং আপনি সেটা পরে যেকোনো সময় চাইলে নিজের মন মতো করে কল করতে পারবেন।


//call() মেথডঃ*************************************
// let obj1={
//     names:'mahmud',
//     city:'rajshhai',
//     obj2:{
//         names:'hossain',
//         roll:12345,
//         obj3:{
//             names:'lamyaa',
//             fn:function(){
//                 console.log(this.names);
//             }
//         }
//     }
// }
// //if i want to call obj1 names by using call method
// obj1.obj2.obj3.fn.call(obj1);
// //if i access obj2 names
// obj1.obj2.obj3.fn.call(obj1.obj2)




// //আরেকটা জিনিস আমরা চাইলে call()টা আমাদের অবজেক্ট এর সাথেও দিতে পারতাম।
// // কিন্তু ঐ যে বললাম call()যেখানে ইউজ করা হয় সেটা সাথে সাথে কল হয়ে যায়,
// // তাই আপনি যেরকম আশা করবেন সেরকম রেজাল্ট নাও আসতে পারেঃ
// var obj1={
//     names:'mahmud',
//     city:'rajshhai',
//     obj2:{
//         names:'hossain',
//         roll:12345,
//         fn:function(){
//                 console.log(`my name:`+this.names);
//         }.call(obj1)
//     }
// }
// //এটা এভাবে রান করার পর পরই দেখবেন আপনার ফাংশন কল করা ছাড়াই প্রিন্ট হয়ে গেছেঃ





// //সেইমভাবে আপনার দুইটা সম্পূর্ন পৃথক পৃথক অবজেক্ট এর ক্ষেত্রেও আপনি এই মেথডগুলো কাজে লাগাতে পারবেন। 
// //যেমন ধরি আমাদের দুইটা অবজেক্ট আছে এরকমঃ
// var mahmud = {
//     name: 'mahmud',
//     dob: 1996,
//     age: function(currentYear) {
//        console.log(this.name + ' is ' + (currentYear - this.dob) + ' years old!');
//     }
//  }
//  karim.age(2018)

//  var hossain = {
//     name: 'hossain',
//     dob: 1986
//  }
// mahmud.age.call(hossain, 2018);
// //এখন লক্ষ্য করুন rahimএ আমাদের কিন্তু ageনামক ফাংশনটা নাই, কিন্তু তারপরেও আমরা চাইলে
// // এই ageইউজ করে এর সাথে call(), bind()বা apply()দিয়ে এর ভিতরের thisএর ভ্যালু চেঞ্জ করে
// // সেটা rahimএর জন্যেও ইউজ করতে পারিঃ
// //আরো দেখবেন এখানে দ্বিতীয় আর্গুমেন্ট হিসাবে ageএর আর্গুমেন্ট হিসাবে ভ্যালু পাস করেছি। 
// //সেইম জিনসটা bind()আর apply()দিয়েও করা যাবে।





//apply() মেথডঃ*****************************************************
// //এটাও সেইম টু সেইম call()এর মতোই, জাস্ট এটা দুইটা আর্গুমেন্ট নিবে আর দ্বিতীয় আর্গুমেন্ট টা 
// //আপনার ফাংশনের জন্যে যে কয়টা আর্গুমেন্ট থাকবে সেগুলার অ্যারে নিবেঃ
// var Obj1 = {
//     names: 'mahmud',
//     age: 21,
//     job: 'Student',
//     Obj2: {
//        names: 'hossain',
//        fn: function() {
//           console.log('My name is ' + this.names);
//        }
//     }
//  }
// Obj1.Obj2.fn();
// //but use call and apply metods
// //call
// Obj1.Obj2.fn.call(Obj1);
// //apply
// Obj1.Obj2.fn.apply(Obj1)
// //result is same as call and apply





// //call()থেকেapply()এর পার্থক্যটা দ্বিতীয় আর্গুমেন্ট নেওয়ার ক্ষেত্রে যেখানে apply()আর্গুমেন্ট এর অ্যারে নেয়। 
// const obj={
//     names:'mahmud',
//     city:'rajshahi',
//     obj2:{
//         names:'hossain',
//         fn:function(msg){
//             console.log(`${msg} ${this.names}`);
//         }
//     }
// }
// obj.obj2.fn.apply(obj,['hello'])
// //লক্ষ্য করুন এখানে দ্বিতীয় আর্গুমেন্ট টা একটা অ্যারে যেটা আপনার msg ফাংশনের সবগুলো আর্গুমেন্ট নিয়েছেঃ
// //এবার call()আর apply()মধ্যে তফাৎ টা ধরতে পেরেছেন






//bind() মেথডঃ****************************************
////ই bind()একটু স্পেশাল আর ইউজ কেসও বেশী এটার
// //bind()ঠিক call()এর মতো হলেও যেখানে call()আরapply()সাথে সাথে যে ফাংশনের সাথে ইউজ করা হয়েছে 
// //সেটাকে কল করে ফেলে, bind()সেখানে সে ফাংশনকে কল করে না, বরং এটা সেই ফাংশনের আরেকটা 
// //ডেফিনেশন রিটার্ন করে যেটা পরবর্তিতে আপনি যেকোনো জায়গায় কল করতে পারবেন বা ইউজ করতে পারবেন।
// const obj={
//     names:'mahmud',
//     city:'rajshahi',
//     obj2:{
//         names:'hossain',
//         fn:function(){
//             console.log(`name: ${this.names}`);
//         }
//     }
// }
// //now access obj1 names parameer value
// //by call method
// obj.obj2.fn.call(obj);  //ouput show 
// //by apply method
// obj.obj2.fn.apply(obj);  //output show
// //by bind metod
// obj.obj2.fn.bind(obj);   //otput not show, ,becouse it not work in this process
// //when keep bind function to another variable ,and then call next the variable function,found its output
// var lol=obj.obj2.fn.bind(obj);
// lol();


// //bind()এ আপনি আর্গুমেন্টগুলোও পৃথক পৃথক ভাবে কল করতে পারবেন। ধরেন প্রথমে আপনি আপনার 
// //কিছু আর্গুমেন্ট দিলেন, পরে আবার ফাংশন কল করার সময় বাকি আর্গুমেন্টগুলো দিতে পারবেন।
// const obj={
//     names:'mahmud',
//     city:'rajshahi',
//     obj2:{
//         names:'hossain',
//         fn:function(one,two,three){
//             console.log(`name: ${this.names} and ${one} and ${two} and ${three}`);
//         }
//     }
// }
// var lol=obj.obj2.fn.bind(obj);
// lol()
// //take one parameter argument
// lol('i am one');
// //take one and two and three parameter values
// lol('i am one ','i am two','i am three')