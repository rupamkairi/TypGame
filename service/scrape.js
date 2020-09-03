const cheerio = require("cheerio");
const axios = require("axios");

function GetText() {
  let Article = new Object();
  return new Promise((resolve, reject) => {
    axios.get("https://globalvoices.org/").then((response) => {
      if (response.status == 200) {
        // console.log("Data can be loaded.");
        let html = response.data;
        let $ = cheerio.load(html);

        var articleList = $("div.post");
        articleList = articleList.slice(3, articleList.length - 1);
        var article =
          articleList[Math.round(Math.random() * articleList.length)];

        let article_url = $(article).find("a").attr("href");
        // console.log(article_url);

        axios.get(article_url).then((response) => {
          if (response.status == 200) {
            html = response.data;
            $ = cheerio.load(html);

            let pList = $("div.entry#single p").slice(1, 10);
            let text = "";
            text = $(pList[0]).text();
            for (let i = 1; text.length < 250; i++) {
              text = text + " " + $(pList[i]).text();
            }
            // console.log(text);

            // data flow working
            resolve(text);
          }
        });
      }
    });
  });
}

// logging
// async function Log() {
//   return GetText();
// }
// Log();

module.exports = GetText;
