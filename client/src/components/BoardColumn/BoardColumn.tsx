import type { Card } from "../../types/card";
import { BoardCard } from "../BoardCard/BoardCard";
import styles from "./BoardColumn.module.css";
import { useBoardFiltersStore } from "../../store/useBoardFiltersStore";

type Props = {
  cards: Card[];
};

export function BoardColumn(props: Props) {
  const hideDone = useBoardFiltersStore((state) => state.hideDone);

  return (
    <section className={styles.column}>
      <h2 className={styles.title}>К выполнению</h2>
      <div className={styles.cards}>
        {props.cards
          .filter((card) => !hideDone || !card.isDone)
          .map((card) => (
            <BoardCard
              key={card.id}
              title={card.title}
              isDone={card.isDone}
            />
          ))}
      </div>
    </section>
  );
}