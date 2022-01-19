A simple node js scheduler using agenda npm module to shchedule a data insertion task and also used forever to restart the service based on cpu usage

command to start

$npm install

$npm start

Note: To use forever uncomment the forever code in start.js file and indexfile

Run command

node start.js (or) npm run forever

api request to create a job:

Post: http://localhost:3000/api/createjob

body:{
{
"dbName":"db2",
"collectionName":"details",
"day": "18",
"hours": "13",
"minutes":"03",
"month":"1",
"message":{"name":"kumar"}
}
}
