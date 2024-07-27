const express = require("express");
const {connectMongoDB} = require("./connection");
const app = express();
const myurl = require("./routes/url");
const URL = require("./models/url");
const PORT = 8081;

connectMongoDB("mongodb://127.0.0.1:27017/short-url")
    .then( () => {
        console.log("connect to MongoDB");
    })
    .catch( (err) => {
        console.log(err);
    })

//middlewares
app.use(express.json());

//routes
app.use("/url", myurl);

//shortner
app.get("/:id", async (req, res) => {
    const id = req.params.id;
    const user = await URL.findOneAndUpdate(
        {shortID : id},
        {
            $push :
            {
                visited :
                {
                    timestamps : Date.now()
                }
            }
        }
    )
    res.redirect(user.userUrl);
})

app.listen(PORT, () => console.log(`Server Stated at Port ${PORT}`));