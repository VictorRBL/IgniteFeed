import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { Trash, ThumbsUp } from "@phosphor-icons/react";

export function Comment(props) {
  function handleDeleteComment() {
    props.onDeleteComment(props.content);
  }
  return (
    <div className={styles.comment}>
      <Avatar src="http://github.com/maykbrito.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.author}>
              <strong>Victor Rocha</strong>
              <time title="11 de maio as 20:15" dateTime="2023-05-11 20:05:33">
                publicado há 1 hora
              </time>
            </div>
            <button title="Apagar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{props.content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={24} /> Aplaudir <span>32</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
