"use strict";

const itensIniciais = [
	{ descricao: "Sabonete", quantidade: 5, id_usuario: 1 },
	{ descricao: "Biscoito", quantidade: 2, id_usuario: 1 },
	{ descricao: "Refrigerante", quantidade: 3, id_usuario: 2 }
];

module.exports = {
	/**
	 * Função de aplicação da semente
	 * @param {import("sequelize/types").QueryInterface} queryInterface
	 * @param {import("sequelize/types").Sequelize} Sequelize
	 */
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("itens", itensIniciais);
	},

	/**
	 * Função que desfaz a aplicação da semente
	 * @param {import("sequelize/types").QueryInterface} queryInterface
	 * @param {import("sequelize/types").DataTypes} Sequelize
	 */
	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("itens", {
			[Sequelize.Op.or]: itensIniciais
		});
	}
};
