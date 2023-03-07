import styles from "./Header.module.css";

import todoLogo from "../assets/todo-logo.svg";
import plusIcon from "../assets/plus-icon.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Todo Logo" />

      <form className={styles.newTask}>
        <input placeholder="Adicione uma nova tarefa" />
        <button>
          Criar
          <img src={plusIcon} />
        </button>
      </form>
    </header>
  );
}
