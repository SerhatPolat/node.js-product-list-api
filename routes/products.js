var express = require("express");
var router = express.Router();

const productList = {
  productListItems: [
    {
      id: "1",
      name: "product1",
      price: "199",
    },
    {
      id: "2",
      name: "product2",
      price: "249",
    },
    {
      id: "3",
      name: "product3",
      price: "99",
    },
  ],
};

router.get("/", function (req, res, next) {
  res.send(productList);
});

module.exports = router;
