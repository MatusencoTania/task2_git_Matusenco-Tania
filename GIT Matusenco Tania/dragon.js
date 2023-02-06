function isPossibleToGiveChange(arr){
    let price= 25;
    let change = 0;
    let canBuy = true;
   
    for(i = 0; i < arr.length; i++){
        if (change < arr[i] - price){
            canBuy = false;
            break;
        }
       
        change += price;
    }
    return canBuy;
}


console.log(isPossibleToGiveChange([25, 50, 100]));