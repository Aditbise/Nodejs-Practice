const dbconnect = require('./api');
const mongodb = require('mongodb');
const express = require('express');
const app = express();

app.use(express.json());

// for getting data i.e to display available data
app.get('/', async (req, resp) => {
    let data = await dbconnect();
    console.log("Here is the DataBase :)");
    data = await data.find().toArray();
    console.log(data);
    resp.send(data);
});

// for posting the data i.e adding new data
app.post('/', async (req, resp) => {
    let data = await dbconnect();
    let result = await data.insertOne(req.body);
    resp.send(result);
});

// for putting the data i.e exchanging the data or updating the data
app.put('/', async (req, resp) => {
    let data = await dbconnect();
    let result1 = await data.updateOne(
        { name: req.body.name },
        { $set: req.body }
    );

    let result2 = await data.updateOne(
        { info: req.body.info },
        { $set: req.body }
    );

    resp.send({ result: "Data Base Updated :D" });
});

// for deleting the data
app.delete('/:id', async (req, resp) => {
    console.log('ID to delete:', req.params.id);
    const data = await dbconnect();
    const result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
    console.log('Delete result:', result);
    resp.send(result);
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
