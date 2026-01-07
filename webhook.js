require("dotenv").config();

const express = require("express");
const { exec } = require("child_process");
const crypt = reuire("crypto");

const app = express();
app.use(express.json());

const SECRET = process.env.WEBHOOK_SECRET;

function verifySignature(req) {
    const signature = req.headers["x-hub-signature-256"];
    if (!signature) return false;

    const hmac = crypto.createHmac("sha256", SECRET)
    .update(JSON.stringify(req.body))
    .digest("hex");

return signature === 'sha256=${hmac}';
}

app.post("/deploy", (req, res) => {
    if(!verifySignature(req)) { return res.status(403), send("Invalid signature");
    }

 exec("deploy.bat", { cwd: "C:\\node-server\\my-app" }, (err, stdout, stderr) => {
  if (err) {
   console.error(stderr);
   return res.status(500).send("Deploy failed");
  }
  console.log(stdout);
  res.send("Deploy success");
 });
});

app.listen(4000, () => {
 console.log("Webhook server running on port 4000");
});