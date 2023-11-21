// let arr=[1,4,3,2,3,4]


// function name(){
//     let sum=0
//     for(let i=0;i<arr.length;i++){

//     sum +=arr[i]
//     }
// return sum
// }
// console.log(name(arr))


// let arr=[1,4,3,2,3,4]

// let res= arr.reduce((accumulator,value,index)=>
// {
    
//     return accumulator+value
// },0 )
// console.log(res)




// all in one    


const emp=[

    {id:102,name:'john',profile:'se developer', rating1:5, rating2:10},
    {id:102,name:'Alina',profile:'ju developer', rating1:2, rating2:4},
    {id:102,name:'Mohammed',profile:'se developer', rating1:7, rating2:8},
    {id:102,name:'Rayees',profile:'se developer', rating1:3, rating2:3},
    {id:102,name:'Daniel',profile:'ju developer', rating1:6, rating2:8}

]

// let res= emp.filter((n)=>{
//    return  n.profile=='se developer'
// })

// let result = res.map((n)=>{
//    return  n.rating1+n.rating2
// })



// let re= result.reduce((acc,value)=>{
//    return acc+value
// },0)

// console.log(re)

let totalratings= emp.filter((n)=>n.profile==='se developer').map((n)=>n.rating1+n.rating2).reduce((acc,value)=>acc+value,0)
console.log(totalratings)