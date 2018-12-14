var isFull = false;




//ALL ANIMAL METHODS

function sleep(time){
    isAwake = false
    console.log(isAwake)
   var howLongToSleep = time;
   for(i = 0 ; i < howLongToSleep; i++){
    console.log("Im Sleeping for " + howLongToSleep +" hours. Dont wake me!!")
}
    console.log(wheeeew weee --- zoowee momma im )

function eat (amount){
    let amountToEat = amount;
    if(amountToEat > 0){
        isFull= true; 
    }

    console.log("You ate" + amountToEat + "lbs of food" + "Are you full ?" + isFull);
}

function jump (howHigh , howLong){
     console.log("You're jumping" + howHigh + " ft high for " + howLong + "mins") 
}


// 0 = omni C = Carni H = Herbi
function hunt (type){
    var ftype = type.toLowerCase();
    switch(ftype){
        case "o":
            console.log("damn son you eating both")
        break

        case "c":
            console.log("damn son you eating both")
        break

            case "h":
                herb()
            break
            default:
                console.log ("Hunting Season Is Over")
    }
}
function mate (){

// Calling All Methods
    sleep(5)
  //eat
    





