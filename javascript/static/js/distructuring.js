// today 9.2.2021

// Array distructuring example
// const arrName=['mahmud','hossain','lamyaa','nowsin']
// const [first, second, love, like]=arrName
// document.getElementById('test').innerHTML=(love)

// // example access skip array
// const citys=['rajshahi','dhaka','khulna']

// const[,,one]=citys
// console.log(one);

// object distructuring pactics

// let obj={
//     names:'mahmud',
//     city:'rajshhai',
//     love:['lamyaa','nowsin','sorovi']
// }

// let {names,city,love}=obj
// console.log(names,city,love[2]);

// // distructuring nested Object
// const arr={
//     names:"mahmud",
//     city:{
//         love:'lamyaa',
//         other:{
//             village:'binodpur'
//         }
//     }
// }

// const {names,city:{love,other:{village}}}=arr
// console.log(names);
// console.log(village);

// // distructuring nested array and nested object
// const nestedArrayObject={
//     names:'mahmud',
//     arr1:['one','two',['banana','apple',['lamyaa','nowsin']]],
//     obj1:{
//         city:'rajshahi',
//         obj2:{
//             flower:'golap',
//             obj3:{
//                 color:'red',
//                 arr2:['men','women']
//             }
//         }
//     }
// }

// const {arr1:[one,,[,apple,[,nowsin]]]}=nestedArrayObject //this line object distructuring
// console.log(one,apple,nowsin);  //this for nested array distructuring console

// const {names,obj1:{obj2:{flower,obj3:{color}}}}=nestedArrayObject //this line for nested obj distructuring
// console.log(names,flower,color); //this for obj distructuring console


// access object distructuring data by a functio
// let obj={
//     pem:'mahmud',
//     roll:12345
// }
// const{pem,roll}=obj;
// //  console.log(names,roll);

// function li(pem,roll){
//     console.log(pem);
// }
// li(pem,roll);

// // complex example to object distructuing access by fnction
// const obj={
//     names:'car',
//     color:['red','blue','white'],  
// }

// const {names, color:[first,second]}=obj
// console.log(names,first );

// const fun=({names, color:[first,second]})=>{

//     console.log(`my name is ${names} and my color is ${second}`)
// }
// fun({names,color:[first,second]})

// // advance object ,to function distructuring process
// const obj={
//     man:'mahmud',
//     email:'mahmud@gmail.com'
// }

// const {man , email}=obj
// console.log({man, email});

// const fun=({man,email})=>{
//     console.log(`hello ${man} what is email ${email}`);

// }
// fun({email,man})


// today 10.2.2021 
// rest operetor pactics **********************
// const names=(...names)=>{
//     console.log(names);  //this genaral way to show output 
//     console.log(...names)  //this is spred operetor way to show output 
// }
// names('mahmud','hossain','nannau')
// soered operetor ******************************
