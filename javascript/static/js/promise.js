//প্রমিস (Promise)**********************************************
// //জাভাস্ক্রিপ্ট এর অ্যাসিনক্রোনাস আচরণ সম্পর্কে আমরা জানি। রিমোট কোনো সার্ভার থেকে বা 
// //একটু সময় লাগে এমন কোনো অপারেশন শেষ করার জন্যে জাভাস্ক্রিপ্ট অপেক্ষা না করে 
// //বরং পরের অপারেশনে চলে যায়। এধরনের অপারেশন হচ্ছে অ্যাসিনক্রোনাস অপারেশন। 
// //এখন এই অপারেশন ফেলে অন্য অপারেশনে চলে গেলেও জাভাস্ক্রিপ্ট ঠিকই এটাকেও ট্র্যাক করে রাখে। 
// //আর এইজন্যেই জাভাস্ক্রিপ্ট প্রমিস(Promise) ব্যবহার করে।
// //এখন প্রমিসের কাজ হচ্ছে এ ধরনের অ্যাসিনক্রোনাস অপারেশনকে হ্যান্ডল করা।
// //এখন আমরা রিমোট একটা সার্ভারের উপর অপারেশন চালাচ্ছি, কিন্তু ডাটা না আসা পর্যন্ত কিন্তু আমরা বলতে পারি না 
// //অপারেশন সফল হবে না বিফলে যাবে। আর মূলত এইসব হ্যান্ডল করার জন্যেই প্রমিস কাজ করে।
// // অধিকাংশ ক্ষেত্রেই আমাদের প্রমিস নিজেদের তৈরী করতে হয় না। আমরা জাস্ট প্রমিসটা হ্যান্ডল করি।
// // প্রমিসের মূল স্ট্রাকচার আমরা যে লাইব্রেরী দিয়ে কাজ করবো, সিস্টেম থেকে করবো, সেখানেই ইমপ্লিমেন্ট করা থাকে।
// // আমাদের জাস্ট প্রমিসটাকে হ্যান্ডল করতে হয়।


//প্রমিস কিভাবে আমরা নিজেরা তৈরী করতে পারি ************************
// // প্রমিসের মূলত ৩টা স্টেট আছেঃ
////resolve(operation successfully complarted)
////error(operation succesfull but have an error)
////unresolve(weating for operation complating)


//crate a full promise structure************************
// const veri=lol=>{return new Promise((resolve,reject)=>{setTimeout(() => { if(lol){resolve();}else{reject();}   
// },5000);})}
// //এখানে আমরা একটা ফাংশন sos তৈরী করেছি, যেটার একটা আর্গুমেন্ট নিবে। এখন এই ফাংশন প্রমিস রিটার্ণ করবে। 
// //প্রমিস দুইটা আর্গুমেন্ট নেয়, resolveআর reject। তারপর আমরা ভিতরে setTimeoutদিয়ে
// // একটা ফেইক টাইম লাগতে পারে এমন অপারেশন তৈরী করেছি ৩০০০ মিলিসেকেন্ড(৩ সেকেন্ড) টাইম দিয়ে। 
// // তারপর আসলে মজার ব্যাপার। আমাদের প্রমিস যদি তখনি সফল হবে যদি আমরা আমাদের কাঙ্খিত ফলাফল পাই। 
// // এখন আমরা এই ফাংশনে(aPromise) একটা আর্গুমেন্ট নিয়েছি, এটা দিয়ে আমরা trueঅথবা falseপাস করে
// //  প্রমিস সফল না ব্যর্থ সেরকম একটা কন্ডিশন তৈরী করবো। যদি আর্গুমেন্ট টা trueহয় তাহলে আমাদের 
// //  প্রমিস সফল হয়েছে এবং আমরা resolve()কল করবো। আর যদি falseহয় তাহলে reject()কল করার মাধ্যমে 
// //  প্রমিস ব্যর্থ হয়ে
// //এখন আমরা আমাদের ফাংশনটা lol , true আর্গুমেন্ট দিয়ে কল করলেঃ
// lol(true)


