//link:https://js.zonayed.me/advance/post-4 
// //একটা ফাংশন কন্সট্রাকটর আছে Personনামে
// var Person = function(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//  }
//  //এখন যদি ধরি আমরা আরেকটা ব্লু-প্রিন্ট চাই Teacherনামে। 
//  //অতিরিক্ত আরেকটা আছে কোন সাবজেক্ট(subject) পড়ায়
//  var Teacher = function(name, age, job, subject) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.subject = subject;
//  }
// //  কিন্তু এভাবে আমরা সেইম জিনিসগুলো পুনরায় ইউজ করাটা খুব ক্লিন দেখায় না।
// //   আমরা এখানে এমন কিছু করতে চাই যাতে আমরা Personথেকে পার্সনের ফিচারগুলো Teacherএ আনবো,
// //    এবং সেই সাথে টিচারের অতিরিক্ত যেটা আছে সেটা ডিফাইন করে দিবো। এটাকেই মূলত ইনহেরিট করা বলে। 
// //    এখন ইনহেরিট্যান্স কয়েকরকমের হতে পারে।


//প্রোটোটাইপ বেসড ইনহেরিট্যান্সঃ**********************
// var PersonOnly = function(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//  }
//  //ধরি আমরা এই কন্সট্রাকটরটা ডিফাইন করে ফেলছি অলরেডি। কিন্তু এখন জন্ম তারিখ()
//  // বের করার জন্যে আরেকটা মেথড ঢুকাতে চাই এটার ভিতরে। কি করা যায়? আবার নতুন করে ডিফাইন করবো??
//  // না! অবশ্যই না। এখান আমরা prototypeইউজ করে নতুন মেথডটাকে আগের থাকা PersonOnlyএ 
//  //ঢুকাতে পারবো এভাবেঃ
//  PersonOnly.prototype.dateOfBirth = function() {
//     console.log(this.name + ' born in ' + (2018 - this.age));
//  }
//  //প্রোটোটাইপ চেইনের কারনে এখন এই মেথডটাকেও অ্যাক্সেস করা যাবে এই PersonOnlyথেকে 
//  //তৈরী করা অবজেক্টগুলো থেকে। ধরি নিচে একটা অবজেক্ট তৈরী করলাম এই কন্সট্রাকটর ফাংশন থেকেঃ
//  var zawad = new PersonOnly('Zawad Ahmed', 1, 'Child');
//  //এখন আমরা আমাদের তৈরীকৃত মেথডটাকে অ্যাক্সেস করতে চাইলেঃ
//  console.log(zawad.dateOfBirth());




//কন্সট্রাকটর ইনহেরিট্যান্সঃ********************************************
// var Person = function(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//  }
//  //এখন আমাদের টিচারদের জন্যেও একটা ফাংশন কন্সট্রাকটর দরকার যেখানে ঠিক এইগুলোও থাকবে সেই 
//  //সাথে অতিরিক্ত একটা subjectনামে আরেকটা থাকবে
// //  var Teacher = function(name, age, job, subject) {
// //     this.name = name;
// //     this.age = age;
// //     this.job = job;
// //     this.subject = subject;
// //  }
//  //এখন আমাদের ইনহেরিট্যান্স থাকার কারনে এভাবে নতুন করে Teacherএর ভিতরে সবকিছু ডিফাইন করার কোনো দরকার নাই।
//  var Teacher = function(name, age, job, subject) {
//     Person.call(this, name, age, job);
//     this.subject = subject;
//  }
//  //এখানে আমরা ভিতরে Personকে কল করে এনেছি এবং callমেথড ইউজ করে thisএর 
//  //ভ্যালু ডিটারমাইন করে দিলাম। এখন এখানে thisমানে thisই! কেনো? হ্যাঁ মনে করার চেষ্টা করুন। 
//  //আমরা যখন এটা দিয়ে অবজেক্ট তৈরী করবো, তখন newকীওয়ার্ড ইউজ করবো। আর সেজন্যে আমাদের 
//  //thisএর নতুন কন্টেক্সট তৈরী হবে যেটা নতুন অবজেক্টটাকে ইন্ডিকেট করবে। তার মানে এখানে ডিফাইন
//  // করা thisটা আসলে আমরা ভবিষ্যতে যে অবজেক্ট তৈরী করবো সেটাকেই ইন্ডিকেট করছে। এখন বাকি অংশ 
//  //ঠিক আগের মতোইঃ
//  var kamaljeet = new Teacher('Kamaljeet Saini', 53, 'Teacher', 'CSE');
//  console.log(kamaljeet.name);
// console.log(kamaljeet.age);
// console.log(kamaljeet.job);
// console.log(kamaljeet.subject);
// //আমরা এভাবেই Personএর ফিচারগুলো Teacherএ ইনহেরিট করে নিয়ে আসলাম।



//এখন আমাদের এমনও ফাংশন কন্সট্রাকটরও থাকতে পারে যেটা কোনো প্যারামিটার নেয় না।****************
// // বাই ডিফল্ট ভ্যালু সেট করা থাকতে পারে এরকমঃ
// var GeneralPeople = function(name, age, job) { 
//     this.name = name;
//     this.age = age;
//     this.job = job;
//  }
//  //এখন ধরি আরেকটা অবজেক্ট আছে Athleteনামে যেটা ঠিক GeneralPeopleএর সবগুলো ফিচারই থাকবে।
//  // সাথে এক্সট্রা আরেকটা থাকবে। 
//  var Athlete = function(name, age, job, prize) {
//     GeneralPeople.call(this,name,age,job);
//     this.prize = 100;
//  }
 
//  var lol=new Athlete('mahmud','student',30);
//  console.log(`name:` +lol.name);
//  console.log(`age:` +lol.age);
//  console.log(`job:` +lol.job);
//  console.log(lol.prize);
//ব্যাস এভাবেই আমরা কোনো প্যারামিটার/আর্গুমেন্ট ছাড়াও ইনহেরিট্যান্স নিয়ে কাজ করতে পারি। 
//এখানে দুইটার মধ্যে কোনো পার্থক্যই নেই আসলে।