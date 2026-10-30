const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Car = sequelize.define('Car', {
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'Марка автомобиля'
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'Модель автомобиля'
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'Год выпуска'
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: true,
        comment: 'Цена в рублях'
    },
    isAvailable: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        comment: 'Доступен ли для продажи'
    }
}, {
    tableName: 'cars',
    timestamps: true
});

module.exports = Car;