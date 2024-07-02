import express from "express";
const app = express();

// "type": "module", in package.json  for using module

// i)
// npm i cors to connect both locallhost for get and send request
// var cors = require('cors')
// app.use(cors())

// ii)
// /api/jokes      :-standerise 

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is ready!");
});

// get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "Joke1", content: "This is joke 1" },
    { id: 2, title: "Joke2", content: "This is joke 2" },
    { id: 3, title: "Joke3", content: "This is joke 3" },
    { id: 4, title: "Joke4", content: "This is joke 4" },
    { id: 5, title: "Joke5", content: "This is joke 5" },
  ];
  res.send(jokes);
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
