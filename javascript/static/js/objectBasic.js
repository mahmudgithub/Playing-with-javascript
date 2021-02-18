//creat e  simple object and access its values*****************
//রহিম একটা অবজেক্ট, তাহলে তার পুরোনাম, বয়স, ঠিকানা, পেশা এগুলো তার প্রপার্টিজ
// const obj={
//     name:'mahmud',
//     age:26,
//     city:'rajshahi'
// }
// console.log(obj.name);
// এবার পুরো অবজেক্ট অ্যাক্সেস করতে চাইলে জাস্ট অবজেক্ট এর নামটা লিখুনঃ
// console.log(obj);



//add new item in pre-defined object *****************
// এখন একটা অবজেক্ট ডিক্লেয়ার করা হয়ে গেছে। 
// এখন যদি এখানে নতুন কোনো আইটেম অ্যাড করতে চাই তাহলে কি উপায়?
// const obj={
//     name:"mahmmu",
//     age:27
// }
// console.log(obj);
// //add new propertics in the above object
// obj.city='rajshahi'
// console.log(obj);



//change object propertics valu******************
// অলরেডি আছে এমন একটা আইটেমের ভ্যালু চ্যাঞ্জ করতে চাইঃ
// const obj={
//     name:"mahmmu",
//     age:27
// }
// obj.name='hossain'
// console.log(obj);



//object keep an array and  function as a propertics ******************
// এখন অবজেক্ট এ আরো স্পেশাল যে ব্যাপারটা সেটা হচ্ছে আপনি চাইলে এখানে
//  ফাংশন ও সেইভ করে রেখে দিতে পারবেন আইটেম হিসেবে।
// const obj={
//     name:"mahmud",
//     city:['rajshahi','dhaka','khulna'],
//     fun:function(){
//         return 'hello'
//     }
    
// }
// console.log(obj);
// console.log(obj.name);
// console.log(obj.city[1]);
// console.log(obj.fun());

//add new function into object as a propertics
// obj.fun2 =function(){
//     return 'world'
// }
// console.log(obj);
//if access the new added function 
// এখন সেই ফাংশন কে অ্যাক্সেস করতে চাইলে সেইমভাবেই বাট 
// একটু অন্যরকম ভাবে করতে হবে। কারণ ফাংশন কল করতে হলে ফার্স্ট ব্র্যাকেট ইউজ করতে হয়ঃ
// console.log(obj.fun2());

// add a new array into object as a object propertis
// obj.obj2=['borisal','bogura']
// console.log(obj);
//access the new added array
// console.log(obj.obj2);



// অবজেক্ট এর সবগুলো আইটেম অ্যাক্সেস করতে চাইলে? হ্যা তাইলে মনে হয় লুপ ইউজ করতে হবে। 
// কিন্তু সমস্যা হলো এখানে তো ইনডেক্স নাম্বার নাই। লুপ দিয়ে আইটেম অ্যাক্সেস করতে ত লুপ লাগবে…?
//  কিন্তু না। আরেকধরনের স্পেশাল লুপ আছে যেটা ইউজ করে আপনি সবগুলো আইটেম অ্যাক্সেস করতে পারবেন। 
//  যদিও এটা তত কাজের না তাই আমি লুপের পর্বে বিশেষ করে আলোচনা করিনি।
// for(item in obj) {
//     console.log(item)
//  }



// এখন অবজেক্ট এতোই ফ্লেক্সিবল যে আপনি চাইলে অবজেক্ট এর ভিতরে অ্যারেও
//  ইউজ করতে পারবেন আবার অ্যারের ভিতরেও অবজেক্ট ইউজ করতে পারবেন।
// অবজেক্ট এর ভিতরে অ্যারেঃ****************************************
// const obj={
//     arr:['mahmud','hossain']
// }
// console.log(obj.arr[1]);


//অ্যারের ভিতরে অবজেক্টঃ**************************
// const obj={
//     arr:['mahmud','hossain',{names:'mahmud'}]
// }
// console.log(obj.arr[2])
