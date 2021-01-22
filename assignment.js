//https://github.com/mahmudhasan116/assignment-3_java-script

//Kilometer to Meter Conversion
function kilometerToMeter(kilometer) {
    if(kilometer > 0){
        meter = kilometer*1000; // 1 Kilometer = 1000 Meter
    }
    //for zero or negative input
    else{
        meter = "Error: Input value can not be zero or negative"
    }
    return meter;
}
//console.log(kilometerToMeter(-5));


//Budget Calculator
function budgetCalculator(watch, phone, laptop){
    if((watch >= 0) && (phone >= 0) && (laptop >= 0)){ 
        totalCost = watch*50 + phone*100 + laptop*500;
       
    }
    //for negative input
    else{
        totalCost = "Error: Input value can not be negative"
    }
    return totalCost;
}
//console.log(budgetCalculator(-1, 0, 4));


//Hotel Cost Calculator
function hotelCost(noOfDays){
    /* Math.ceil has been used to round input value if that is a fraction.
      Because, you have to pay full regardless of earlier checkout */ 
    if((noOfDays > 0) && (noOfDays <= 10)){      
        totalCost = Math.ceil(noOfDays) * 100;
    }
    else if((noOfDays > 10) && (noOfDays <=20)){
        totalCost = (Math.ceil(noOfDays) - 10) * 80 + 1000;
    }
    else if(noOfDays > 20){
        totalCost = (Math.ceil(noOfDays) - 20) * 50 + 1000 + 800;
    }
    //for zero or negative input
    else{
        totalCost = "Error: Number of days can not be zeor or negative"
    }
    return totalCost;
}
//console.log(hotelCost(22.5));


// Longest Name Finder
//all names in the array below...
var friendsList = ["Mahin", "Zahid", "Abdullah","Tarique", "Sajid", "Mahmud", "Talha", "Junaid"];
function megaFriend(names) {
  var longestName = names[0];
  for (i = 0; i < names.length; i++) {
    if (names[i].length > longestName.length) {
      longestName = names[i];
    }
  }
  return longestName;
}
//console.log(megaFriend(friendsList));



