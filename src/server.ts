import express from "express";

const app = express();

app.get('/', (req, res) => {
    return res.send("NLW");
});

app.listen(3000, () => {
    console.log('+ Server is running 3000.');
})