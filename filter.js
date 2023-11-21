const emp =[
    {id:101,name:"Raju",profile:"HR"},
    {id:103,name:"Lal",profile:"Manager"},
    {id:105,name:"sahil",profile:"teacher"},
    {id:109,name:"John",profile:"Engineer"},
    {id:102,name:"peter",profile:"Doctor"},
    {id:107,name:"Anu",profile:"HR"},

]

const res= emp.filter(function(emp){
  return  emp.profile==="HR"

}
 
)
console.log(res)