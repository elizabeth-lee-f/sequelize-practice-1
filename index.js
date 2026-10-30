const sequelize = require('./db');
const Car = require('./Car');

async function main() {
    try {
        //проверяем подключение
        await sequelize.authenticate();
        console.log('Подключение к БД успешно установлено.\n');

        //создание таблицы
        await sequelize.sync();
        console.log('Таблицы успешно синхронизированы.\n');

        //добавление данных
        await Car.bulkCreate([
            {
                brand: 'Toyota',
                model: 'Camry',
                year: 2022,
                price: 3500000.50,
                isAvailable: true
            },
            {
                brand: 'Kia',
                model: 'Rio',
                year: 2020,
                price: 1500000.00,
                isAvailable: false
            },
            {
                brand: 'Lada',
                model: 'Vesta',
                year: 2023,
                price: 1800000.00,
                isAvailable: true
            }
        ]);
        console.log('Данные успешно добавлены в таблицу.\n');

        //выборка и вывод
        const cars = await Car.findAll();
        console.log('Список всех автомобилей');
        cars.forEach(car => {
            const status = car.isAvailable ? 'В продаже' : 'Продан';
            console.log(`[${car.id}] ${car.brand} ${car.model} (${car.year}) - ${car.price} руб. | Статус: ${status}`);
        });

    } catch (error) {
        console.error('Ошибка при работе с базой данных:', error);
    } finally {
        //закрытие соединения
        await sequelize.close();
        console.log('\nСоединение с БД закрыто. Процесс завершен.');
    }
}

main();