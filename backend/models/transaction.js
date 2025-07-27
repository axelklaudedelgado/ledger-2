const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../utils/db')

class Transaction extends Model {
	static associate(models) {
		Transaction.belongsTo(models.Client, {
			foreignKey: {
				name: 'clientId',
				allowNull: false,
			},
			as: 'client',
			onDelete: 'CASCADE',
		})

		Transaction.belongsToMany(models.Particular, {
			through: models.TransactionParticular,
			foreignKey: {
				name: 'transactionId',
				allowNull: false,
			},
			otherKey: 'particularId',
			as: 'particulars',
			onDelete: 'CASCADE',
		})
	}
}

Transaction.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		joNumber: {
			type: DataTypes.INTEGER,
			allowNull: false,
			unique: true,
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			defaultValue: DataTypes.NOW,
		},
		remarks: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		sequelize,
		underscored: true,
		timestamps: true,
		modelName: 'transaction',
	},
)

module.exports = Transaction
