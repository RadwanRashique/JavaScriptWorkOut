let obj1={

    name:"ridhu",
    place:"calicut",

  
}
let details= function(job,salary){
    console.log(`${this.name},${this.place}`)
    console.log(`i am a ${job} my salary is ${salary}`)
      }

let obj2={
    name:"vaishnav",
    place:"kannur"


}

  details.apply(obj2,["developer",700000])
  