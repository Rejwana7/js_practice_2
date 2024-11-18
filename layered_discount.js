/**
 * first100 --> 100
 * 101To200 --> 90
 * above200 --> 70
*/
function layeredDiscountedTotal (quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <=100){
        const total = quantity * first100Price;
        return total;
    }
    else if(quantity <=200){
        const first100total=100*first100Price;
        console.log(first100total)
        const remainingQuantity=quantity-100;
        console.log(remainingQuantity)
        const remainingTotal= remainingQuantity*second100Price;
        const total = first100total + remainingTotal;
        return total;
    }
    else{
        const first100Total = 100 * first100Price;
        const second100Total = 90 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }
}
console.log(layeredDiscountedTotal (150))


  