import Sequelize from "sequelize";
import DatabaseConfig from "../config/database";
import User from "../app/models/User";
import Student from "../app/models/Student";
import Plan from "../app/models/Plans";
const models = [User, Student, Plan];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(DatabaseConfig);
    models.map(model => model.init(this.connection));
  }
}
export default new Database();
