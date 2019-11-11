import jwt from "jsonwebtoken";

import * as Yup from "yup";
import Student from "../models/Student";

class StudentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      idade: Yup.date().required(),
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
}

export default new StudentController();
