// let a=[2,4,5,6]

// let b=JSON.parse(JSON.stringify(a))
// b.push(3)
// console.log(b)

// spred operator

// let ob1={
//     name:"sharon",
//     state:"kerala",
//      Name:   function(){
//      return this.name
//     },
//     address:{
//         city:'Delhi',
//         country:'India'
//     }
// }

// let obj2= JSON.parse(JSON.stringify(ob1))
// console.log(ob1)
// console.log(obj2)

// ob1.name="adhul"
// console.log(ob1)
// console.log(obj2)

// let ob1={
//     name:"sharon",
//     state:"kerala",
//      Name:   function(){
//      return this.name
//     },
//     address:{
//         city:'Delhi',
//         country:'India'
//     }
// }

// let b= Object.assign({},ob1)
// console.log(ob1)
// console.log(b)
// b.name='Radwan'
// b.address.city='Goa'

// console.log(ob1)
// console.log(b)


let ob1={
        name:"sharon",
        state:"kerala",
         Name:   function(){
         return this.name
        },
        address:{
            city:'Delhi',
            country:'India'
        }
    }
    ob2= {...ob1}
    ob2={...ob2,
    name:'rad',
address:{
    ...ob2.address
    ,city:'Goa',country:'jai'

}}
    
ob1.name="Nishar"
ob2.address.city='Goa'
console.log(ob1)
console.log(ob2)
