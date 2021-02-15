// make a array and access this array
const arr=['mahmud','hossain','lamyaa']
console.log(arr);

//access array value by index number
// ইন্ডেক্স নাম্বার সাহায্য করবে আপনাকে অ্যারে থেকে স্পেসেফিক কোনো ডাটা বের করে আনতে।
console.log(arr[1]);


//change any specific index value of arry
// এখন যদি আপনি স্পেসেফিক কোনো ভ্যালুও চেঞ্জ করতে চান তাহলেও পারবেন এই ইন্ডেক্স নাম্বারের সাহায্যেই
console.log(arr[0]='change');

//add new value in array in specific index
arr[3]='nowsin'
console.log(arr);

//show array length
// অ্যারেতে কয়টা আইটেম আছে সেটা জানার জন্যে lengthপ্রপার্টিজ অ্যাক্সেস করতে চাই 
// তাহলে আমাদের এভাবে লিখতে হবে arrName.length
console.log(arr.length);

// use for loop to access eatch array elements 
for (let i=0 ; i<arr.length; i++){
    console.log(i);
}

//add new element in array from last
//অ্যারেতে শেষের দিক হতে কোনো নতুন আইটেম অ্যাড করতেঃ
//arrName.push('Shafiq');
arr.push('last')
console.log(arr);
//remove any elements from array from last
//অ্যারেতে শেষের দিক হতে আইটেম রিমুভ করতেঃ
//arrName.pop();
arr.pop()
console.log(arr);


//add new elements in array from first
//অ্যারেতে শুরুর দিক হতে কোনো নতুন আইটেম অ্যাড করতেঃ
//arrName.unshift('Shafiq');
arr.unshift('first')
console.log(arr);
//remove any elements from array from fir s 
//অ্যারেতে শুরুর দিক হতে আইটেম রিমুভ করতেঃ
//arrName.shift();
arr.shift()
console.log(arr);

//to show any indevidual array elemts index number
//নির্দিষ্ট কোনো আইটেম এর ইন্ডেক্স নাম্বার জানতেঃ
//arrName.indexOf('Karim');
console.log(arr.indexOf('mahmud'));

//use splice to remove any specific index number item
//ইন্ডেস্ক নাম্বার দিয়ে কোনো আইটেম রিমুভ করতেঃ
//arrName.splice(1, 2);
console.log(arr.splice(0,2));
//if start to last
//একটা নির্দিষ্ট ইন্ডেক্স নাম্বার থেকে শুরু করে বাকি সবগুলো রিমুভ করতে 
//তাইলে প্রথম আর্গুমেন্টে জাস্ট যেখান থেকে রিমুভ করা শুরু করবেন সে ইন্ডেক্স নাম্বারটা দিলেই হবেঃ
//arrName.splice(3);
console.log(arr.splice(1));

//cope previuse array to create new array 
//অ্যারে কপি করতেঃ
//var newArr = arrName;
let newarr= arr
console.log(newarr);


// advance topics on array 
// এখানে একটা জিনিস হয়তো খেয়াল করবেন যে যতবারই আমরা spliceমেথড ইউজ করতেছি, 
// এটা কিছু ডাটা রিটার্ণ করছে। হ্যাঁ, আমরা যেগুলো রিমুভ করতে চাচ্ছি সেগুলোই রিটার্ন করে এই spliceমেথড। 
// তো আপনি চাইলে রিমুভ করা ডাটাগুলোও আবার আরেকটা ভ্যারিয়েবলে স্টোর করে রাখতে পারবেন।
// ধরি আমাদের একটা অ্যারে আছেঃ

// var newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// এখন এটার ইন্ডেক্স নাম্বার ৩ থেকে বাকী সবগুলো স্প্লাইস করে ফেললাম,
//  আর স্প্লাইসড ডাটাগুলো spliceArrতে স্টোর করলামঃ

// var spliceArr = newArr.splice(3)
// এখন মেইন অ্যারেটা দেখলেঃ

// console.log(newArr);


// আর আমাদের এই নতুন spliceArrটা দেখলেঃ

// console.log(spliceArr);




