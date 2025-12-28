const express = require("express");
const app = express();
const port = 5500;

// عرض الملفات الثابتة من مجلد "pages" و "styles"
app.use(express.static(__dirname + "/pages"));
app.use("/styles", express.static(__dirname + "/pages/styles"));

app.listen(port, () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
