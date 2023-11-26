let obj1={

    name:"ridhu",
    place:"calicut",
    details: function(job,salary){
        console.log(`${this.name},${this.place}`)
        console.log(`i am a ${job} my salary is ${salary}`)
          }
  
}


let obj2={
    name:"vaishnav",
    place:"kannur"


}

  obj1.details.apply(obj2,["developer",900000])
  