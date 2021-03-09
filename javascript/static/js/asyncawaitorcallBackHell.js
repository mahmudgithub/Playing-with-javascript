// const lol=fn=>{return new Promise((resolve,reject)=>{setTimeout(()=>{
//     if(fn){resolve();}else{reject();}
// },3000)})}
// lol(false)
// .then(()=>{console.log('found dta');}).catch(()=>{console.log('no data');})


// const lol=fn=>{return new Promise((resolve,reject)=>{setTimeout(()=>{
//     if(fn){resolve('i am data')}else{reject('i am error')}
// },3000)})}
// lol(false).then((data)=>{console.log(data);}).catch((err)=>{console.log(err);})


// const lol=new Promise((resolve,reject)=>{setTimeout(()=>{
//     if(false){resolve('i am data');}
//     else{reject('i am error ');}

// },3000)})
// lol.then((data)=>{console.log(data);})
// .catch((err)=>{console.log(err);})

// const Handle = async() => {
//     const data = await lol;
//     console.log(data);
//  }
//  Handle()
// const Handle = async() => {
//     try {
//        const data = await lol;
//        console.log(data);
//     } catch(err) {
//        console.log(err);
//     }
//  }
//  Handle()

//create a promise
// const lol= new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//       if(true){resolve('get data')}
//       else{reject('error data')}
//    },5000)
// })
// lol().then((data)=>{console.log(data);}).catch((err)=>{console.log(err);})
// const handel=async()=>{
//    const data=await lol;
//    console.log(data);
// }
// handel();


// const nextpage = async () => {
//    Axios({
//        method: "get",
//        url: products?.next
//    }).then(res => {
//        setProducts(res.data)
//    })
// }


// const getcategoridata = async () => {
//    await Axios({
//        method: 'get',
//        url: `${domain}/api/category/${id}/`
//    }).then(response => {
//        // console.log(response.data[0]);
//        setCataproduct(response.data[0])
//    })}
// const getMyName = new Promise((resolve) => {
//     return resolve('Zonayed');
//  })
//  const lol=async()=>{
//     const data= await lol;
//     console.log(data); 
//  }
//  lol()


//crate a promises
// const lol=fn=>{return new Promise((resolve,reject)=>{setTimeout(()=>{if(fn){resolve('i am data')}else{reject('i am error ')}},3000)})}
// lol(false).then((data)=>{console.log(data);})
// .catch((err)=>{console.log(err);})

// const lol=fn=>{return new Promise((resolve,reject)=>{setTimeout(()=>{
//     if(true){reject('i am reject datas');}
//     else{resolve('i am real data');}
// },8000)
// })}
// // lol(false)
// // .then((res)=>{console.log(res);})
// // .catch((err)=>{console.log(err);})
// const one=async() => {
//     try{
//     const data= await lol();
//     console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }
    
// }
// one()


// const getnames=fn=>{return new Promise((resolve,reject)=>{if(fn){resolve('mahmud');}else{reject('i am fail')}})}
// const getage=fn2=(names)=>{return new Promise((resolve,reject)=>{if(names==='mahmud'){resolve(26);}else{reject('not found')}})}
// getnames.then((names)=>{
//     getage(names).then((age)=>{
//         console.log(` name is ${names} and age is ${age}`);
//     })
// })

// const getMyName = new Promise((resolve) => setTimeout(()=>{{
//     return resolve('Zonayed');
//  }},3000))

//  const getAge = (name) => {
//     return new Promise((resolve, reject) => setTimeout(()=>{
//         if(name === 'Zonayed') {
//            resolve(21);
//         } else {  
//            reject('Not Found!');
//         }
//      },5000)
//  )}
//  getMyName.then((name) => {
//     getAge(name).then((age) => {
//        console.log('My name is ' + name + ' and I am ' + age + ' years old!');
//     })
//  })

// async function foo() {
//    const result1 = await new Promise((resolve) => setTimeout(() => resolve('1')))
//    const result2 = await new Promise((resolve) => setTimeout(() => resolve('2')))
// }
// foo()

// //use settimeout dfunction in chin promise
// const ONE=()=> {return new Promise((resolve,reject)=>{setTimeout(()=>{resolve('i am function ONE')},5000)})};
// const TWO=()=>{return new Promise((resolve,reject)=>{setTimeout(() => {resolve('i am function TWO')},5000);})};
// const THREE=()=>{return new Promise((resolve,reject)=>{setTimeout(() => {resolve('i am function THREE')}, 5000);})};
// const FOUR=()=>{return new Promise((resolve,reject)=>{setTimeout(() => {resolve('i am function FOUR')}, 1000);})};
// // ONE()
// // .then((res)=>{console.log(res);})
// // .then(FOUR)
// // .then((res)=>{console.log(res);})
// // .then(THREE)
// // .then((res)=>{console.log(res);})
// // .then(TWO)
// // .then((res)=>{console.log(res);})

// //alternative above .then(()=>{}) function
// //es5 style
// async function lol1(){
//     const x=await TWO();
//     console.log(x);
// }
// lol1()
// //es6 style
// const lol2=async()=>{
//     const a=await ONE();
//     console.log(a);
// }
// lol2()

// const one=()=>{return new Promise((resolve)=>{resolve('i am function one')})}
// const two=()=>{return new Promise((resolve)=>{resolve('i am function two')})}
// const three=()=>{return new Promise((resolve)=>{resolve('i am function three')})}
// const four=()=>{return new Promise((resolve)=>{resolve('i am function four')})}
// const five=()=>{return new Promise((resolve)=>{resolve('i am function five')})}

// one().then((res)=>{console.log(res);})

// one()
// .then((res)=>{console.log(res);})
// .then(two)
// .then((x)=>{console.log(x);})
// .then(three)
// .then((y)=>{console.log(y);})
// .then(four)
// .then((z)=>{console.log(z);})
// .then(five)
// .then((o)=>{console.log(o);})

// const all=async()=>{
//     const x=await one()
//     console.log(x);
//     const y=await two()
//     console.log(y);
//     const z=await three()
//     console.log(z);
//     const s=await four()
//     console.log(s);
//     const p=await five()
//     console.log(p);
// }
// all()


// one(()=>{
//     two(()=>{
//         three(()=>{
//             four(()=>{
//                 five(()=>{})
//             })
//         })
//     })
// })


//const one=[1,2,3,4,5,6,7,8,9]
// one.map((item,index,array)=>{
//     console.log(item);
//     console.log(index);
//     console.log(array);
// });
// const lol=one.reduce((total,item,index,array)=>{
//     return `total:${total+item}  item:${item} index:${index} array:${array}`
// })
// console.log(lol);


// const one=fn=>new Promise((resolve,reject)=>{setTimeout(()=>{if(fn){ resolve('i am getting value')}else{reject('i am false data')}},3000)})
// one(false)
// .then((res)=>{console.log(res);}).catch((err)=>{console.log(err);})