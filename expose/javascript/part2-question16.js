let statistics ={
    redCars: 21, 
    blueCars: 45,
    greenCars: 12,
    raceCars:5,
    blackCars:40,
    rareCars: 2

};

function printRorOdds(){
    for (const property in statistics){
        //store value for readability 
        let value = statistics[property];
        //cheking for r or checking if value is 0dd
        if (property.charAt(0) == 'r' | value % 2 == 1 ){
            console.log(statistics[property]);
        }
    }
}


printRorOdds();