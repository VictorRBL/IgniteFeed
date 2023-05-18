import { Avatar } from "./Avatar";
import styles from "./sidebar.module.css";
import { PencilLine } from "@phosphor-icons/react";

export function Sidebar() {
  return (
    <aside className={styles.aside}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50"
        alt=""
      />

      <div className={styles.profile}>
        <Avatar hasborder={true} src="http://github.com/victorrbl.png" />
        <strong>Victor Rocha</strong>
        <span>Developer</span>
      </div>

      <footer className={styles.footer}>
        <a href="#">
          <PencilLine size={32} />
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  );
}
