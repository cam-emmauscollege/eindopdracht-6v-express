const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views','./html-templates');

app.use(express.static('openbaar'));

app.get('/', (req, res) => {
  res.render("homepage.ejs", {magicWord: "eenhoorn"});
  //res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})