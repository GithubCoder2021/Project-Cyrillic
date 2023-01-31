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
}

setInterval (function(){
  game.A = game.A.add(game.ADim1);
  game.APerSec = game.ADim1;
  game.ADim1 = game.ADim1.add(game.ADim2.div(100));
  game.ADim2 = game.ADim2.add(game.ADim3.div(100));
  game.ADim3 = game.ADim3.add(game.ADim4.div(100));
  game.ADim4 = game.ADim4.add(game.ADim5.div(100));
  game.ADim5 = game.ADim5.add(game.ADim6.div(100));
  game.ADim6 = game.ADim6.add(game.ADim7.div(100));
  game.ADim7 = game.ADim7.add(game.ADim8.div(100));
  document.getElementById("A").innerText = game.A.floor.toString();
  document.getElementById("APS").innerText = game.APerSec.floor.toString();
  document.getElementById("ADim1").innerText = game.ADim1.floor.toString();
  document.getElementById("ADimCost1").innerText = game.ADimCost[1].floor.toString();

}, 10)

function buyADim1(){
  if (OmegaNum.gte(game.A,game.ADimCost[1])) {
    game.A = game.A.minus(game.ADimCost[1]);
    game.ADim1 = game.ADim1.add(1);
}
