//controlleren er dne der håndterer requesten fra browseren, går ud i databasen, henter det ønskede, og sender det tilbage
import CatProdRel from "../Models/catProdRel.model.js"

export default class CatProdRelController {
    //nu skriver vi en metode. når man gør det, beghøæver man ikke en const eller noget 
    
    listall =  async () => {
        const result = await CatProdRel.findAll();
       return result
    }
    getone = async (id) => {
        //find by pk = find by primary key
        const result = await CatProdRel.findByPk(id);
        return result
    }
    create = async (data) => {
        console.log(data);
        const result = await CatProdRel.create(data);
        return result
    }
    update = async (data) => {
        const result = await CatProdRel.update(data, {where: {id:data.id} });
        return result
    }
    delete = async (id) => {
        const result = await CatProdRel.destroy ({where: {id:id}});
        return result
    }
      // Tilføj en metode til at oprette forholdet mellem kategori og produkt
  create = async (data) => {
    const result = await CatProdRel.create(data);
    return result;
  };
}

