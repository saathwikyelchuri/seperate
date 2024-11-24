const fs=require('fs');
const path=require('path');
const reports=require('../models/report');
const analysisResults=require('./process');


async function handleResult(req, res) {
    res.json(analysisResults);
}

module.exports={
    handleResult
}