// প্রমিস হ্যান্ডল করা *******************************
// first create a promise
// const vari=pol=>{return new Promise((resolve,reject)=>{setTimeout(() => {if(pol){resolve();}else{reject();}    
// }, 3000)})}
// // এখন আমরা প্রমিস সফল বা ব্যর্থ হয়েছে কিনা সেটা হ্যান্ডল করবো। সেক্ষেত্রে যদি প্রমিস সফল হয় তাহলে 
// // আমাদের lol ফাংশনের সাথে .then()চেইন করে এখানে একটা কলব্যাক ফাংশন দিতে পারবো,
// //  যেটা প্রমিসে সফল বা অন্যকথায় resolveহলে রান হবেঃ
// //আর যদি প্রমিস রিজেক্ট হয় তাহলে আমাদের সেটা আরেকটা চেইন অপারেশন .catch()এর মধ্যে কলব্যাক ফাংশন
// // দিয়ে হ্যান্ডল করতে হবে। এখন আমরা কিন্তু জানিনা যে অপারেশন সফল না ব্যর্থ হবে। সেক্ষেত্রে আমাদের .then()
// //আর .catch()দুইটাই রাখতে হবে। .catch()রান করবে কোনো কারণে যদি আমাদের প্রমিস rejectহয়ঃ

//// call the promise
// vari(true)  // or vari(false)
//// handel the promise(if get date true )
// .then(()=>{console.log('found data');})
// //handel the promise (if get data error )
// .catch(()=>{console.log('not found data');})




// remote data get by promise******************************
// //এখানে প্রথমে আমরা যে aPromiseফাংশন দিয়ে প্রমিস রিটার্ণ করলাম, সেই প্রমিস তৈরী করার পার্টটা 
// // বেশীরভাগ ক্ষেত্রেই আমাদের লেখা লাগে না। বরং আমরা যে সিস্টেম ব্যবহার করে ডাটা আদান-প্রদান করি,
// //  বা লাইব্রেরী ব্যবহার করি সেগুলোতেই এই অংশটা কোড করা থাকে কখন কিভাবে প্রমিস resolveকরবে 
// //  নাকি rejectকরবে এসব। আমাদের বেশীর ভাগ ক্ষেত্রে রিটার্ণ হওয়া প্রমিস .then()আর .catch()দিয়েই 
// //  হ্যান্ডল করতে হয়। আবার ভিতরে যে কলব্যাক গুলো ব্যবহার করা হয়, সেসব কলব্যাকে বেশীরভাগ ক্ষেত্রে
// //   আমাদের রিমোট সার্ভার থেকে যে ডাটা চাই, সেগুলো আর্গুমেন্ট হিসেবে আসে। আমরা কলব্যাকের ভিতর থেকে
// //    সেই আর্গুমেন্ট এর সাহায্যে সেগুলো অ্যাক্সেস করতে পারি। যেমন আগের প্রমিসটা একটু মডিফাই করলে, 
// //    আমরা চাইলে resolve()বা reject()থেকে ডাটা পাঠাতে পারিঃ
////এখানে resolve()বা reject()থেকে ঠিক যেভাবে ডাটাগুলো পাঠানো হয়েছে সেভাবেই 
////আমরা .then()বা .catch()এর কলব্যাক থেকে অ্যাক্সেস করতে পারবো আর্গুমেন্ট হিসেবে অ্যাক্সেপ্ট করেঃ
// const vari=lol=>{return new Promise((resolve,reject)=>{setTimeout(() => {if(lol){resolve('successfuly data achived')}else{reject('donot achived data')}
// }, 5000);})}
//vari(true).then((data)=>{console.log(data);}).catch((err)=>{console.log(err);})
////OR
// vari(false).then((data)=>{console.log(data);}).catch((err)=>{console.log(err);})
////দেখুন এই ডাটা আমাদের প্রমিস থেকে এসেছে, তারপর এখানে resolve()হয়ে 
////.then()এর কলব্যাকে আর্গুমেন্ট হিসেবে এসেছে, যেটা আমরা পরে অ্যাক্সেস করে প্রিন্ট করতে পেরেছিঃ
////একইভাবে প্রমিস rejectহলেওঃ


// multiple promise handeling**********************************
//একাধিক প্রমিস হ্যান্ডল করাঃ 
////এরকম কোনো কোনো সময় আমাদের একাধিক প্রমসিও হ্যান্ডল করতে হতে পারে।
// // যেমন ধরি আমাদের দুইটা প্রমিস আছেঃ lol1 and lol2
// //const lol1=new Promise((resolve,reject)=>{
// //setTimeout(()=>{if (true){resolve('lol1 success');} else{reject('lol1 error');}},3000)});

// //const lol2=new Promise((resolve,reject)=>{
// //setTimeout(()=>{if (true){resolve('lol2 success');} else{reject('lol2 errro');}},3000)});

