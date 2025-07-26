'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('transactions', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			jo_number: {
				type: Sequelize.INTEGER,
				allowNull: false,
				unique: true,
			},
			date: {
				type: Sequelize.DATEONLY,
				allowNull: false,
				defaultValue: Sequelize.NOW,
			},
			remarks: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			client_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'clients', key: 'id' },
				onDelete: 'CASCADE',
			},
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('transactions')
	},
}

