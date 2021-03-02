// // //make a array
// // const arr=['apple','orange','mango','banana'];
// // const arr2=['go','back','do','did'];
// // const arr3=[1,2,3,4,5,6,7,8,9,10];
// // //access above array
// // console.log(arr);
// // //access array by index
// // console.log(arr[2]);
// // //add new element by index number
// // arr[0]='apples'
// // console.log(arr);
// // //add new elments at end
// // arr.push('fig')
// // console.log(arr);
// // //remove last element
// // arr.pop();
// // console.log(arr);
// // //add new element at first
// // arr.unshift('fig');
// // console.log(arr);
// // //remove first elment
// // arr.shift();
// // console.log(arr);
// // //find element 
// // console.log(arr.indexOf('mango'));
// // //join eatch elments to a string
// // console.log(arr.join(','));
// // //join eatch element to string by toString
// // console.log(arr.toString(';'));
// // //merge multiple array to make new array
// // console.log(arr.concat(arr2));
// // //arrange accending form of element
// // console.log(arr.sort());
// // //arrange all elments in desending 
// // console.log(arr.reverse());
// // //numerical accending
// // console.log(arr3.sort((a,b)=>{return a-b}));
// // //numerical deccending
// // console.log(arr3.sort((a,b)=>{return b-a}));
// // //splice method to remove a portion
// // console.log(arr.splice(3));
// // //slice method to copy a part and make new aray to this elements
// // console.log(arr.slice(2));
// // ////////////////////////////////////////////////////////////////////////////////
// // //itarate array elment by map method
// // const lol=arr.map((item)=>{console.log(item);});
// // //above same example by for eatch loop
// // arr.forEach((item)=>{console.log(item);});
// // //filter method for checking a condition 
// // arr3.filter((item)=>{console.log(item%2==0); return item%2==0});
// // //reduce method use to calculate sum of all array elments
// // arr3.reduce((total,item)=>{console.log(total+item);})
// // //reduce with initial value
// // arr3.reduce((total,item)=>{console.log(total+item);},100);
// // //every method to satisfy condition of all elements
// // arr3.every((item)=>{console.log(item>10);})
// // //some method ,for find first element of passing the ciondition
// // arr3.some((item)=>{console.log(item<2);})
// //set timeout variable function
// // const fn=lol=>console.log('hello');
// // setTimeout(fn,3000);

// // //settimeout variable array
// // const arr=[1,2,3,4,5,6];
// // arr.map((item)=>{
// //     setTimeout(()=>{
// //         console.log(item);
// //     },3000);
// // });
// // arr.reduce((total,item)=>{
// //     setTimeout(()=>{
// //         console.log(total+item);
// //     },5000);
// // })

// ////function basic
// function fn(){
//     console.log('hello');
// };fn()
// fn2=()=>console.log('heloo ');fn2()
// //return function
// fn3=(x,y)=>{return x+y;};console.log(fn3(2,2));
// //callback function 
// fn4=(callback)=>{callback()};
// fn5=()=>{console.log('hellosssssssss');}
// fn4(fn5)
// //callback function share data eatch other
// fn6=(callback,names)=>{callback(names)};
// fn7=(s)=>{console.log(`i am ${s}`);}
// fn6(fn7,'mahmud')
// //return one function to anoher function
// fn8=()=>{return fn9=()=>{console.log('cool by')};}
// fn8()();
// //invock function
// (fn10=()=>{console.log('llllllllllllllllllllllllll');})();
// (fn11=()=>{return `love is good then you`});console.log(fn11());
// //invock is private proof
// (fn12=()=>{var one=10;var two=5; return one+two});console.log(fn12());


// ////seTimeout function
// setTimeout(()=>{console.log('i am setTime function');},3000)


// //setTime out function
// const lol=fn=>{setTimeout(()=>{console.log('hekki');},2000)}
// lol()

// //short from of setTimeout function
// const lol=fn=()=>{console.log('hello');}
// setTimeout(lol,2000);


//pactuics asychonus function
// //callback funcrtion
// const one=fn=(callback)=>{callback();};
// const two=fn2=()=>{console.log('hello world');};
// one(two)
// //settime out function with callback 
// const three=fn3=>{setTimeout(()=>{console.log('hwllo mis you');},3000)}
// one(three)

// console.log('hi');


// //map function
// const arr=[1,2,3,4,5];
// arr.map((item)=>{console.log(item);});
// const x=arr.reduce((total,item)=>{return total+item});console.log(x);


// //asychonus function
// var one=fn=()=>{console.log('i an one');}
// var two=fn2=()=>{console.log('i am two');}
// var time=setTimeout(two,5000);
// var three=fn3=()=>{console.log('i am three');}
// var four=fn4=()=>{console.log('i am four');}
// one();
// time
// three();
// four();