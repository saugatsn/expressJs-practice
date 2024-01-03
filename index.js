const express = require("express");
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
app.get("/", (req, res) => {
  res.send("This is a get request to home page.");
});
app.get("/:username/:about", (req, res) => {
    let {username,about}=req.params;
    let htmlStr=`<h1>Welcome to the ${about} section of @${username}</h1>`
    res.send(htmlStr);
    
  });
  app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send(`<h1>Nothing searched</h1>`)
    }
    res.send(`<h1>Search result for query: ${q}</h1>`)
  })
// app.get("/about", (req, res) => {
//   res.send("This is a get request to about page.");
// });
// app.get("/contact", (req, res) => {
//   res.send("This is a get request to contact page.");
// });
// app.get("*", (req, res) => {
//   res.send("This is a get request to error page.");
// });
// app.post("/", (req, res) => {
//   res.send("This is a post request to homepage.");
// });
// app.post("/about", (req, res) => {
//   res.send("This is a post request to about page.");
// });
// app.post("/contact", (req, res) => {
//   res.send("This is a post request to contact page.");
// });
// app.post("*", (req, res) => {
//   res.send("This is a post request to error page.");
// });
// app.use((req, res) => {
//   console.log("Request received");
//   let response="<h1>This is response inside h1 tag.</h1>"
//   res.send(response)
// });
