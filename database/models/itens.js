const { Model } = require("sequelize");

class Itens extends Model {
	/**
	 * Cria as associações entre as tabelas do banco de dados
	 * @param {import("./index")} models Modelos das tabelas do banco de dados
	 */
	static associate (models) {
		models.Itens.belongsTo(models.Usuarios, { as: "usuario", foreignKey: "idUsuario" });
	}
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
			allowNull: false
		},
		estaNoCarrinho: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		},
		idUsuario: {
			type: DataTypes.INTEGER,
			allowNull: false
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
