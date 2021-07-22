"use strict";

const usuarios = [
	{ id: 1, usuario: "teste", senha: "123456" },
	{ id: 2, usuario: "teste2", senha: "123456" }
];

module.exports = {
	/**
	 * Função de aplicação da semente
	 * @param {import("sequelize/types").QueryInterface} queryInterface
	 * @param {import("sequelize/types").Sequelize} Sequelize
	 */
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("usuarios", usuarios);
	},

	/**
	 * Função que desfaz a aplicação da semente
	 * @param {import("sequelize/types").QueryInterface} queryInterface
	 * @param {import("sequelize/types").DataTypes} Sequelize
	 */
	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("usuarios", { id: usuarios.map(u => u.id) });
	}
};
