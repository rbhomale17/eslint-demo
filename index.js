const str = "hello"
console.log(str.length, str)

const str2 = "hello"
console.log(str2.length, str2)

function str3 (str) {
  console.log(str.length, str)
}

str3("jkahdkah")

const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("hello")
})

app.listen(3000, () => {
  console.log("listening on port 3000")
})
