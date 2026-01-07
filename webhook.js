const express = require("express");
const { exec } = require("child_process");

const app = express();
app.use(express.json());

app.post("/deploy", (req, res) => {
 console.log("Webhook received");

 exec("C:\\Uxdlab_App\\deploy.bat", (err, stdout, stderr) => {
  if (err) {
   console.error(err);
   return res.status(500).send("Deploy failed");
  }
  console.log(stdout);
  res.send("Deploy success");
 });
});

app.listen(9000, "0.0.0.0", () => {
 console.log("Webhook server running on port 9000");
});