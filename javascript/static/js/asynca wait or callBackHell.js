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
