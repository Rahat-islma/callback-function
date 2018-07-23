var car = [
    {name: "Jeep", model: 500, weight: 1100, color: "white"},
    {name: "Lada", model: 800, weight: 1400, color: "black"},
    {name: "Datsun", model: 600, weight: 1800, color: "blue"},
    {name: "Mini", model: 3000, weight: 900, color: "read"},  

]



function DoWhatEverYouWant(obj, cb) {
    
    // callback function call
    cb(obj)
  
}


// use map function====================================
// get car All car name
var carMap = car.map(function (name) {
    return name.name
     
 })


DoWhatEverYouWant(carMap, function (obj) {
    
  console.log( obj);  // ["Jeep", "Lada", "Datsun", Mini]
   
})

// use Filter function=====================================
// All car  model > 500
 var carFilter = car.filter(function (model) {
   if (model.model > 500) {
       return true
   }
     
  })
  
 
DoWhatEverYouWant(carFilter, function (obj) {
    
    
    console.log(obj);
    
 })
 

// Use sort function ==================================
// sort cars weight
 var carSort = car.sort(function (c1, c2) {
    if (c1.weight > c2.weight){
        return 1;
    }else{
        return -1;
    }
     
 })



DoWhatEverYouWant(carSort, function (obj) {
    
  console.log( obj);  
   
})
