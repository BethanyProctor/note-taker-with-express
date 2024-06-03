const express = require("express");
const api_routes = require('./routes/api-routes');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(api_routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});