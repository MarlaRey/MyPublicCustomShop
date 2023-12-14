import sequelize from '../Config/db.js'
import {Model, DataTypes} from 'sequelize'

class Review extends Model{}

Review.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    num_stars:{
        type:DataTypes.STRING,
        allowNull: false
    },
    comment:{
        type:DataTypes.STRING,
        allowNull: false
    },    
    product_id:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    users_id:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    date:{
        type:DataTypes.INTEGER,
        allowNull: false,
    }
    },
    {
    sequelize,
    underscored: true 
    }
)

export default Review