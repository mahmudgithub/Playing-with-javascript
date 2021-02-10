// today 10.2.2021 
// // rest operetor pactics **********************
// //rest operetor may be accept more parameter value by one paramete as a array
// let one=(first,second,...more)=>{
//     console.log(first);
//     console.log(second);
//     console.log(more);
// }
// one('mahmud','hossain',1,2,3,4,5,6)
// const names=(...names)=>{
//     console.log(names);  //this genaral way to show output 
//     console.log(...names)  //this is spred operetor way to show output 
// }
// names('mahmud','hossain','nannau')

// const lol=(a,b, ...more)=>{
//     console.log(a ,b);
//     console.log(more);
//     console.log(...more);
// }
// lol('mahmud','hossain',1,3,4,5,5,6,7)

// const lol=(...a)=>{
//     console.log(a);
// }
// lol(1,2,3,4,5,6)


// spred operetor ******************************
// // different btween simple and spred operetor 
// // spred operetor may be exced array value to single value 
// const arr=['mahmud','hossain','lamyaa']
// console.log(arr);
// console.log(...arr);

// const arr=['mahmud','hossain','nannu']
// console.log(arr);
// console.log(...arr);

// const fun=(x,y,...arr)=>{
//     console.log(x);
//     console.log(y);
//     console.log(arr);
//     console.log(...arr);
// }
// fun('lamyaa','nowsin','niva','lima','ara')

// const fun1={
//     city:'rajshahi',
//     board:'rajshahi',
    
    
// }
// // const {city}=fun1
// // console.log(city);

// const fun2={
//     ...fun1,
//     city:'khulna',
//     board:'khulna'

// }
// console.log(fun2)
