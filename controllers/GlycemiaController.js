
const database = require('../models');

class GlycemiaController {
    static async test(req, res){
        res.send({message: "Hello World"});
    }
}

module.exports = GlycemiaController;