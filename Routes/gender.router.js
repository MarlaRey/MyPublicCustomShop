//routeren tager sig af request og respons
import express from 'express'
import GenderController from '../Controllers/gender.controller.js';

//for at kalde en instans af klassen, sætter vi en variabel:
const controller = new GenderController();
const router = express.Router();

//VIGTIGT: fordi vi nu kører en omvej sådan at controlleren skal sende tilbage til routeren som så skal sende ud i browseren. så er det vigtigt at awit også kører her
//http request metoder:
router.get('/genders', async (req, res) => {
    const result = await controller.listall();
    res.json(result);
  });

//det der kommer efter kolon navnet på den variabel der defineres og som findes med params. Vi defienerer en regular expression, der sikrer at det er et helt tal, du kan ændre dette, hvis du gerne vil have en string. Når noget kaldes sådan her/: så er det params der er igang.
router.get('/genders/:id([0-9]*)', async (req, res) => {
    const result = await controller.getone(req.params.id)
    res.json(result);
});

//creater
router.post('/genders', async (req, res) => {
    try{
    const result = await controller.create(req.body);
    res.send({
        message: 'gender created succesfully',
        newId: result.id
    });
}  catch (error) {
    res.send(error.message)
}
});

//opdatere
router.put('/genders', async (req, res) => {
    console.log(req.body);
    try{
    const result = await controller.update(req.body);
    res.send({
        message: 'gender updated succesfully',

    });
}  catch (error) {
    res.send(error.message)
}
});
//slette
router.delete('/genders/:id([0-9]*)', async(req, res) => {
    try{
        await controller.delete(req.params.id);
        res.send({
            message: 'gender deleted succesfully',
        })

    }catch (error){
        res.send(error.message)
    }
});
// Opdateret gender.router
// HTTP-metode for at hente brugere til et køn
router.get('/genders/:id/users', async (req, res) => {
    try {
      const result = await controller.getUsers(req.params.id);
      console.log('halloooooo'); // Tilføj denne linje for at se, hvad der returneres
      res.json(result);
    } catch (error) {
      console.error(error); // Tilføj denne linje for at logge eventuelle fejl
      res.status(500).send('Internal Server Error');
    }
  });
  

export {router};