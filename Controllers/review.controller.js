import Review from "../Models/review.model.js";
import User from "../Models/user.model.js";
import Product from "../Models/product.model.js";

Review.belongsTo(User);

Review.belongsTo(Product);

export default class ReviewController {
    //nu skriver vi en metode. når man gør det, beghøæver man ikke en const eller noget 
    
    listall =  async () => {
        const result = await Review.findAll();
       return result
    }
    getone = async (id) => {
        //find by pk = find by primary key
        const result = await Review.findByPk(id,{
          include: Product
        });
        return result
    }
    create = async (data) => {
        console.log(data);
        const result = await Review.create(data);
        return result
    }
    update = async (data) => {
        const result = await Review.update(data, {where: {id:data.id} });
        return result
    }
    delete = async (id) => {
        const result = await Review.destroy ({where: {id:id}});
        return result
    }
      // Tilføj en metode for at hente brugeren for en anmeldelse
  getUser = async (reviewId) => {
    const result = await Review.findByPk(reviewId, {
      include: "User", // Antager, at forholdet mellem Review og User er defineret
    });
    return result.User;
  };

  // Tilføj en metode for at hente produktet for en anmeldelse
  getProduct = async (reviewId) => {
    const result = await Review.findByPk(reviewId, {
      include: "Product", // Antager, at forholdet mellem Review og Product er defineret
    });
    return result.Product;
  };
    
}

