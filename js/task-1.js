
function isEnoughCapacity(products, containerSize){
    let total = 0
    const values = Object.values(products);
    for (key of values) {
        total += key
      }
      return total <= containerSize
}



console.log(
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
  ); // false
  
  console.log(
    isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
  ); // false


 

function calcAverageCalories(days){
   if(days.length === 0){
    return 0
   }
    
   let totalCalories = 0
    for (const calrs of days) {
       totalCalories += calrs.calories 
             
       
       
     }   
       
    return totalCalories / days.length

    }

console.log(calcAverageCalories([
      { day: "monday", calories: 3010 },
      { day: "tuesday", calories: 3200 },
      { day: "wednesday", calories: 3120 },
      { day: "thursday", calories: 2900 },
      { day: "friday", calories: 3450 },
      { day: "saturday", calories: 3280 },
      { day: "sunday", calories: 3300 }
    ]) );
 
// 3180

console.log(
    calcAverageCalories([])
  );



const profile = {
    username: "Jacob",
  playTime: 300,
  changeUsername(newName){
this.username = newName
  },
  updatePlayTime(hours){
this.playTime += hours
  },
  getInfo(){
return `${this.username} has ${this.playTime} active hours!`
  }
};



console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"



