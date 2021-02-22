// spred operetor ******************************
// // different btween simple and spred operetor 
// // spred operetor may be exced array value to single value 
// const arr=['mahmud','hossain','lamyaa']
// console.log(arr);
// console.log(...arr);

// const arr=['mahmud','hossain','nannu']
// console.log(arr);
// console.log(...arr);

// const fun=(x,y,...arr)=>{
//     console.log(x);
//     console.log(y);
//     console.log(arr);
//     console.log(...arr);
// }
// fun('lamyaa','nowsin','niva','lima','ara')

// const fun1={
//     city:'rajshahi',
//     board:'rajshahi',
    
    
// }
// // const {city}=fun1
// // console.log(city);

// const fun2={
//     ...fun1,
//     city:'khulna',
//     board:'khulna'

// }
// console.log(fun2)


//link: https://js.zonayed.me/es6/post-7 
// //স্প্রেড(Spread) অপারেটর**********************************
// //স্প্রেড অপারেটরের আসল কাজ হচ্ছে কোনো পুনরাবৃত্তিমূলক ডাটাকে যেমন অ্যারে বা স্ট্রিং কে তাদের 
// //নিজের অবস্থানের মধ্যে ছড়িয়ে দেওয়া।
// //স্প্রেড অপারেটর আসলে এই …তিনটা ডট। 
// //ধরি আমাদের একটা অ্যারে আছেঃ

// var numbers = [1, 2, 3, 4];
// //এখন এগুলোর যোগফল বের করার জন্যে একটা ফাংশন বানালামঃ
// function calculate(a, b, c, d) {
//    console.log((a + b + c + d));
// }
// //এখন ফাংশন কল করতে চাই উপরের নাম্বারগুলো পাস করেঃ
// calculate(numbers);        //কাঙ্ক্ষিত ফলাফল আসলো নাঃ
// //কারণ আমরা যে numbersআর্গুমেন্টস হিসাবে পাস করেছি সেটা পুরোটা একটা অ্যারে। 
// //কিন্তু আমরা আমাদের ফাংশনে প্যারামিটার নিয়েছি চারটা, a,b,cও d। আর তাই এটা চারটা আর্গুমেন্টই আশা করছে। 
// //কিন্তু আমরা পুরো একটা অ্যারে(একটা আর্গুমেন্ট হিসাবে গণ্য হবে) পাস করে দিয়েছি, আর তাই আমরা
// // আমাদের কাঙ্ক্ষিত ফলাফল পাই নাই।
// //so using spread operator
// //এই জন্যেই ইএস৬ এ স্প্রেড অপারেটর আসছে।
// calculate(...numbers);  //কাঙ্ক্ষিত ফলাফল আসলো



// //যেমন কোনো অ্যারেতে নতুন ইলিমেন্ট অ্যাড করতে চাইলে আমরা pushবা unshiftইউজ করি।
// var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
// //ইএস৫ এ এখন শুরুর দিক হতে কোনো ইলিমেন্ট অ্যাড করতে চাইলে
// arrName.unshift('mahmud')
// console.log(arrName);
// //same as ইএস৫ এ শেষের দিক হতেও যদি কোনো ইলিমেন্ট অ্যাড করতে চাইঃ
// arrName.push('hossain');
// console.log(arrName);



// //কিন্তু ইএস৬ এ স্প্রেড অপারেটর থাকায় ব্যাপারটা আরো অনেক ফ্লেক্সিবল হয়ে গেছে এখন। 
// //আপনি যে পজিশনে আপনার অ্যারেটা ছড়িয়ে দিতে চান সে পজিশনে রাখলেই হয়ে যাবে।
// // যেমন উপরেই দুইটা কাজই একলাইনে করে ফেলতে চাইলেঃ
//  var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
// const arrName2 = ['Bangladesh', ...arrName, 'Language']
// console.log(arrName2);



// //ধরি আমাদের দুইটা অ্যারে আছে এরকমঃ
// var One = [0, 1, 2, 3, 4];
// var Two = [5, 6, 7, 8, 9];
// //এখন ইএস৫ এ আমরা অ্যারে দুইটা একসাথে করতে চাইলেঃ
// var three=One.concat(Two);
// console.log(three);

// //by using es6 spread operetor
// const One = [0, 1, 2, 3, 4];
// const Two = [5, 6, 7, 8, 9];
// const three=[...One,...Two]
// console.log(three);
