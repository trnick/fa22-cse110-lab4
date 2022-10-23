for( let car in statistics) {
    if ( car[0] == 'r') {
        console.log(car);
    }
    else if(statistics[car] % 2 == 1) {
        console.log(car);
    }
}