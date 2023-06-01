import express, { Request, Response } from 'express';
import productRouter from './routers/products.router';
import orderRouter from './routers/orders.router';
import userRouter from './routers/user.router';

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(productRouter);
app.use(orderRouter);

app.get('/', (_req: Request, res: Response) => res.status(200).send('Aplicação está funcionando'));

export default app;