// //এখন এই দুইটা প্রমিস কমপ্লিট হওয়ার পর কোনো অপারেশন চালাতে চাইলে আমরা দুইটা প্রমিসকে অ্যারে আকারে এভাবে নিতে পারিঃ তারপর 
// //.then()দিয়ে কলব্যাক কল করতে পারবো যেটা এই দুইটা প্রমিস কমপ্লিট হলে পরেই রান করবে। আর এই প্রমিসগুলো থেকে আসা ডাটাগুলো 
// //এই কলব্যাক ফাংশনে অ্যারে আকারে আসবেঃ
// //Promise.all([lol1,lol2]).then((dataArr)=>{console.log(dataArr);}).catch((errorArr)=>{console.log(errorArr);})


// fetch() অ্যাপিআইঃ****************************
// // এখন আমরা সত্যিকারের রিমোট সার্ভার থেকে ডাটা এনে সেটা নিয়ে কাজ করবো,
// //  এজন্যে আমরা ব্রাউজারের fetch()অ্যাপিআই ব্যবহার করবো। এই অ্যাপিআই এর কাজ হচ্ছে বাইরের
// //   রিমোট কোনো সার্ভার থেকে রিসোর্স আনা। 
// // এটা যেহেটু মডার্ণ ব্রাউজারগুলোতে বিল্ট-ইন ভাবেই আছে, তাই আমরা এখানে এটাই ব্যবহার করবো। 
// // এখন এই fetch()অ্যাপিআই নিজে নিজেই প্রমিস রিটার্ণ করার প্রসেসটা হ্যান্ডেল করে। আমাদের জাস্ট রিটার্ণ হওয়া প্রমিসটা
// //  হ্যান্ডেল করতে হবে। আমরা একটা একটা একটা রিমোট সার্ভার থেকে ফেইক কিছু ডাটা সত্যিকারেরই আনবোঃ
// const dataFromRemote = fetch('https://jsonplaceholder.typicode.com/posts');
////এই কোড রান করলে ব্রাউজারের কন্সোলে এই ডাটাগুলো ফেচ হয়ে dataFromRemoteনামক একটা
////ভ্যারিয়েবলে স্টোর হবে। এখন আমার কথামতো ফেচ অ্যাপিআই প্রমিস রিটার্ণ করার কথা। 
////তাহলে এখানে dataFromRemoteনিশ্চই প্রমিস হবেঃ
// console.log(dataFromRemote);
////এখন আমরা এটাকে সহজেই .then().catchদিয়ে সহজেই হ্যান্ডল করতে পারবো। 
////আর এই ফেচ অ্যাপিআই ফেচ করা ডাটাগুলো .thenএর কলব্যাকে আর্গুমেন্ট হিসেবে পাস করে। 
////আর কোনো এরর হলে .catchএর কলব্যাকে আর্গুমেন্ট হিসেবে পাস করেঃ
// dataFromRemote.then((data)=> {console.log(data);}).then((err)=>{console.log(err);})
////খানে dataতে কিছু ডাটা দেখতে পারবেন। এগুলোই আপনার প্রমিস resolveহওয়ার কারণে সাক্সেস টাইপের কিছু ডাটাঃ

////এখন ফেচ অ্যাপিআই এর জটিল স্ট্রাকচারের কারণে মূল যে ডাটা ফেচ করেছি সেটা এখানে না থাকলেও 
////এটা মূলত আমাদের প্রমিস resolveহওয়ার পরের ডাটাই এখানে দেখাচ্ছে। তবে সমস্যা নাই,
//// ফেচ অ্যাপিআই থেকে ভালো ভালো আরো অনেক লাইব্রেরী আছে যেগুলোই আসলে আমরা আমাদের ডেভেলপমেন্ট এ
//// সবচেয়ে বেশী ব্যবহার করবো। এখন যদি কোনো কারণে আমরা একটা ভুলভাল রিকোয়েস্ট পাঠাই ফেচ অ্যাপিআই দিয়েঃ
// const falseLink = fetch('https://jsonplaceholderdoesntexist.typicode.com/posts');
////আপনি যদিও আপনার কন্সোলে প্রমিস রিজেক্ট হওয়ার ম্যাসেজ পাবেন। তবে আসল ম্যাসেজ আপনি 
////.catch()থেকে পাবেন যেখানে আপনি এই এররটাকে হ্যান্ডল করতে পারবেনঃ
// falseLink.then((data)=>{console.log(data);}).catch((err)=>{console.log('err:', err);})
////এখন আমাদের প্রমিস resolveহয়ে গেলে কিন্তু catchব্লকের কোনো দরকারই পড়ে না।
//// কিন্তু এটাও মোটেও ভালো প্র্যাক্টিস না যে আপনি catchব্লক না রেখেই আপনার অ্যাপ্লিকেশনে 
////সব প্রমিস হ্যান্ডল করে ফেললেন। এরর হতেই পারে, যেকোনো কারণেই হতে পারে। আর সেজন্যে 
////এই catchব্লক রেখে সেটাকে হ্যান্ডল করাটাই ভালো প্র্যাক্টিসের মধ্যে পড়ে।


