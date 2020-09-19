const GetText = require("../services/scrape");
// const data = require("../service/local.json");

exports.handler = async (event, context) => {
  try {
    // Local: not for deployment.
    // const textData = data;

    // For deployment
    const textData = await GetText();

    return {
      statusCode: 200,
      body: JSON.stringify({
        text: textData,
      }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
