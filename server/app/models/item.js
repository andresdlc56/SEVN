module.exports = function(sequelize, Sequelize) {

    var Item = sequelize.define('item', {
        name: {
            type: Sequelize.STRING,
        },
        price: {
            type: Sequelize.INTEGER,
        }
    });
    // Class Method
    Item.associate = function (models) {

    };
        
    return Item;
}