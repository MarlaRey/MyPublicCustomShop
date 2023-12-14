import product from "../Models/product.model.js"
import Brand from "../Models/brand.model.js";
import Review from "../Models/review.model.js";
import CatProdRel from "../Models/catProdRel.model.js"; 
import Category from "../Models/category.model.js";

product.belongsTo(Brand);

product.hasMany(Review);

//product.belongsToMany(Category, { through: CatProdRel });


export default class ProductController {
    //nu skriver vi en metode. når man gør det, beghøæver man ikke en const eller noget 
    
    listall =  async () => {
        const result = await product.findAll();
       return result
    }
    getone = async (id) => {
        const result = await product.findByPk(id, {
            include: [
                {
                    model: Brand,
                },
                {
                    model: Review,
                }
            ]
        });
        return result;
    }   
    create = async (data) => {
        const result = await product.create(data);
        return result
    }
    update = async (data) => {
        const result = await product.update(data, {where: {id:data.id} });
        return result
    }
    delete = async (id) => {
        const result = await product.destroy ({where: {id:id}});
        return result
    }

}

