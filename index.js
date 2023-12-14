import express, { urlencoded } from 'express';
import {router as CategoryRouter} from './Routes/category.router.js'
import {router as ProductRouter} from './Routes/product.router.js'
import {router as BrandRouter} from './Routes/brand.router.js'
import {router as CatProdRelRouter} from './Routes/catProdRel.router.js'
import {router as UserRouter} from './Routes/user.router.js'
import {router as GenderRouter} from './Routes/gender.router.js'
import {router as ReviewRouter} from './Routes/review.router.js'
import { router as SyncRouter } from './Routes/sync.router.js'


const port = process.env.port || 4000
const app = express();
//det der ligger inde i body bliver synligt for os ellers kan vi ikke poste og logge
app.use(express.urlencoded({extended:true}))
app.use(CategoryRouter, SyncRouter, ProductRouter, BrandRouter, CatProdRelRouter, UserRouter, GenderRouter, ReviewRouter)


app.listen(port, () => console.log(`server kører på http://localhost:${port}`));