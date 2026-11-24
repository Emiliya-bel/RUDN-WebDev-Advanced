import type { Request, Response } from 'express';
import { getAllCards, createCard, deleteCard } from '../services/cards.service.ts';

export function get(req: Request, res: Response) {
    res.json(getAllCards());
}

export function post(req: Request, res: Response) {
    const title = req.body.title;
    if (!title) {
        res.status(400).json({ error: 'Title is required' });
        return;
    }
    const newCard = createCard(title);
    res.status(201).json(newCard);
}

export function remove(req: Request, res: Response) {
    const id = req.params.id;
    const isDeleted = deleteCard(id);

    if (!isDeleted) {
        res.status(404).json({ error: 'Card not found' });
        return;
    }
    
    res.status(200).json({ message: 'Card deleted' });
}