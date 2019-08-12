const express = require("express");

const convert = function(text) {
  let ascii = "";

  for (var i = 0; i < text.length; i++) {
    var code = Number(text[i].charCodeAt(0));
    if (code > 127) {
      var charAscii = code.toString(16);
      charAscii = new String("0000").substring(charAscii.length, 4) + charAscii;
      ascii += "\\u" + charAscii;
    } else {
      ascii += text[i];
    }
  }

  return ascii;
};

const app = express();

app.get("/", function(req, res) {
  const txtConv = convert(req.query.txt);
  res.send(`${req.query.txt} > ${txtConv}`);
});

app.listen(3000, () => {
  console.log(`Porta 3000 ${new Date()}`);
});
