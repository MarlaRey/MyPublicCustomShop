//controlleren er dne der håndterer requesten fra browseren, går ud i databasen, henter det ønskede, og sender det tilbage
import Gender from "../Models/gender.model.js";
import User from "../Models/user.model.js";

Gender.hasMany(User);

export default class GenderController {
    //nu skriver vi en metode. når man gør det, beghøæver man ikke en const eller noget 
    
    listall =  async () => {
        const result = await Gender.findAll();
       return result
    }
    getone = async (id) => {
        //find by pk = find by primary key
        const result = await Gender.findByPk(id,{
          include:[
              {
                  model: User
              }
          ]
      });
        return result
    }
    create = async (data) => {
        console.log(data);
        const result = await Gender.create(data);
        return result
    }
    update = async (data) => {
        const result = await Gender.update(data, {where: {id:data.id} });
        return result
    }
    delete = async (id) => {
        const result = await Gender.destroy ({where: {id:id}});
        return result
    }
// Opdateret GenderController
getUsers = async (genderId) => {
    try {
      const result = await Gender.findByPk(genderId, {
        include: [{ model: User }],
      });
      console.log('hallo'); // Tilføj denne linje for at se, hvad der returneres
      if (result) {
        console.log(result.Users); // Tilføj denne linje for at se, hvad der er i Users
        return result.Users;
      } else {
        console.log(`No gender found with id: ${genderId}`);
        return null;
      }
    } catch (error) {
      console.error(error); // Tilføj denne linje for at logge eventuelle fejl
      throw error;
    }
  };
  
}

