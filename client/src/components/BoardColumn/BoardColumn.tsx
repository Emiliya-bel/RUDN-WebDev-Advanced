import type { Card } from "../../types/card";
import { BoardCard } from "../BoardCard/BoardCard";
import styles from "./BoardColumn.module.css";

<<<<<<< HEAD
type Props ={
  cards: Card[];
}

export function BoardColumn(props:Props) {
=======
type Props = {
  cards: Card[];
}

export function BoardColumn(props: Props) {
>>>>>>> upstream/feature/server-cards
  return (
    <section className={styles.column}>
      <h2 className={styles.title}>К выполнению</h2>
      <div className={styles.cards}>
<<<<<<< HEAD
        {props.cards.map((card)=> <BoardCard title={card.title} />)}
        <BoardCard title="Изучить материалы Темы 1" />
        <BoardCard title="Выполнить задания семинара" />
=======
        {props.cards.map(card => 
        <BoardCard 
          title={card.title} 
          isDone={card.isDone} 
          />)}
>>>>>>> upstream/feature/server-cards
      </div>
    </section>
  );
}
