//***HOW CREATE FUNCTION 
//1. A FUNTION CAN BE SURE IN VARIABLE

// function one(name){
// 	return `hello ${name}`;
// }

// //document.write(one('hhh'));
// //document.querySelector('#test').innerHTML=one('mahmud');
// // document.getElementById('test').innerHTML=one('hossain');


// var sos=one;
// var pos=sos;
// console.log(pos('mahmud'));

//2. A FUNCTION STORE IN A ARRAY

// function one(name){
// 	return name;
// }

// var sos=one;
// var pos=sos('lamyaa');

// var arr=['mahmud','hossain','nowsin'];
// arr.push(pos);
// console.log(arr);
// //document.write(arr);

//3.FUNCTION KEP IN AN OBJECT

// var one=(name)=>{return name;}   //in here use arrow funtion
// var sos=one;                    //function keep in variable
// var pos=sos('lamyaa');          //funtion keep in variable to anoyher variable

// var two={                      //function keep in variable to variable to object

// 	name:pos,
// 	roll:12345,
// 	city:'rajshhai'
// }
// console.log(two);  //call the object

//4. FUNCTION KEEP IN VAIABLE TO OBJECT TO FUNTION
// var one=(name)=>{return name;}   //in here use arrow funtion
// var sos=one;                    //function keep in variable
// var pos=sos('lamyaa');          //funtion keep in variable to anoyher variable

// var two={                      //function keep in variable to variable to object

	
// 	roll:12345,
// 	city:'rajshhai',
// 	name:function (){
// 		console.loge('cool');
// 	}
// }
// console.log(two);  //call the object

//5. WE CAN ADD A FUNTION WITH A VARIABLE
// var sum=10+(function(){return 10})();
// console.log(sum);

// var sub=10+(sum=()=>{ // ABOVE EXAMPE BY USING ARROW FUNCTION
// 	return 10
// })();
// console.log(sub)

// var sub=10+(sum=()=> 100)();  //ABOVE ARROW FUNTION AGAIN SHORT
// console.log(sub)


//6.A FUNCTION PASSES ANOTHER FUNTION AS A ARGUMENT
//.....................EMPTY OR NOT UNDERSTAND.................................
//7. A FUNTION RETURN ANOTHER ANOTHER FUNCTION orHIGER ORDER FUNCTION
//.....................EMPTY OR NOT UNDERSTAND.................................

//8. INNER/NSTED FUNCTION

// function one(){                          // BY GENERAL FORMAT
// 	function two(){
// 		console.log('i am inner');

// 	}          
// 	two();                              //NNER FUNCTION MUST CALL BEFORE OUTER FUNCTION
// 	console.log('i am outer');
// }
// one();

 // var one=()=>{     // BY ARROW FORMAT
 // 	var two=()=>{
 // 	console.log('i am inner function');}  
 // 	two();
 // 	console.log('i am outer function');}
// one();

//MULTIPLE EXAMPLE
// var one=()=>{
// var two=()=>{
// var three=()=>{
// var four=()=>{

// console.log('i am fun four');
// }
// four();

// console.log('i am fun three');
// }
// three();

// console.log('i am fun two');
// }
// two();

// console.log('i am fun one');

// }
// one();


//NESTED FUNCTION WITH PARAMETER 

// var one=()=>{
// 	var x=10;
// var two=()=>{ 
// 	var y=100;
// console.log(`two er y is: ${y}` );  //ouput show 
// console.log(`two er x is: ${x}` );  //ouput show
// }
// two(); 
// console.log(`one er x is: ${x}` );  //ouput show 
// console.log(`one er y is: ${y}` );  //not show, beacuse in here y is inner fnction value,
// }
// one();                                   //so outer function not access inner value 
//                                           //but inner function accer outer value



//APPLYCATION OF RETIRN KEYWORD

//1. RETURN KEY RETURN A object using arrow funtion

// var one=()=>{

// 	return{
// 	name:'mamud',
// 	roll:12345,
// 	skill:['python','django'],
// 	language: function(){console.log(this.name,this.roll,this.skill);}
// }

// }
// var obj=one();
// obj.language();



