export function getTotalPriceOfMaterial(arr){
    return arr.reduce((acc, mat) => {
    acc += mat.Quantity * mat.Price
    return acc;
    }, 0)
}

export function getArrayOfPrice(arr) {
    return arr.map(mat => mat.Price * mat.Quantity)
}