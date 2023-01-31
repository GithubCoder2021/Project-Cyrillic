game = {
  A: new OmegaNum(10), //Ammount of A you have,
  APerSec: new OmegaNum(0),
  ADimensions: [null, "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"], //A Dimension Names (added null for less confusion)
  ADimCost: [null, new OmegaNum(10), new OmegaNum(100), new OmegaNum(10000), new OmegaNum(1e6),new OmegaNum(1e8), new OmegaNum(1e10), new OmegaNum(1e12), new OmegaNum(1e15)], // A Dimemsion Costs
  ADim1: new OmegaNum(0),
  ADim2: new OmegaNum(0),
  ADim3: new OmegaNum(0),
  ADim4: new OmegaNum(0),
  ADim5: new OmegaNum(0),
  ADim6: new OmegaNum(0),
  ADim7: new OmegaNum(0),
  ADim8: new OmegaNum(0)
};

setInterval (function(){
  document.getElementById("A").innerText = game.A.round().toString();
  document.getElementById("APS").innerText = game.APerSec.round().toString();
  document.getElementById("ADim1").innerText = game.ADim1.round().toString();
  document.getElementById("ADimCost1").innerText = game.ADimCost[1].round().toString();
  game.A = game.A.add(game.ADim1);
  game.APerSec = game.ADim1;
  game.ADim1 = game.ADim1.add(game.ADim2);
  game.ADim2 = game.ADim2.add(game.ADim3);
  game.ADim3 = game.ADim3.add(game.ADim4);
  game.ADim4 = game.ADim4.add(game.ADim5);
  game.ADim5 = game.ADim5.add(game.ADim6);
  game.ADim6 = game.ADim6.add(game.ADim7);
  game.ADim7 = game.ADim7.add(game.ADim8);
  
}, 1000);

function buyADim1(){
  if (OmegaNum.gte(game.A,game.ADimCost[1])) {
    game.A = game.A.minus(game.ADimCost[1]);
    game.ADim1 = game.ADim1.add(1);
    game.ADimCost[1] = game.ADimCost[1].mul(1.5)
   }
}
function buyADim2(){
  if (OmegaNum.gte(game.A,game.ADimCost[2])) {
    game.A = game.A.minus(game.ADimCost[2]);
    game.ADim2 = game.ADim2.add(1);
    game.ADimCost[2] = game.ADimCost[2].mul(1.5)
   }
}
function buyADim3(){
  if (OmegaNum.gte(game.A,game.ADimCost[3])) {
    game.A = game.A.minus(game.ADimCost[3]);
    game.ADim3 = game.ADim3.add(1);
    game.ADimCost[3] = game.ADimCost[3].mul(1.5)
   }
}
function buyADim4(){
  if (OmegaNum.gte(game.A,game.ADimCost[4])) {
    game.A = game.A.minus(game.ADimCost[4]);
    game.ADim4 = game.ADim4.add(1);
    game.ADimCost[4] = game.ADimCost[4].mul(1.5)
   }
}
function buyADim5(){
  if (OmegaNum.gte(game.A,game.ADimCost[5])) {
    game.A = game.A.minus(game.ADimCost[5]);
    game.ADim5 = game.ADim5.add(1);
    game.ADimCost[5] = game.ADimCost[5].mul(1.5)
   }
}

