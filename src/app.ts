import express, { Request, Response } from 'express';
import productRouter from './routers/products.router';

const app = express();

app.use(express.json());
app.use(productRouter);

app.get('/', (_req: Request, res: Response) => res.status(200).send('Aplicação está funcionando'));

export default app;
