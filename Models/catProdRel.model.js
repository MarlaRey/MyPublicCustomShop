import sequelize from '../Config/db.js'
import {Model, DataTypes} from 'sequelize'
import Product from './product.model.js';
import Category from './category.model.js';

class CatProdRel extends Model{}

CatProdRel.init({
    unique_key: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    product_id: {
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    category_id: {
        type:DataTypes.INTEGER,
        allowNull: false,
    }
    },
    {
    sequelize,
    underscored: true 
    }
)
CatProdRel.belongsTo(Product);
CatProdRel.belongsTo(Category);

export default CatProdRel