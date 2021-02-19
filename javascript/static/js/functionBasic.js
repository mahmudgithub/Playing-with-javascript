//simple funsction example******************************
// //es5 style
// function fn1(){console.log('i am first function of es5');}fn1()
// //es6 style
// fn2=()=>{console.log('i am es6 function');}; fn2()


// function like as a variable******************************
// //es5 style
// const one=function(){console.log('i am es5 style function');} ; one()
// //es6 style
// const two=()=>{console.log('i am es6 style');};two()
// //OR
// const three=lol=>{console.log('i am es6 style');} ;three()
// //OR
// const four=sos=()=>{console.log('i am es6 style');}; four()


//use return in function****************************************
// //es5 style
// function lol(){return 'i am es5 return function'};console.log(lol());
// //es6 style
// fn=()=> {return 'i am es6 style return function'};console.log(fn());
// //OR
// const va=fn=>{return 'i am es6 retur fun'}; console.log(va());


//function take parameter *********************************
// //es5 style
// function fn(x,y){return x+y};console.log(fn(2,2));
// //es6 style
// fn=(x,y)=>{return x+y};console.log(fn(3,3));
////OR
// const one=lol=(x,y)=> {return x+y};console.log(lol(5,5));
// // এখানেই আসে প্যারামিটার আর আর্গুমেন্ট এর কথা। আমরা ফাংশনের ভিতরে ডাটা দিতে এগুলো ইউজ করি।
// // এখন ফাংশন যত ইচ্ছা ততোটাই প্যারামিটার নিতে পারবে। দুইটা সংখ্যা না, চাইলে একশো সংখ্যাও নিতে পারবে। 
// // কিন্তু যতটা প্যারামিটার দিবেন আপনার ফাংশনে, ঠিক ততোটাই আর্গুমেন্ট দিতে হবে ফাংশন কল করার সময়। 
// // নতুবা আপনার ফাংশন ঠিকমতো রেজাল্ট দেখাবে না। 


//a function take other function as an argument****************************
//callback function*****************************
// //এখন জাভাস্ক্রিপ্ট এ যেহেতু ফাংশনকে ফার্স্ট ক্লাশ ফাংশন ধরা হয় তাই আপনি চাইলে একটা ফাংশনকে
// // আরেকটা ফাংশনের আর্গুমেন্ট হিসেবে পাস করতে পারবেন। this is call callback function 
// //es5 style
// function one(x){ x();}
// function two()console.log('i am callback function');
// one(two)
////es6 style
// fn1=(x)=>x()
// fn2=()=>console.log('i am callback  style es6');
// fn1(fn2)



