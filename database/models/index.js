"use strict";

const Sequelize = require("sequelize");

const initItens = require("./itens");
const initUsuarios = require("./usuarios");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

let sequelize;
if (config.use_env_variable)
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
else
	sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {
	sequelize,
	Sequelize,
	Itens: initItens(sequelize, Sequelize.DataTypes),
	Usuarios: initUsuarios(sequelize, Sequelize.DataTypes)
};

db.Itens.associate(db);
db.Usuarios.associate(db);

module.exports = db;
