const aMat = [
    {
        "Material":"Stell",
        "Quantity": 40,
        "Price": 600
    },
    {
        "Material":"Concrete",
        "Quantity": 10,
        "Price": 800
    },
    {
        "Material":"Cement",
        "Quantity": 30,
        "Price": 5000
    }
]

// let sum = 0
// material.forEach((each) => {
//     sum += each.Quantity * each.Price
// })


import * as helper from '../nodebasics/utils/reuse.js'

// helper will be having {} with all the reuse functions

let totalAcc = helper.getTotalPriceOfMaterial(aMat)


let aTotalPrice = helper.getArrayOfPrice(aMat)


console.log(totalAcc, aTotalPrice)





