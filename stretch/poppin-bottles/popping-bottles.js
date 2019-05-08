function updateOnBuy(numOfBottles, source){
  details.bought  += numOfBottles;
  details[source] += numOfBottles;
  details.bottle  += numOfBottles;
  details.cap     += numOfBottles;
}



function calcNumberOFBottles(money){
  updateOnBuy(Math.floor(money / 2),"boughtByMoney");
  while(details.bottle >= 2 || details.cap >=4 ){
    let {bottle, cap} = details;
   // console.log("bought", details.bought, "bottle", details.bottle, "cap", details.cap);
    if(bottle >=2){
      let toBuy = bottle % 2 == 0 ? (bottle / 2) : (bottle -1)/ 2;
      details.bottle -= 2 * toBuy;
      updateOnBuy(toBuy, "boughtByBottle");
    }
    else if(cap >=4){
      let toBuy = Math.floor(cap / 4);
      details.cap -= toBuy * 4;
      updateOnBuy(toBuy, "boughtBycap");
    }
  }
  console.log(details.bought);
}

let details =
    {
      bought          : 0,
      bottle          : 0,
      cap             : 0,
      boughtByMoney   : 0
      boughtByBottle  : 0,
      boughtBycap     : 0
    };

let investment = Number(process.argv[2]);
console.log(investment);
calcNumberOFBottles(investment);
