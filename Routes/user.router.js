//routeren tager sig af request og respons
import express from 'express'
import UserController from '../Controllers/user.controller.js';

//for at kalde en instans af klassen, sætter vi en variabel:
const controller = new UserController();
const router = express.Router();

//VIGTIGT: fordi vi nu kører en omvej sådan at controlleren skal sende tilbage til routeren som så skal sende ud i browseren. så er det vigtigt at awit også kører her
//http request metoder:
router.get('/users', async (req, res) => {
    const result = await controller.listall();
    //resr.send er den der gør at post,man ikke bare står og ruller
    res.json(result);

});

//det der kommer efter kolon navnet på den variabel der defineres og som findes med params. Vi defienerer en regular expression, der sikrer at det er et helt tal, du kan ændre dette, hvis du gerne vil have en string. Når noget kaldes sådan her/: så er det params der er igang.
router.get('/users/:id([0-9]*)', async (req, res) => {
    const result = await controller.getone(req.params.id)
    res.json(result);
});
// HTTP-metode for at hente anmeldelser til en bruger
router.get('/:id/reviews', async (req, res) => {
    const result = await controller.getReviews(req.params.id);
    res.json(result);
  });
//creater
router.post('/users', async (req, res) => {
    try{
    const result = await controller.create(req.body);
    res.send({
        message: 'user created succesfully',
        newId: result.id
    });
}  catch (error) {
    res.send(error.message)
}
});

//opdatere
router.put('/users', async (req, res) => {
    try{
    const result = await controller.update(req.body);
    res.send({
        message: 'user updated succesfully',

    });
}  catch (error) {
    res.send(error.message)
}
});

router.delete('/users/:id([0-9]*)', async(req, res) => {
    try{
        await controller.delete(req.params.id);
        res.send({
            message: 'user deleted succesfully',
        })

    }catch (error){
        res.send(error.message)
    }
});


export {router};