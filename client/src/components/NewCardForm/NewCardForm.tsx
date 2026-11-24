import { useState } from "react";
import styles from "./NewCardForm.module.css";
import { createCard } from "../../api/cards";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function NewCardForm() {
  const [inputText, setInputText] = useState('');
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createCard,
    onSuccess: () => {
      setInputText('');
      queryClient.invalidateQueries({ queryKey: ["cards"] });
    },
  });

  const handleSubmit = () => {
    if (inputText.trim() !== '') {
      mutation.mutate(inputText);
    }
  };

  return (
    <div className={styles.form}>
      <input
        className={styles.input}
        placeholder="Название карточки"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <button className={styles.button} type="button" onClick={handleSubmit}>
        Добавить
      </button>
    </div>
  );
}