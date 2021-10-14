const express = require('express');
const router = express.Router();

router.get('/Workouts', (req, res) => {
    const str = [
        {
            "ID": "0001",
            "workout": "10"
            
        },
        {
            "ID": "0002",
            "workout": "28"
        },
        {
            "ID": "0003",
            "workout": "24"
        }
    ];
    res.end(JSON.stringify(str));
});

router.post('/addWorkout', (req, res) => {
    res.end('NA');
});

module.exports = router;