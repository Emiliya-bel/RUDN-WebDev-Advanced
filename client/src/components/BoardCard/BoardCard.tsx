import styles from "./BoardCard.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCard } from "../../api/cards";

type BoardCardProps = {
  id: string;
  title: string;
  isDone: boolean;
};

export function BoardCard({ id, title, isDone }: BoardCardProps) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: () => deleteCard(id),
    onSuccess: () => {
      // После успешного удаления обновляем список карточек на доске
      queryClient.invalidateQueries({ queryKey: ["cards"] });
    },
  });

  const handleDelete = () => {
    if (window.confirm("Вы уверены, что хотите удалить карточку?")) {
      deleteMutation.mutate();
    }
  };

  return (
    <div className={isDone ? styles.isDone : styles.card}>
      <span>{title}</span>
      <button onClick={handleDelete} style={{ marginLeft: "10px", color: "red", border: "none", background: "none", cursor: "pointer" }}>
        ✖
      </button>
    </div>
  );
}