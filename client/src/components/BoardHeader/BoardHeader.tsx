import styles from "./BoardHeader.module.css";
import { useBoardFiltersStore } from "../../store/useBoardFiltersStore";

export function BoardHeader() {
  const hideDone = useBoardFiltersStore((state) => state.hideDone);
  const toggleHideDone = useBoardFiltersStore((state) => state.toggleHideDone);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Канбан-доска</h1>
      <div className={styles.controls}>
        {}
        <button onClick={toggleHideDone} className={styles.button}>
          {hideDone ? "Показать все" : "Скрыть выполненные"}
        </button>
      </div>
    </header>
  );
}