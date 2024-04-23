import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Cards from './dbCards.js'
const ObjectId = mongoose.Types.ObjectId;

//App Config
const app = express()
const port = process.env.PORT || 8001
// const connection_url = 'mongodb+srv://dbuser:dbpass@atlascluster.1l0tebw.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster'
//Middleware
app.use(express.json())
app.use(Cors())
//DB Config
mongoose.connect(process.env.DB)

function getJSONObject(req) {
    var json = {
        headers: "No headers",
        body: "No body"
    };

    if (req.body != null) {
        json.body = req.body;
    }

    if (req.headers != null) {
        json.headers = req.headers;
    }

    return json;
}

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"))

app.post('/dating/cards', async(req, res) => {
    const dbCard = new Cards(req.body);
    dbCard.save();
    res.status(201).send();
})


app.get('/dating/cards', async(req, res) => {
    let dbCard;
    var o = getJSONObject(req);
    dbCard = await Cards.find()
    if (dbCard.length > 0) {
        o.status = 200;
        o.message = "GET cards";
        o.dbCard = dbCard;
        o.headers = req.headers;
        o.query = req.query;
        res.json(o);

    }
})
//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))