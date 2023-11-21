
// mutable
// let a=['val1','val2']
// let b=a
// b.push('val3')
// console.log(b);
// console.log(a);



// mutable
// let c={
//     name:"John",
//     city:'Delhi'
// }

// let d=c

// d.age=20
// d.position='HR'

// console.log(c);
// console.log(d)

// make mutable to immutable


// immutable
// let a=['val1','val2']
// let b=a.concat()
// b.push('val3')
// console.log(b);
// console.log(a);



// let a=['val1','val2']
// let b=[...a]
// b.push('val3')
// console.log(b);
// console.log(a);



// let c={
//     name:"John",
//     city:'Delhi'
// }

// let d=Object.assign({},c)

// d.age=20
// d.position='HR'

// console.log(c);
// console.log(d)



// immutable
let c={
    name:"John",
    city:'Delhi'
}

let d={...c}

d.age=20
d.position='HR'

console.log(c);
console.log(d)