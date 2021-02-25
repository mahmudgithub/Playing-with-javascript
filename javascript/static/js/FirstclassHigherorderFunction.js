// ফার্স্ট ক্লাস ফাংশন এবং হায়ার অর্ডার ফাংশন নিয়ে কথা বলবো 
// এবং সাথে উদাহরণসহ কিছু ফাংশন তুলে ধরবো যেগুলো থেকে ক্লিয়ার ধারণা পাওয়া যাবে। 
// সবশেষে হায়ার অর্ডার ফাংশন map() এর ব্যবহার দেখাবো।
// জাভাস্ক্রিপ্ট এ ফাংশন কে ফার্স্ট ক্লাস ফাংশন বলা হয়। এখন কথা হলো ফার্স্ট ক্লাস ফাংশন কি?
// ফার্স্ট ক্লাস ফাংশনকে আপনি অন্য কোনো ফাংশনের আর্গুমেন্ট হিসেবে পাস করতে পারবেন,
// এক ফাংশন থেকে আরেকটা ফাংশন রিটার্ন করতে পারবেন। আর সবচেয়ে মজার ব্যাপার হলো 
// ফাংশনকে ভ্যারিয়েবল হিসাবেও স্টোর করতে পারবেন।

//function pass as an argument
// //ফাংশনকে আর্গুমেন্ট হিসেবে পাস করাঃ
// const fun1=(names,callback)=>{var age=26;var city='rajshahi';callback(age,city);console.log(names);}

// const fun2=(x,y)=>{console.log(x,y);}
// fun1('mahmud', fun2);


// const one=(names,callback2)=>{ var city='rajshai'; callback2(city); console.log(names);};
// const two=(y)=>{console.log(`my city :${y}`);};
// one('mahmud',two)


// //ফাংশন থেকে ফাংশন রিটার্ন করাঃ
// fn=()=>{
//     return ()=>{
//         console.log('i am innner function');
//     }
// }
// fn()()

//map function
// //map একটা হায়ার অর্ডার ফাংশন আর আমার মতে সবচেয়ে বেশী ইউসড একটা ফাংশন। 
// //এর কাজ হচ্ছে একটা অ্যারের সবগুলা আইটেম নিয়ে সেগুলার উপরে স্পেসেফিক কোনো ফাংশন অ্যাপ্লাই করে
// const arr=[1,2,3,4,5]
// const lol=fn=()=>console.log(arr);
// lol()

//now using map method ,multiply eatch array elments and keep it another array
// const arr=[1,2,3,4,5];
// const one=arr.map((item)=>{
//     return item*item;
// })
// console.log(one);
// one.push(6);
// console.log(one);
// const two=one.map((item2)=>{return item2*2});
// console.log(two);
// const three=two.reduce((total,item)=>{
//     return total+item;
// })
// console.log(three);
// const four=arr.filter((item)=>{
//     return (item%2==0);
// })
// console.log(four);;