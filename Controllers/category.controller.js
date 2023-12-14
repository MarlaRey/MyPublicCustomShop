//controlleren er dne der håndterer requesten fra browseren, går ud i databasen, henter det ønskede, og sender det tilbage
// import CatProdRel from "../Models/CatProdRel.model.js";
import Category from "../Models/category.model.js"
import CatProdRel from "../Models/catProdRel.model.js"; // Juster dette baseret på din modelfil
import Product from "../Models/product.model.js";

Category.hasMany(Product);
Product.belongsTo(Category)


export default class CategoryController {
    //nu skriver vi en metode. når man gør det, beghøæver man ikke en const eller noget 
    
    listall =  async () => {
        const result = await Category.findAll();
       return result
    }
    //get one category and the products that belongs to it
    getone = async (id) => {
        //find by pk = find by primary key
        const result = await Category.findByPk(id,{
            include: [
                {
                    model:Product
                }
            ]
        });
        return result
    }
    create = async (data) => {
        console.log(data);
        const result = await Category.create(data);
        return result
    }
    update = async (data) => {
        const result = await Category.update(data, {where: {id:data.id} });
        return result
    }
    delete = async (id) => {
        const result = await Category.destroy ({where: {id:id}});
        return result
    }
}

