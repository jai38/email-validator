const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cors());
app.get("/", (req, res) => {
  res.json({
    Status: "200",
    body: "All OK",
    description:
      "please send POST request to /email-verify with body {'email':'example@gmail.com'}",
  });
});
app.use("/email-verify", require("./routes/email-verify"));
app.listen(PORT, () => {
  console.log(`On Port ${PORT}`);
});
