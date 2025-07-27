const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../utils/db')

class Particular extends Model {
	static associate(models) {
		Particular.belongsToMany(models.Transaction, {
			through: models.TransactionParticular,
			foreignKey: {
				name: 'particularId',
				allowNull: false,
			},
			otherKey: 'transactionId',
			as: 'transactions',
			onDelete: 'CASCADE',
		})
	}
}

Particular.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		type: {
			type: DataTypes.ENUM('Service', 'Payment'),
			allowNull: false,
		},
	},
	{
		sequelize,
		underscored: true,
		modelName: 'particular',
	},
)

module.exports = Particular
