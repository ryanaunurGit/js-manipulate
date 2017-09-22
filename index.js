var isVar = true;
let isLet = true;
let doProvider = [];
const isConst = true;

function sleep() {
  action.Wudlu().then(function(finish) {
    finish.prayAfterWudlu(); 
  });
  
  action.Dua = "bismika allahumma ahya wa bismika amuut";
  
  action.Pray.do(Dua).then(function(finish) {
    let isFinish = true;
    
    action.body.turn.left();
    action.body.onlyHand.above.body();
  });
}

let services = (register, options) => {
  // let me know who is regist the service
  this.provide = "Services";
  this.regist = () => {
    options.forEach((that) => {
      console.write.system(that, withDate());
    });
  }
}

function doSomething() {
  //when do something dont forget to pray
  action.Pray();
  
  action.doSomthing();
  
  action.Pray().then(function(do) {
    do.readQuran();
    do.Dzikir();
  });
}

action.on("dream", function(event) {
   if (event.dream.status == "bad") {
      action.body.weekUp();
      
      // Give body, blood, breath time to back normal
      // Lets says we need 5s to make our body back Normal
      setTimeOut(function() {
        action.trigger.Pray.do("astaghfirullah hal adzim");
      }, 5000);
   } 
});
action.on("tahajudTime", function(event) {
  action.body.weekUp();
  
  action.Core.call(doSomething).with({
    doSomthing.fetch({ export: action.body, think: action.brain });
  });
});
