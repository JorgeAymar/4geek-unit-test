// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


function fromDollarToYen(USD){
    return USD * oneEuroIs.JPY 
}


function fromEuroToDollar(EU){
    return EU / 1.2;
}

function fromYenToPound(JPY){
    return JPY * oneEuroIs.JPY 
}

// importar la función sum del archivo app.js
const { fromDollarToYen } = require('./app.js');
const { fromEuroToDollar } = require('./app.js');
const { fromYenToPound } = require('./app.js');


// comienza tu primera prueba fromDollarToYen
test(' 1 dollar es igual a 127.9 yen', () => {
    let total = fromDollarToYen(1);
    expect(total).toBe(127.9);
});

// comienza tu segunda prueba fromEuroToDollar
test(' 1 euro es igual a 1.2 dollar', () => {
    let total = fromEuroToDollar(1);
    expect(total).toBe(1.2);
});

// comienza tu segunda prueba fromEuroToDollar
test(' 1 yan es igual a 0.8 pount', () => {
    let total = fromYenToPound(1);
    expect(total).toBe(0.8);
});