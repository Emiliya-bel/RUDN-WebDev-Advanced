import express from 'express';
import { createCard, deleteCard, getAllCards } from './services/cards.service.ts';

const app = express();
app.use(express.json()); 

app.get('/cards', (req, res) => {
    res.json(getAllCards()); 
});

app.post('/cards', (req, res) => {
    const title = req.body.title; 
    const newCard = createCard(title);
    res.status(201).json(newCard);
});

app.delete('/cards/:id', (req, res) => {
    const id = req.params.id;
    const isDeleted = deleteCard(id);

    if (!isDeleted) {
        res.sendStatus(404);
        return;
    }
    res.sendStatus(200);
});

app.listen(3001);