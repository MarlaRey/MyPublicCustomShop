import sequelize from '../Config/db.js'
import {Model, DataTypes} from 'sequelize'


class User extends Model{}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    firstname:{
        type:DataTypes.STRING,
        allowNull: false
    },
    lastname:{
        type:DataTypes.STRING,
        allowNull: false
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false
    },
    password:{
        type:DataTypes.STRING,
        allowNull: false
    },
    gender_id:{
        type:DataTypes.INTEGER,
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

export default User

