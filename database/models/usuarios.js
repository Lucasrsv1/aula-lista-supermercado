const { Model } = require("sequelize");

class Usuarios extends Model {
	/**
	 * Cria as associações entre as tabelas do banco de dados
	 * @param {import("./index")} models Modelos das tabelas do banco de dados
	 */
	static associate (models) {
		models.Usuarios.hasMany(models.Itens, { as: "itens", foreignKey: "idUsuario" });
	}
}

/**
 * Cria o modelo da tabela usuarios
 * @param {import("sequelize/types").Sequelize} sequelize
 * @param {import("sequelize/types").DataTypes} DataTypes
 */
function initUsuarios (sequelize, DataTypes) {
	Usuarios.init({
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
		usuario: {
			type: DataTypes.STRING(128),
			allowNull: false
		},
		senha: {
			type: DataTypes.STRING(256),
			allowNull: false
		}
	}, {
		sequelize,
		paranoid: true,
		timestamps: true,
		underscored: true,
		modelName: "Usuarios",
		tableName: "usuarios"
	});

	return Usuarios;
}

module.exports = initUsuarios;
