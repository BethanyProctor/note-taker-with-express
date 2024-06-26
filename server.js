const path = require('path');
const express = require("express");
const api_routes = require('./routes/api-routes');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use("/api", api_routes);

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
  );

  app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
  );

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});