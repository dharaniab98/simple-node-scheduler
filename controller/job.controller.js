const agenda = require("./../scheduler/agenda.scheduler");

module.exports.createJob = async (req, res) => {
 try{
        const dbName = req.body.dbName;
        const collectionName = req.body.collectionName;
        const day = req.body.day //|| Date.now().getDay();
        const hr =  req.body.hours // || ; 
        const minutes = req.body.minutes;
        const month = req.body.month;
        const data =  req.body.message;
        let scheduleTime = `${minutes} ${hr} ${day} ${month} *`;
        console.log(scheduleTime);
        const dbJob = agenda.create('db_insertion', {details:data, dbName:dbName, collectionName:collectionName});
        dbJob.repeatEvery(scheduleTime, {
        timezone: 'Asia/Kolkata'});
        let stats = await dbJob.save();
        
        res.send({status:"success"});
    }catch(err){
        res.send({status:"Fail to createJOb"});
        console.log(err)
    }

}