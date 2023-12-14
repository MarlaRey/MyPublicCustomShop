import sequelize from '../Config/db.js'
import {Model, DataTypes} from 'sequelize'
import Products from './product.model.js'

class Category extends Model{}

Category.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    is_active:{
    type:DataTypes.BOOLEAN,
    allowNull:false
    }
    },
    {
    sequelize,
    underscored: true 
    }
)

export default Category