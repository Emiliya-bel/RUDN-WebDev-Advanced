# Задачи по реализации KAN-2: Удаление карточки

- [ ] Добавить функцию `deleteCard` в `client/src/api/cards.ts` (отправка DELETE-запроса).
- [ ] В `client/src/components/BoardCard/BoardCard.tsx` добавить кнопку удаления (иконку).
- [ ] В `BoardCard.tsx` создать `useMutation` для вызова `deleteCard`.
- [ ] Добавить обработчик клика на кнопку: вызов `window.confirm` и, при подтверждении, вызов мутации.
- [ ] В `onSuccess` мутации добавить `queryClient.invalidateQueries({ queryKey: ['cards'] })`.
- [ ] Проверить работу: добавить карточку, удалить её, обновить страницу (F5) и убедиться, что она не вернулась.