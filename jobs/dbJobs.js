const {dbConnection } = require("./../database/connection")
module.exports =  (agenda) =>{
    agenda.define("db_insertion", {
       priority: 'high',
       concurrency: 1000000
       }, async (jobs) => {
          try{
               let dbName = jobs.attrs.data.dbName;
               let collecName = jobs.attrs.data.collectionName;
               let data = jobs.attrs.data.details;
               let db = await dbConnection(dbName)
               let collection = await db.collection(collecName);
               let res = await collection.insertOne(data);
               console.log(res)
              
          }catch(err){
               console.log(err);
          }  

     })
}
