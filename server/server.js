import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './configs/db.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config';
import sellerRouter from './routes/sellerRoute.js';
import connectCloudinary from './configs/cloudinary.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import addressRouter from './routes/addressRoute.js';
import orderRouter from './routes/orderRoute.js';
import { stripeWebhook } from './controllers/orderController.js';

dotenv.config();

await connectDB();
await connectCloudinary()

app.post('/stripe', express.raw({type:'application/json'}), stripeWebhook)

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));

// Test route_1
app.get('/', (req, res) => {
  res.send(' API is working!');
});

app.use('/api/user' ,userRouter )
app.use('/api/seller',sellerRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/address',addressRouter)
app.use('/api/order',orderRouter)






// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
