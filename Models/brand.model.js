import sequelize from '../Config/db.js'
import {Model, DataTypes} from 'sequelize'

class Brand extends Model{}

Brand.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type:DataTypes.STRING,
        allowNull: false,
    }
    },
    {
    sequelize,
    underscored: true 
    }
)

export default Brand