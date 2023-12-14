import User from "../Models/user.model.js";
import Review from "../Models/review.model.js";
import Gender from "../Models/gender.model.js";

User.hasMany(Review);
User.belongsTo(Gender);

export default class UserController {
    //nu skriver vi en metode. når man gør det, beghøæver man ikke en const eller noget 
    
    listall =  async () => {
        const result = await User.findAll();
       return result
    }
    getone = async (id) => {
        //find by pk = find by primary key
        const result = await User.findByPk(id);
        return result
    }
    create = async (data) => {
        console.log(data);
        const result = await User.create(data);
        return result
    }
    update = async (data) => {
        const result = await User.update(data, {where: {id:data.id} });
        return result
    }
    delete = async (id) => {
        const result = await User.destroy ({where: {id:id}});
        return result
    }
      // Tilføj en metode for at hente anmeldelser for en bruger
  getReviews = async (userId) => {
    const result = await Review.findAll({ where: { userId } });
    return result;
  };
}

