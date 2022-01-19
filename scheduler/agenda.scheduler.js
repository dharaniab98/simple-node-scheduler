// This is a file used to create an agenda object.

const Agenda = require("agenda");
const agendaConfig = require("./../constants/config")

 const agenda = new Agenda(agendaConfig.mongodb);

 const jobs = ['dbJobs'];

// Here we are passing the agenda object to the jobs to access the agenda API
// in define jobs function
jobs.forEach((job) => {
    require("./../jobs/"+ job)(agenda);
})

if(Array.isArray(jobs) && jobs.length){
    agenda.on('ready', async () => {
        try{
            let a = await agenda.start();
            console.log("Agenda started");
        }catch(err){
            console.log("Failed to start Agenda:"+ err.message);

        }
    })
}
async function graceful() {
    await agenda.stop();
    process.exit(0);
  }
  
  process.on("SIGTERM", graceful);
  process.on("SIGINT", graceful);

module.exports = agenda;