const express = require('express');
const compression = require('compression');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(compression({
    level: 9,
    memLevel: 9,
    threshold: 0
}));
app.use(express.static(__dirname + '/../react-ui/build', {
  maxAge: '1y'
}));

app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from the custom server!"}');
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
