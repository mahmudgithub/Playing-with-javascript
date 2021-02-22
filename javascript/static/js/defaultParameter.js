//link:https://js.zonayed.me/es6/post-9 

// function defaultParams6(name = 'mahmud', age = 21) {
//     console.log('My name is ' + name + ' and I am ' + age + ' years old!');
//  }
//  //এখন আর্গুমেন্ট ছাড়া এই ফাংশনটাকে কল করলেঃ
//  defaultParams6()
//  //আর আর্গুমেন্ট দিলেঃ
//  defaultParams6('hossain', 18);
// //আমাদের আর্গুমেন্টসগুলোই প্রিন্ট হবেঃ




// //ফাংশন কন্সট্রাকটরের সাথে ডিফল্ট প্যারামিটারঃ
// function FunctionConst6(name = 'mahmud', age = 21) {
//     this.name = name;
//     this.age = age;
//  }
//  var lol=new FunctionConst6();
//  console.log(lol.name);
//  console.log(lol.age);
//  //ডিফল্ট প্যারামিটারগুলো শো করবেঃ

// //কিন্তু আমরা যদি নতুন অবজেক্ট আর্গুমেন্টসহ ডিফাইন করিঃ
// var sos = new FunctionConst6('hosain', 18);
// console.log(sos.name);
// console.log(sos.age);
// //আমাদের পাসকৃত আর্গুমেন্টসগুলোর ভ্যালুই দেখাবেঃ

