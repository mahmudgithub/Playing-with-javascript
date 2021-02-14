let firstpromise=new Promise((one,two)=>{
    let city='raj'
    setTimeout(()=>one (city),5000)
    
})
firstpromise
.then((city)=>{

    console.log('my city  '+  city);
})
.catch((error)=>{

})