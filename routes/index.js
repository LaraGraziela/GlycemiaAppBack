const bodyParser = require('body-parser');
const cors = require('cors');
const glycemiaRoutes = require('./GlycemiaRoutes');

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(cors());
    app.use(glycemiaRoutes);
}