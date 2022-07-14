// class Clock {
//     constructor() {
//         const date = new Date();
//         this.hours = date.getHours();
//         this.minutes = date.getMinutes();
//         this.seconds = date.getSeconds();
//         this.h = this.hours;
//         this.m = this.minutes;
//         this.s = this.seconds;
//         const boundTick = this._tick.bind(this);
//         setInterval(boundTick, 1000);
//     }
    
 
//     {
//         let hh = this.h
//         let mm = this.m
//         let ss = this.s
        
//         if (this.h < 10) {
//             hh = "0" + this.h;
//         }
//         if (this.m < 10) {
//             mm = "0" + this.m;
//         }
//         if (this.s < 10) {
//             ss = "0" + this.s;
//         }
        
//         console.log(`${hh}:${mm}:${ss}`)
//     }

//     timeReset24(h) {
//         if (h === 24) {
//             return 0;
//         }
//         return h;
//     }

//     timeReset60secs(i) {
//         if (i === 60) {
//             this.m += 1;
//             return 0;
//         }
//         return i;
//     }

//     timeReset60mins(i) {
//         if (i === 60) {
//             this.h += 1;
//             return 0;
//         }
//         return i;
//     }

//     _tick() {
//         this.s += 1;
//         this.s = this.timeReset60secs(this.s);    
//         this.m = this.timeReset60mins(this.m);        
//         this.h = this.timeReset24(this.h);        
        
//         debugger
//         this.printTime();
//     }
    
// }

// const clock = new Clock();



// const readline = require("readline");
// reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function addNumbers(sum, numsLeft, completionCallback) {
//     if (numsLeft === 0) {
//         reader.close(); 
//         return completionCallback(sum);
//     }
//     if (numsLeft > 0) {
//         reader.question('Give me a number', function(answer) {
//             sum += parseInt(answer);
//             console.log(sum);
//             addNumbers(sum, numsLeft - 1, completionCallback);
//         })
//     }
// }
// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

Function.prototype.myBind = function(context) {
    return () =>  {this.apply(context)};
    }

class Lamp {
    constructor() {
      this.name = "a lamp";
    }
  }
  
  const turnOn = function() {
    console.log("Turning on " + this.name);
  };
  
  const lamp = new Lamp();
  
  turnOn(); // should not work the way we want it to
  
  const boundTurnOn = turnOn.bind(lamp);
  const myBoundTurnOn = turnOn.myBind(lamp);
  
  boundTurnOn(); // should say "Turning on a lamp"
  myBoundTurnOn(); // should say "Turning on a lamp"