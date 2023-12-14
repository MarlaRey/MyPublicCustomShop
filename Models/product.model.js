import sequelize from '../Config/db.js'
import {Model, DataTypes} from 'sequelize'

class Product extends Model{}

Product.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    image:{
        type:DataTypes.STRING,
        allowNull: false
    },
    description:{
        type:DataTypes.STRING,
        allowNull: false
    },
    price:{
        type:DataTypes.DOUBLE (12,2),
        allowNull: false,
        defaultValue: 0.00
    },
    stock:{
    type:DataTypes.INTEGER,
    allowNull:false,
    defaultValue:1
    },
    brand_id:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    category_id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "category",
            key: "id"
        }
    }
    },
    {
    sequelize,
    underscored: true 
    }
)

export default Product