//আসল ডাটা উদ্ধার করাঃ
////একটু আগে আমরা অন্য এক জায়গা থেকে ডাটা ফেচ করার জন্যে ফেচ অ্যাপিআই দিয়ে রিকোয়েস্ট করলাম,
//// কিন্তু আসল ডাটা এখনো আমরা দেখিনাই। এটার কারণ ফেচ অ্যাপিআইয়ের জটিল স্ট্রাকচারের জন্যে।
//// তবে যাই হউক একটা জিনিস ভালো হয়েছে যে এখন আমরা দেখবো কিভাবে আসল ডাটা উদ্ধার করা যায় 
////এখান থেকে, আর সেই সাথে আমরা নতুন আরেকটা সমস্যার সাথে পরিচয় করিয়ে দিবো এখানেই। 
////আমরা আমাদের ডাটাগুলো অ্যাক্সেস করবোঃ
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((data) => {return data.json();})
// .then((posts) => {console.log(posts);})


// more pactics******************************************
// //a full promise sturucture
// const veri=lol=>{return new Promise((resolve,reject)=>{setTimeout(() => { if(lol){resolve();}else{reject();}   
// },5000);})}
// //if not use setTimeou function
// const four=lol=>{return new Promise((resolve,reject)=>{if(lol){resolve();}else{reject();}})}


////example:1
// let firstpromise=new Promise((one,two)=>{
//     let city='raj'
//     setTimeout(()=>one (city),5000)    
// })
// firstpromise
// .then((city)=>{
//     console.log('my city  '+  city);
// })
// .catch((error)=>{
// })


////example:2
// const aPromise = control => { return new Promise((resolve, reject) => {
// setTimeout(() => {if(control) {resolve();} else {reject();}}, 3000)})}
//  aPromise(false)
// .then(() => {
//     console.log('This is a Success');
//  })
//  .catch(() => {
//     console.log('This is a Failure');
//  })


//example:3
// //create a promise
// const one=lol=>{return new Promise((resolve,reject)=>{setTimeout(() => { if(lol){resolve('got data')}else{reject('no data')}    
// }, 3000);})}
// //call promise
// one(false)
// //handel promise
// .then((data)=>{console.log(data);}).catch((err)=>{console.log(err);})


// //example:4
// const vari=lol=>{return new Promise((resolve,reject)=>{setTimeout(() => {if (lol){resolve('got data')}else{'no data'}    
// }, 3000);})}
// vari(true)
// .then((data)=>{console.log(data);})
// .catch((err)=>{console.log(err);})

////example:5
// const vari=lol=>{return new Promise((resolve,reject)=>{setTimeout(() => {if (lol){resolve('get data')}else{reject('reject data')}
    
// }, 3000);})}

// vari(true).then((data)=>{console.log(data);}).catch((err)=>{console.log(err);})



//fetch exampel
////exanpl:5
// const vari=fetch('http://192.168.43.125/')
// vari.then((data)=>{return data.json()}).then((post)=>{console.log(post);}).catch((err)=>{console.log(err);})

// fetch('examples/example.json')
// .then(function(response) {
//   // Do stuff with the response
// })
// .catch(function(error) {
//   console.log('Looks like there was a problem: \n', error);
// });
// // example:6
// const one= fetch('https://jsonplaceholder.typicode.com/posts')
// one.then((data)=>{return data.json()}).then((x)=>{console.log(x);}).catch((err)=>{console.log(err);})






//link:https://dmitripavlutin.com/javascript-promises-settimeout/ 
//Promises Are Faster Than setTimeout()**********************************
// //Let’s try an experiment. What does execute faster: an immediately resolved promise
// // or an immediate timeout (aka a timeout of 0 milliseconds)?  
//   setTimeout(()=> {
//     console.log('Timed out!');
//   });

//   Promise.resolve(1).then((resolve)=> {
//     console.log('Resolved!');
//   },0);
// //Promise.resolve(1) is a static function that returns an immediately resolved promise.
// // setTimeout(callback, 0) executes the callback with a delay of 0 milliseconds.
// //Open the demo and check the console. You’ll notice that 'Resolved!' is logged first, 
// //then 'Timeout completed!'. An immediately resolved promise is processed faster 
// //than an immediate timeout.
// //Might the promise process faster because the Promise.resolve(true).then(...) 
// //was called before the setTimeout(..., 0)? Fair enough question.
// //The experiment has demonstrated that an immediately resolved promise is 
// //processed before an immediate timeout. The big question is… why?





