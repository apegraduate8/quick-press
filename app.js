const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require('body-parser');




const PORT = process.env.PORT || 3000;

// app.engine('html', )
app.set('view engine', 'ejs');
app.set('views', __dirname + '/build');
app.use(express.static(__dirname + '/build'));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(require('./router.js'))




app.listen(PORT, () => {
  console.log("started,   listening on port 3000")
})


/// https://www.programmableweb.com/news/25-music-apis/2008/02/21
/// https://www.programmableweb.com/api/dolby-audio
/// http://docs.7digital.com/#streaming-downloads.  stream music


