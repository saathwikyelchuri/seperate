const fs=require('fs');
const path=require('path');
const reports=require('../models/report');


async function handleReport(req, res) {
    try {
        // Fetch only childname and sessionid fields
        const report = await reports.find({}, 'childname sessionid');
        if (!report || report.length === 0) {
            return res.status(404).json({ error: "No reports found." });
        }
        res.status(200).json(report); // Send the filtered data as JSON response
    } catch (error) {
        console.error("Error fetching reports:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}


module.exports={
    handleReport,
}
