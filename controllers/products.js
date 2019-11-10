const products = [];
exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    prod: products,
    pageTitle: "Add Products",
    path: "/admin/add-product"
  });
};

exports.postProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    hasProducts: products.length > 0,
    path: "/"
  });
};
