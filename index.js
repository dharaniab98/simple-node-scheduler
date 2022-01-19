const express = require("express");
// const forever = require("forever");
// const child  = require("./start");
const  app = express();
app.use(express.json())
app.use(express.raw());
app.use(express.urlencoded({ extended: true }));

app.use('/api',require('./routes/job.routes'))

var startTime  = process.hrtime()
var startUsage = process.cpuUsage()

setInterval(function () {

  var now = Date.now()

  while (Date.now() - now < 5000);

  let newStartTime = process.hrtime();
  let newStartUsage = process.cpuUsage();

  var elapTime = process.hrtime(startTime)
  var elapUsage = process.cpuUsage(startUsage)

  startTime = newStartTime;
  startUsage = newStartUsage;

  var elapTimeMS = hrtimeToMS(elapTime)

  var elapUserMS = elapUsage.user / 1000;
  var elapSystMS = elapUsage.system / 1000;
  var cpuPercent = (100 * (elapUserMS + elapSystMS) / elapTimeMS).toFixed(1)
  console.log(cpuPercent)
  if(cpuPercent > 49){
      console.log("restart the node server")
      //forever.restart(child);
  }
console.log('cpu percent:      ', cpuPercent, '\n')
}, 10000);

function hrtimeToMS (hrtime) {
  return hrtime[0] * 1e3 + hrtime[1] / 1e6
}


app.listen("3000", (err) => {
    if (err) {
      console.log('server startup error', err);
    } else {
      console.log("server started")
    }
});
