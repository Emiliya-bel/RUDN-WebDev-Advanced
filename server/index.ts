import express from 'express';
import { cardsRouter } from './routes/cards.router.ts';

const app = express();

app.use(express.json()); 

app.use(cardsRouter); 

app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
});

app.listen(3001, () => {
    console.log('Я работаю');
});