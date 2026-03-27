import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("hellow");
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Joke 1",
            joke: "This is joke 1",
        },
        {
            id: 1,
            title: "Joke 1",
            joke: "This is joke 1",
        },
        {
            id: 1,
            title: "Joke 1",
            joke: "This is joke 1",
        },
        {
            id: 1,
            title: "Joke 1",
            joke: "This is joke 1",
        },
        {
            id: 1,
            title: "Joke 1",
            joke: "This is joke 1",
        },
        
    ]
    res.send(jokes);
})


app.listen(port, () => {
    console.log(`Application is running at port ${port }`)
})