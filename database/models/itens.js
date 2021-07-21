const { Model } = require("sequelize");

class Itens extends Model {
	static associate (models) { }
}

/**
 * Cria o modelo da tabela itens
 * @param {import("sequelize/types").Sequelize} sequelize
 * @param {import("sequelize/types").DataTypes} DataTypes
 */
function initItens (sequelize, DataTypes) {
	Itens.init({
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
		descricao: {
			type: DataTypes.STRING,
			allowNull: false
		},
		quantidade: {
			type: DataTypes.FLOAT,
			allowNull: null
		},
		estaNoCarrinho: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	}, {
		sequelize,
		paranoid: true,
		timestamps: true,
		underscored: true,
		modelName: "Itens",
		tableName: "itens"
	});

	return Itens;
}

module.exports = initItens;
