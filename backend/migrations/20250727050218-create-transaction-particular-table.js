'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('transaction_particulars', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			transaction_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'transactions',
					key: 'id',
				},
				onDelete: 'CASCADE',
			},
			particular_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'particulars',
					key: 'id',
				},
				onDelete: 'CASCADE',
			},
			units: {
				type: Sequelize.INTEGER,
			},
			unit_price: {
				type: Sequelize.DECIMAL,
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		})
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('transaction_particulars')
	},
}
