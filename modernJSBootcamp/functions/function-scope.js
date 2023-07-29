// global scope (convertFahrenheitToCelcus,temp1,temp2)
    // local scope (temp,celcius)
        // local scope (isFreezing)

let convertFahrenheitToCelcius = function(temp){
    let celcius = 5/9*(temp-32);

    if(celcius<=0){
        let isFreezing = true;
    }

    return celcius;
}

let temp1 = convertFahrenheitToCelcius(32);
let temp2 = convertFahrenheitToCelcius(68);


console.log(temp1);
console.log(temp2);

