// require/import goes here

module.exports = (req, res) => {
  // endpoint specific tasks(like auth, cors) goes here

  // // simple(default) GET request.
  // res.status(200).send({
  //   message: `hello, World`,
  // });

  // requset methods can be used like following
  if (req.method === "POST") {
    const { name = "World" } = req.query;

    res.status(200).send({
      message: `hello, ${req.query.name}.`
    });
  } else {
    res.status(200).send({
      message: `This endpoint expects a POST method.`
    });
  }
};
