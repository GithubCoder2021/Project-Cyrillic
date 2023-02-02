game = {
  A: new OmegaNum(10), //Ammount of A you have,
  APerSec: new OmegaNum(0),
  ADimensions: [null, "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"], //A Dimension Names (added null for less confusion)
  ADimCost: [null, new OmegaNum(10), new OmegaNum(100), new OmegaNum(10000), new OmegaNum(1e6),new OmegaNum(1e8), new OmegaNum(1e10), new OmegaNum(1e12), new OmegaNum(1e15)],// A Dimemsion Costs
  ADim1: new OmegaNum(0),
  ADim2: new OmegaNum(0),
  ADim3: new OmegaNum(0),
  ADim4: new OmegaNum(0),
  ADim5: new OmegaNum(0),
  ADim6: new OmegaNum(0),
  ADim7: new OmegaNum(0),
  ADim8: new OmegaNum(0),
  БGain: new OmegaNum(0),
  Б: new OmegaNum(0),
  tickspeed: new OmegaNum(1),
  tickspeedCost: new OmegaNum(1000)
};

setInterval (function(){
  game.A = game.A.add(game.APerSec.div(10));
  game.APerSec = game.ADim1.mul(game.tickspeed);
  game.ADim1 = game.ADim1.add(game.ADim2.div(10));
  game.ADim2 = game.ADim2.add(game.ADim3.div(10));
  game.ADim3 = game.ADim3.add(game.ADim4.div(10));
  game.ADim4 = game.ADim4.add(game.ADim5.div(10));
  game.ADim5 = game.ADim5.add(game.ADim6.div(10));
  game.ADim6 = game.ADim6.add(game.ADim7.div(10));
  game.ADim7 = game.ADim7.add(game.ADim8.div(10));
}, 100);

setInterval (function(){
  document.getElementById("A").innerText = game.A.round().toString();
  document.getElementById("APS").innerText = game.APerSec.round().toString();
  document.getElementById("ADim1").innerText = game.ADim1.round().toString();
  document.getElementById("ADimCost1").innerText = game.ADimCost[1].round().toString();
  document.getElementById("ADim2").innerText = game.ADim2.round().toString();
  document.getElementById("ADimCost2").innerText = game.ADimCost[2].round().toString();
  document.getElementById("ADim3").innerText = game.ADim3.round().toString();
  document.getElementById("ADimCost3").innerText = game.ADimCost[3].round().toString();
  document.getElementById("ADim4").innerText = game.ADim4.round().toString();
  document.getElementById("ADimCost4").innerText = game.ADimCost[4].round().toString();
  document.getElementById("ADim5").innerText = game.ADim5.round().toString();
  document.getElementById("ADimCost5").innerText = game.ADimCost[5].round().toString();
  document.getElementById("ADim6").innerText = game.ADim6.round().toString();
  document.getElementById("ADimCost6").innerText = game.ADimCost[6].round().toString();
  document.getElementById("ADim7").innerText = game.ADim7.round().toString();
  document.getElementById("ADimCost7").innerText = game.ADimCost[7].round().toString();
  document.getElementById("ADim8").innerText = game.ADim8.round().toString();
  document.getElementById("ADimCost8").innerText = game.ADimCost[8].round().toString();
  document.getElementById("tick").innerText = game.tickspeed.toString();
  document.getElementById("tickCost").innerText = game.tickspeedCost.round().toString();
  document.getElementById("beGain").innerText = game.БGain.round().toString)
}, 10);

function buyADim1(){
  if (OmegaNum.gte(game.A,game.ADimCost[1])) {
    game.A = game.A.minus(game.ADimCost[1]);
    game.ADim1 = game.ADim1.add(1);
    game.ADimCost[1] = game.ADimCost[1].mul(1.5);
   }
}
function buyADim2(){
  if (OmegaNum.gte(game.A,game.ADimCost[2])) {
    game.A = game.A.minus(game.ADimCost[2]);
    game.ADim2 = game.ADim2.add(1);
    game.ADimCost[2] = game.ADimCost[2].mul(1.5);
   }
}
function buyADim3(){
  if (OmegaNum.gte(game.A,game.ADimCost[3])) {
    game.A = game.A.minus(game.ADimCost[3]);
    game.ADim3 = game.ADim3.add(1);
    game.ADimCost[3] = game.ADimCost[3].mul(1.5);
   }
}
function buyADim4(){
  if (OmegaNum.gte(game.A,game.ADimCost[4])) {
    game.A = game.A.minus(game.ADimCost[4]);
    game.ADim4 = game.ADim4.add(1);
    game.ADimCost[4] = game.ADimCost[4].mul(1.5);
   }
}
function buyADim5(){
  if (OmegaNum.gte(game.A,game.ADimCost[5])) {
    game.A = game.A.minus(game.ADimCost[5]);
    game.ADim5 = game.ADim5.add(1);
    game.ADimCost[5] = game.ADimCost[5].mul(1.5);
   }
}
function buyADim6(){
  if (OmegaNum.gte(game.A,game.ADimCost[6])) {
    game.A = game.A.minus(game.ADimCost[6]);
    game.ADim6 = game.ADim6.add(1);
    game.ADimCost[6] = game.ADimCost[6].mul(1.5);
   }
}
function buyADim7(){
  if (OmegaNum.gte(game.A,game.ADimCost[7])) {
    game.A = game.A.minus(game.ADimCost[7]);
    game.ADim7 = game.ADim7.add(1);
    game.ADimCost[7] = game.ADimCost[7].mul(1.5);
   }
}
function buyADim8(){
  if (OmegaNum.gte(game.A,game.ADimCost[8])) {
    game.A = game.A.minus(game.ADimCost[8]);
    game.ADim8 = game.ADim8.add(1);
    game.ADimCost[8] = game.ADimCost[8].mul(1.5);
   }
}
function upgTickspeed(){
  if (OmegaNum.gte(game.A,game.tickspeedCost)) {
    game.A = game.A.minus(game.tickspeedCost);
    game.tickspeed = game.tickspeed.mul(1.5);
    game.tickspeedCost = game.tickspeedCost.mul(10);
   }
}

function gainBeh(){
  if (OmegaNum.gte(game.A,1e21)){
       game.БGain = OmegaNum.log10(game.A).minus(21);
       document.getElementById("behgain").style.display = "inline-block";
      } else {
       document.getElementById("behgain").style.display = "none";
       game.БGain = new OmegaNum(0);
  }
    
}
