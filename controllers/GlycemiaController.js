const database = require("../models");

class GlycemiaController {
  static async test(req, res) {
    res.send({ message: "Hello World" });
  }

  static async getAll(req, res) {
    try {
      const glycemia = await database.glycemia.findAll();
      return res.status(200).json(glycemia);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async getOne(req, res) {
    try {
      const { id } = req.params;
      const glycemia = await database.glycemia.findOne({ where: { id: Number(id) } });
      console.log(glycemia);
      return res.status(200).json(glycemia);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async update(req, res) {
    try {
      const { id } = req.params;
      const glycemia = await database.glycemia.update(req.body, { where: { id: Number(id) } });
      return res.status(200).json(glycemia);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const glycemia = await database.glycemia.destroy({ where: { id: Number(id) } });
      return res.status(200).json(glycemia);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async create (req, res) {
    try {
      const glycemia = await database.glycemia.create(req.body);
      return res.status(200).json(glycemia);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = GlycemiaController;
