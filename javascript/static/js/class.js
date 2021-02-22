//জাভাস্কিপ্টও অবজেক্ট ওরিয়েন্টেড ল্যাঙ্গুয়েজ, কিন্তু অন্যান্য মেজর ল্যাঙ্গুয়েজগুলোর মতো ক্লাস বেসড না, বরং প্রোটোটাইপ বেসড ল্যাঙ্গুয়েজ। 
// //কিন্তু ইএস৬ এ অবশেষে সিন্ট্যাক্টিক শুগ্যার হিসেবে ক্লাস লাগানো হয়েছে। তার মানে হচ্ছে এই ক্লাস আসলে কিছুই না,
// // ফাংশন কন্সট্রাকটরেরই অন্যরকম সিনট্যাক্স মাত্র।
// //ইএস৫ এ আমরা ফাংশন কন্সট্রাক্টর************
// const student=function(names,city,age){
//     this.names=names;
//     this.city=city;
//     this.age=age;
// }
// const mahmud=new student('mahmud','rajshahi',26);console.log(mahmud.names);
// const hossain=new student('hossain','pabna',25);console.log(hossain);





//আরেকটা মেথড ঢুকাতে চাই এটার ভিতরে।*******************************
// const person=function(names,age,city){
//     this.names=names;
//     this.city=city;
//     this.age=age;
// }
// //এই কন্সট্রাকটরটা ডিফাইন করে ফেলছি অলরেডি।  আরেকটা মেথড ঢুকাতে চাই এটার ভিতরে।
// //আবার নতুন করে ডিফাইন করবো?? না! অবশ্যই না। এখান আমরা prototypeইউজ
// // করে নতুন মেথডটাকে আগের থাকা Person এ ঢুকাতে পারবো এভাবেঃ
// //pototype method:::::::::::::::::::::::::
// person.prototype.board=function(){
// console.log(`my name is: ${this.names} and age is:${this.age} and my city is : ${this.city}`);  
// }
// var lol=new person('mahmud',26,'rajshahi')
// lol.board();




//এখন আমরা উপরের এই সেইম জিনিসটাই ইএস৬ এর সিন্ট্যাক্স ইউজ করে অর্থাৎ ক্লাস (Class) ইউজ করে করবো।****
class person{
    constructor(names,age,city){
        this.names=names;
        this.age=age;
        this.city=city;

    };
    board(){
        console.log(`my name is: ${this.names} and age is: ${this.age} and city is :${this.age}`);
    }

}
const lol=new person('mahmud',26,'rajshhai')
//ক্লাসের ভিতরের মেথডটাকেও অ্যাক্সেস করতে 
lol.board()
//এখানে constructorমেথডটা অবশ্যই লাগবে। এটা আপনার অবজেক্ট এর ইনিশিয়াল ভ্যালুগুলো 
//সেট করার জন্যে ইউজ হবে। আর ক্লাসে এটা একটা স্পেশাল মেথড। যাই হউক এবার আমরা নতুন 
//একটা অবজেক্ট তৈরী করবো এই ক্লাস থেকেঃ
//এখন আমরা সেইমভাবে এই নতুন অবজেক্ট থেকেও ডাটাগুলো অ্যাক্সেস করতে পারবোঃ
console.log(lol.names);
