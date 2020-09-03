const GetText = require("../service/scrape");
// const data = require("../service/local.json");

module.exports = async (req, res) => {
  try {
    // Local: not for deployment.
    // const textData = data;

    // For deployment
    const textData = await GetText();
    res.status(200).send({
      text: textData
    });
  } catch (error) {
    console.log(error);
  }
};
