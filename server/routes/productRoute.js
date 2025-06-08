import express from 'express';
import{ upload} from '../configs/multer.js';
import authSeller from '../middlewares/authSeller.js';
import { addProduct, changeStock, productByID, productList } from '../controllers/productControler.js';


const productRouter = express.Router();

productRouter.post('/add',upload.array(["images"]),authSeller, addProduct);
productRouter.get('/list',productList)
productRouter.get('/list',productByID)
productRouter.post('/stock' , authSeller, changeStock)

export default productRouter;


