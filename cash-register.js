
function checkCashRegister(price, cash, cid) {
    var change = 100 * (cash - price);
    var availableFunds = 0;
  
    var moneyValues = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
    var amtToReturn = [];
    for (var i = cid.length - 1; i >= 0; i--){
      var amt = 0;
      while (moneyValues[i] <= change && cid[i][1] > 0 && change > 0){
        console.log("subtracting " + moneyValues[i]);
        cid[i][1] -= moneyValues[i]/100;
        change -= moneyValues[i]; 
        amt += moneyValues[i]/100; 
      }
      if (amt !== 0){
        amtToReturn.push([cid[i][0], amt.toFixed(2)]);
      }
    }
    if (change !== 0){
      console.log("broke");
      console.log(change);
      return "Insufficient Funds";
    }
    for (var j = 0; j < cid.length; j++){
      if (cid[j][1] > 0){
        console.log(amtToReturn);
        return amtToReturn;
      }
    }
    console.log("closed");
    return "Closed";
  
  }
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10],
 ["QUARTER", 4.25],
 ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00],
 ["ONE HUNDRED", 100.00]]);