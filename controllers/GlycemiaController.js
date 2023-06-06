const database = require("../models");

class GlycemiaController {
  static async find(req, res) {
    try {
      const glycemia = await database.glycemia.findAll();

      if (!glycemia) {
        return res.status(404).json({ error: "Register not found" });
      }
      res.status(200).json(glycemia);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async findById(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ error: "Missing ID param" });
      }

      const glycemia = await database.glycemia.findOne({
        where: { id: Number(id) },
      });

      if (!glycemia) {
        return res.status(404).json({ error: "Register not found" });
      }

      res.status(200).json(glycemia);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async create(req, res) {
    try {
      const { value } = req.body;

      if (!value) {
        return res.status(400).json({ error: "Missing parameters" });
      }

      if (typeof value === "string") {
        return res.status(400).json({ error: "Value is not a valid integer" });
      }

      await database.glycemia.create({
        ...req.body,
        value: Number(value),
      });

      res.status(200).json({ message: "Register created successfully" });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { value } = req.body;

      if (!id) {
        return res.status(400).json({ error: "Missing ID param" });
      }

      if (!value) {
        return res.status(400).json({ error: "Missing parameters" });
      }

      if (typeof value === "string") {
        return res.status(400).json({ error: "Value is not a valid integer" });
      }

      await database.glycemia.update(
        { ...req.body, value },
        {
          where: { id: Number(id) },
        }
      );
      res.status(200).json({ message: "Register updated successfully" });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ error: "Missing ID param" });
      }

      const glycemia = await database.glycemia.destroy({
        where: { id: Number(id) },
      });

      if (!glycemia) {
        return res.status(404).json({ error: "Register not found" });
      }

      res.status(200).json({ message: "Register deleted successfully" });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = GlycemiaController;
