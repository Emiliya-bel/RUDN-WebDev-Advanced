import type { Card } from "../types/card.ts";

let cards: Card[] = [
    {
        id: '1',
        title: 'Card 1',
        isDone: false,
        isUrgent: false
    },
    {
        id: '2',
        title: 'Card 2',
        isDone: false,
        isUrgent: false
    },
    {
        id: '3',
        title: 'Card 3',
        isDone: false,
        isUrgent: false
    },
];

export function getAllCards() {
    return cards;
}

export function createCard(title: string) {
    const newCard: Card = {
        id: Date.now().toString(), // Генерируем уникальный ID
        title: title,
        isDone: false,
        isUrgent: false
    };

    cards.push(newCard);

    return newCard;
}

export function deleteCard(id: string) {
    const lengthBefore = cards.length;
    // Оставляем только те карточки, у которых ID не совпадает с удаляемым
    cards = cards.filter(card => card.id !== id);
    const lengthAfter = cards.length;

    // Если длина изменилась, значит, мы что-то удалили
    return lengthAfter < lengthBefore; 
}