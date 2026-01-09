import express, { Request, Response } from 'express';
import productRouter from './products/routes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.get('/health', (_req: Request, res: Response) => {
  res.send('OK');
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
