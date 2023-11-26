let pomise = new Promise((res,rej)=>{

    let x=0
    if(x==0){

        res("success")
      
    }
    else{
        res("error")
    }
})
pomise.then((res)=>[
    console.log(res)
]).catch((err)=>{
    console.log(err)
})