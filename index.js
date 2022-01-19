const express = require("express");
const forever = require("forever");
const child  = require("./start");
const  app = express();
app.use(express.json())
app.use(express.raw());
app.use(express.urlencoded({ extended: true }));

console.log("app started")

app.use('/api',require('./routes/job.routes'))

var startTime  = process.hrtime()
var startUsage = process.cpuUsage()

setInterval(function () {


  // spin the CPU for 500 milliseconds

  var now = Date.now()

  while (Date.now() - now < 5000);

  let newStartTime = process.hrtime();
  let newStartUsage = process.cpuUsage();

  var elapTime = process.hrtime(startTime)
  var elapUsage = process.cpuUsage(startUsage)

  startTime = newStartTime;
  startUsage = newStartUsage;

  var elapTimeMS = hrtimeToMS(elapTime)

  var elapUserMS = elapUsage.user / 1000; // microseconds to milliseconds
  var elapSystMS = elapUsage.system / 1000;
  var cpuPercent = (100 * (elapUserMS + elapSystMS) / elapTimeMS).toFixed(1)  // + '%'
if(cpuPercent > 40){
    forever.restart(child);
    // forever.startServer(child);
    console.log("restart the node server")
}
//   console.log('elapsed time ms:  ', elapTimeMS)
//   console.log('elapsed user ms:  ', elapUserMS)
//   console.log('elapsed system ms:', elapSystMS)
console.log('cpu percent:      ', cpuPercent, '\n')

}, 10000);

function hrtimeToMS (hrtime) {
  return hrtime[0] * 1e3 + hrtime[1] / 1e6
}


app.listen("3000", () => {

    console.log("server");
});