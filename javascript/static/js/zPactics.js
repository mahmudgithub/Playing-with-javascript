// //make a array
// const arr=['apple','orange','mango','banana'];
// const arr2=['go','back','do','did'];
// const arr3=[1,2,3,4,5,6,7,8,9,10];
// //access above array
// console.log(arr);
// //access array by index
// console.log(arr[2]);
// //add new element by index number
// arr[0]='apples'
// console.log(arr);
// //add new elments at end
// arr.push('fig')
// console.log(arr);
// //remove last element
// arr.pop();
// console.log(arr);
// //add new element at first
// arr.unshift('fig');
// console.log(arr);
// //remove first elment
// arr.shift();
// console.log(arr);
// //find element 
// console.log(arr.indexOf('mango'));
// //join eatch elments to a string
// console.log(arr.join(','));
// //join eatch element to string by toString
// console.log(arr.toString(';'));
// //merge multiple array to make new array
// console.log(arr.concat(arr2));
// //arrange accending form of element
// console.log(arr.sort());
// //arrange all elments in desending 
// console.log(arr.reverse());
// //numerical accending
// console.log(arr3.sort((a,b)=>{return a-b}));
// //numerical deccending
// console.log(arr3.sort((a,b)=>{return b-a}));
// //splice method to remove a portion
// console.log(arr.splice(3));
// //slice method to copy a part and make new aray to this elements
// console.log(arr.slice(2));
// ////////////////////////////////////////////////////////////////////////////////
// //itarate array elment by map method
// const lol=arr.map((item)=>{console.log(item);});
// //above same example by for eatch loop
// arr.forEach((item)=>{console.log(item);});
// //filter method for checking a condition 
// arr3.filter((item)=>{console.log(item%2==0); return item%2==0});
// //reduce method use to calculate sum of all array elments
// arr3.reduce((total,item)=>{console.log(total+item);})
// //reduce with initial value
// arr3.reduce((total,item)=>{console.log(total+item);},100);
// //every method to satisfy condition of all elements
// arr3.every((item)=>{console.log(item>10);})
// //some method ,for find first element of passing the ciondition
// arr3.some((item)=>{console.log(item<2);})
//set timeout variable function
// const fn=lol=>console.log('hello');
// setTimeout(fn,3000);

// //settimeout variable array
// const arr=[1,2,3,4,5,6];
// arr.map((item)=>{
//     setTimeout(()=>{
//         console.log(item);
//     },3000);
// });
// arr.reduce((total,item)=>{
//     setTimeout(()=>{
//         console.log(total+item);
//     },5000);
// })