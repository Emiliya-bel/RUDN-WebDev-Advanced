import styles from "./BoardCard.module.css";

type BoardCardProps = {
  title: string;
<<<<<<< HEAD
  isDone?: boolean;
=======
  isDone: boolean;
>>>>>>> upstream/feature/server-cards
};

export function BoardCard({ title, isDone }: BoardCardProps) {
  return <div 
<<<<<<< HEAD
  className={
    isDone ? styles.isDone : styles.card
  }
  >
    {title}
    </div>;
=======
  className={isDone ? 
    styles.isDone : 
    styles.card
  }>
    {title}
  </div>;
>>>>>>> upstream/feature/server-cards
}
