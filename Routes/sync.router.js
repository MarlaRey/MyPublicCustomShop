import express from 'express'
import sequelize from '../Config/db.js';
//det virker mærkeligt med disse to umiddelbart inaktive imports, men det skal gøres sådan:
import Category from '../Models/category.model.js';
import Product from '../Models/product.model.js';
import CatProdRel from '../Models/catProdRel.model.js'
import User from '../Models/user.model.js'
import Gender from '../Models/gender.model.js'
import Review from '../Models/review.model.js'

const router = express.Router();



//synkroniser sequelize models
router.get('/sync', (req, res) => {
    sequelize.sync()
    res.json({
        message:'Syncronized models'
    });
    
});



export {router};