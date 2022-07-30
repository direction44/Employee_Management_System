var express = require("express");
var router = express.Router();
var pool = require("./pool");

router.get("/fetchallstates", function (req, res, next) {
  pool.query("select * from states", function (error, result) {
    if (error) {
      res.status(500).json({
        status: false,
      });
    } else {
      res.status(200).json({ status: true, result: result });
    }
  });
});
router.get("/fetchallcities", function (req, res, next) {
  pool.query("select * from cities where stateid=?", [req.query.stateid],function (error, result) {
    if (error) {
      res.status(500).json({
        status: false,
      });
    } else {
      res.status(200).json({ status: true, result: result });
    }
  });
});
module.exports = router;
