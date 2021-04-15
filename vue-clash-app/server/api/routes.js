// use the express router to create endpoints in our server
const express = require('express');
const router = express.Router();

// require in the custom node module previously built
const clashofclans = require('clashofclansapi');

// localhost:8888/api/search
router.post('/search', async (req, res) =>{

    try{
        const clanResponse = await clashofclans.clans(req.body.clanName);
        res.json(clanResponse);

    }
    catch(error){
        res.json({ error });
    }
});

// localhost:8888/api/searchID
router.post('/searchID', async (req, res) =>{

    try{
        const clanResponse = await clashofclans.clanID(req.body.clanID);
        res.json(clanResponse);

    }
    catch(error){
        res.json({ error });
    }
});

module.exports = router;