import jwt from "jsonwebtoken";

import * as Yup from "yup";
import Student from "../models/Student";

class StudentController {
  async index(req, res) {
    const { page = 1, quantity = 20 } = req.params;

    const students = await Student.findAll({
      limit: quantity,
      offset: (page - 1) * quantity
    });
    return res.json(students);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      idade: Yup.number().required(),
      peso: Yup.number().required(),
      altura: Yup.number().required()
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation failed" });
    }

    const studentExists = await Student.findOne({
      where: { email: req.body.email }
    });
    if (studentExists) {
      return res.status(400).json({ error: "User already exists." });
    }
    const { id, name, email, idade, peso, altura } = await Student.create(
      req.body
    );
    return res.json({ id, name, email, idade, peso, altura });
  }
  async update(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string(),
      idade: Yup.number(),
      peso: Yup.number(),
      altura: Yup.number()
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }
    const { id } = req.params;
    const { email, idade, peso, altura } = req.body;

    const student = await Student.findByPk(id);
    if (student.email !== email) {
      const studentExists = await Student.findOne({ where: { email } });
      if (studentExists) {
        return res.status(401).json({ error: "Email already in use" });
      }
    }
    await student.update({ email, idade, peso, altura });
    await student.save();
    return res.json(student);
  }
  async signIn(req, res) {
    const { email } = req.body;

    if (email) {
      const studentExists = await Student.findOne({
        where: { email }
      });
      if (!studentExists) {
        return res.status(400).json({ error: "Student was not found." });
      }
    }
    return res.json(email);
  }
}

export default new StudentController();