//link:https://www.freecodecamp.org/news/javascript-es6-promises-for-beginners-resolve-reject-and-chaining-explained/ 
//What is a Promise**************************************
// A promise in JavaScript is similar to a promise in real life. When we make
//  a promise in real life, it is a guarantee that we are going to do something in 
//  the future. Because promises can only be made for the future.
// A promise has 2 possible outcomes: it will either be kept when the time comes,
//  or it won’t.
// This is also the same for promises in JavaScript. When we define a promise 
// in JavaScript, it will be resolved when the time comes, or it will get rejected.
// First of all, a Promise is an object. There are 3 states of the Promise object:
// Pending: Initial State, before the Promise succeeds or fails
// Resolved: Completed Promise
// Rejected: Failed Promise
// For example, when we request data from the server by using a Promise,
//  it will be in pending mode until we receive our data.
// If we achieve to get the information from the server,
//  the Promise will be resolved successfully. But if we don’t get the information, 
//  then the Promise will be in the rejected state.
// Additionally, if there are multiple requests, then after the first Promise is resolved
//  (or rejected), a new process will start to which we can attach it directly by a method
// called chaining.


//What is the difference between Callbacks and Promises******************
// The main difference between Callback Functions and Promises is that we attach 
// a callback to a Promise rather than passing it. So we still use callback 
// functions with Promises, but in a different way (chaining).


//What is Chaining******************************
// Callback functions have been used alone for asynchronous operations in JavaScript 
// for many years. But in some cases, using Promises can be a better option.
// If there are multiple async operations to be done and if we try to use good-old 
// Callbacks for them, we’ll find ourselves quickly inside a situation called Callback hell


//Creating and Using A Promise Step by Step******************
// //Firstly, we use a constructor to create a Promise object:
// const lol=new Promise();
// //It takes two parameters, one for success (resolve) and one for fail (reject):
// const lol=new Promise((resolve,reject)=>{ // write conditon here 
// })
// //Finally, there will be a condition. If the condition is met, 
// //the Promise will be resolved, otherwise it will be rejected
// const lol = new Promise((resolve, reject) => {  
//     let condition;  
//     if(condition is met) {    
//         resolve('Promise is resolved successfully.');  
//     } else {    
//         reject('Promise is rejected');  
//     }
// });
////So we have created our first Promise. Now let's use it.

// //then( ) for resolved Promises**********************************
// // If you revisit the picture at the beginning of this post, 
// // you'll see that there are 2 cases: One for resolved promises and one for rejected. 
// // If the Promise gets resolved (success case), then something will 
// // happen next (depends on what we do with the successful Promise).
// lol.then();
// // The then( ) method is called after the Promise is resolved. 
// // Then we can decide what to do with the resolved Promise.
// // For example, let’s log the message to the console that we got from the Promise:
// lol.then((message) => {console.log(message);});

//.catch( ) for rejected Promises******************************
// // However, the then( ) method is only for resolved Promises. What if the Promise fails?
// //  Then, we need to use the catch( ) method.
// // Likewise we attach the then( ) method. We can also directly attach 
// // the catch( ) method right after then( ):
// lol.then((data) => {console.log(data);}).catch((data) => { console.log(data);});
// //So if the promise gets rejected, it will jump to the catch( ) method 
// //and this time we will see a different message on the console.



// //create a promise
// const lol=fn=>{return new Promise((resolve,reject)=>{if(fn){resolve('i am true value')}else(reject(new Error('i am false value')))})}
// lol(false)
// .then((res)=>{console.log(res);})
// .catch((err)=>{console.log(err.message);})
// //create single promise only resolve
// const lol=new Promise((resolve)=>{
//     resolve('i am only resolve message')
// })
// lol.then((res)=>{console.log(res);})

// //promise distructuring
// const one=new Promise((resolve,reject)=>{
//     resolve('i am one')
// })

// const two=new Promise((resolve,reject)=>{
//     resolve('i am two')
// })
// Promise.all([one,two])
// .then(([res1,res2])=>console.log(res1,res2));



// //race function in promise ,race work with first running function
// const one=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('i am one')
//     },5000)
// })

// const two=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('i am two')
//     },2000)
// })


// const three=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('i am three')
//     },2000)
// })



// const four=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('i am four')
//     },1000)
// })
// Promise.race([one,two,three,four])
// .then((res)=>{console.log(res);})