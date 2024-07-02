import express from "express"

const app = express()
const port = process.env.port || 3001

app.get("/", (req, res) => {
  res.send("Server is ready!")
})

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
