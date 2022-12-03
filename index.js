const express = require("express");
const routes = require("./routes");

const app = express();

const port = process.env.PORT || 4000;

routes(app);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log("http://localhost:4000");
})

module.exports = app;