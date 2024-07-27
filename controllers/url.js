const URL = require("../models/url");
const short = require('short-uuid');
const { use } = require("../routes/url");

async function HandleCreateID(req, res){
    const uid = short.generate();
    const body = req.body;
    if(!body.url)
    {
        res.status(400).send("Bad request url needed");
    }
    const user = await URL.create({
        shortID : uid,
        userUrl : body.url,
        visited : []
    });
    return res.status(201).json({id : user.shortID});
}


async function HandleGetAnalytics (req, res) {
    const id = req.params.id;
    const user = await URL.findOne({shortID : id});
    res.json({
         Total_Clicks : user.visited.length,
         Analytics : user.visited,
    })
}

module.exports = {
    HandleCreateID,
    HandleGetAnalytics,
}