
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

//one euro is:
function fromEuroToDollar(EU){
    return EU * oneEuroIs.USD; 
}

//one dollar is:
function fromDollarToYen(USD){
    return USD * oneEuroIs.JPY
}

//one dollar is:
function fromYenToPound(JPY){
    return JPY * oneEuroIs.GBP
}

module.exports = {fromEuroToDollar,fromDollarToYen, fromYenToPound };


