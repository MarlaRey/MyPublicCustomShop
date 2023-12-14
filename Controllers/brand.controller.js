//controlleren er dne der håndterer requesten fra browseren, går ud i databasen, henter det ønskede, og sender det tilbage
import Brand from "../Models/brand.model.js"
import Product from "../Models/product.model.js";

Brand.hasMany(Product);
export default class BrandController {
    //nu skriver vi en metode. når man gør det, beghøæver man ikke en const eller noget 
    
    listall =  async () => {
        const result = await Brand.findAll();
       return result
    }
    //hent ét brand og se hvilke produkter der hører under:
    getone = async (id) => {
        //find by pk = find by primary key
        const result = await Brand.findByPk(id,{
            include:[
                {
                    model: Product
                }
            ]
        });
        return result
    }
    create = async (data) => {
        console.log(data);
        const result = await Brand.create(data);
        return result
    }
    update = async (data) => {
        const result = await Brand.update(data, {where: {id:data.id} });
        return result
    }
    delete = async (id) => {
        const result = await Brand.destroy ({where: {id:id}});
        return result
    }
}

