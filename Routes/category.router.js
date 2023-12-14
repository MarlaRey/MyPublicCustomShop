//routeren tager sig af request og respons
import express from 'express'
import CategoryController from '../Controllers/category.controller.js';

//for at kalde en instans af klassen, sætter vi en variabel:
const controller = new CategoryController();
const router = express.Router();

//VIGTIGT: fordi vi nu kører en omvej sådan at controlleren skal sende tilbage til routeren som så skal sende ud i browseren. så er det vigtigt at awit også kører her
//http request metoder:
router.get('/categories', async (req, res) => {
    const result = await controller.listall();
    //resr.send er den der gør at post,man ikke bare står og ruller
    res.json(result);

});

//det der kommer efter kolon navnet på den variabel der defineres og som findes med params. Vi defienerer en regular expression, der sikrer at det er et helt tal, du kan ændre dette, hvis du gerne vil have en string. Når noget kaldes sådan her/: så er det params der er igang.
router.get('/categories/:id([0-9]*)', async (req, res) => {
    const result = await controller.getone(req.params.id)
    res.json(result);
});

//creater
router.post('/categories', async (req, res) => {
    try{
    const result = await controller.create(req.body);
    res.send({
        message: 'category created succesfully',
        newId: result.id
    });
}  catch (error) {
    res.send(error.message)
}
});

//opdatere
router.put('/categories', async (req, res) => {
    try{
    const result = await controller.update(req.body);
    res.send({
        message: 'category updated succesfully',

    });
}  catch (error) {
    res.send(error.message)
}
});
//slette
router.delete('/categories/:id([0-9]*)', async(req, res) => {
    try{
        await controller.delete(req.params.id);
        res.send({
            message: 'category deleted succesfully',
        })

    }catch (error){
        res.send(error.message)
    }
});
// HTTP-metode for at hente produkter til en kategori
router.get('/categories/:id/products', async (req, res) => {
    const result = await controller.getProducts(req.params.id);
    res.json(result);
});


export {router};