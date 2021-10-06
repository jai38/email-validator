const router = require("express").Router();
const emailVerify = require("deep-email-validator");
router.post("/", async (req, res) => {
  const email = req.body.email;

  const response = await emailVerify.validate(email);
  res.json({ status: response.valid });
});
module.exports = router;
