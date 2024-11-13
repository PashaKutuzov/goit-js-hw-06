



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
 