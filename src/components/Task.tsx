import styles from "./Task.module.css";
import { Trash } from "phosphor-react";
import { TaskProps } from "../App";

interface Props {
  task: TaskProps;
  onDelete: (id: string) => void;
}

export function Task({ task, onDelete }: Props) {
  return (
    <div className={styles.task}>
      <button className={styles.checkbox}>
        <div></div>
      </button>

      <p>{task.title}</p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <Trash size={20} />
      </button>
    </div>
  );
}
