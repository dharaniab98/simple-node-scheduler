const router = require("express").Router();
const {createJob} = require("./../controller/job.controller")

router.post("/createjob", createJob) 

module.exports = router;