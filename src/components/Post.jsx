import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Post({ publishedAt, author, content }) {
  const [comment, setComment] = useState([]);
  const [newComment, setNewComment] = useState("");

  function handleAddComment() {
    event.preventDefault();
    setComment([...comment, newComment]);
    setNewComment("");
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={author.avatarUrl} />
          <div className={styles.avatarInfo}>
            <strong>{author.name}</strong>
            <p>{author.role}</p>
          </div>
        </div>
        <time title="11 de maio as 20:15" dateTime="2023-05-11 20:05:33">
          {publishedAt.toString()}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((cont) => {
          if (cont.type === "paragraph") return <p>{cont.content}</p>;
          if (cont.type === "link")
            return (
              <p>
                <a href="#">{cont.content}</a>
              </p>
            );
        })}
      </div>
      <form onSubmit={handleAddComment} className={styles.form}>
        <strong>Deixe aqui seu comentario</strong>
        <textarea
          placeholder="Digite aqui seu comentário"
          onChange={(e) => setNewComment(e.target.value)}
          value={newComment}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comment.map((comm) => (
          <Comment content={comm} />
        ))}
      </div>
    </article>
  );
}
