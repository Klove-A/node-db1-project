const router = require("express").Router();
const Account = require("./accounts-model");
const {
  checkAccountId,
  checkAccountNameUnique,
  checkAccountPayload,
} = require("./accounts-middleware");

router.get("/", 
  async (req, res, next) => {
  try {
    const accounts = await Account.getAll();
    res.json(accounts);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", 
  checkAccountId, 
  async (req, res, next) => {
  res.json(req.account)
});

router.post("/",
  checkAccountNameUnique,
  checkAccountPayload,
  (req, res, next) => {
    try {
      res.json("post account");
    } catch (err) {
      next(err);
    }
  }
);

router.put("/:id",
  checkAccountId,
  checkAccountNameUnique,
  checkAccountPayload,
  (req, res, next) => {
    try {
      res.json("put account");
    } catch (err) {
      next(err);
    }
  }
);

router.delete("/:id", 
  checkAccountId, 
  (req, res, next) => {
  try {
    res.json("delete account");
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = router;
