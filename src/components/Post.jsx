import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="http://github.com/victorrbl.png"
          />
          <div className={styles.avatarInfo}>
            <strong>Victor Rocha</strong>
            <p>Web Developer</p>
          </div>
        </div>
        <time> publicado há 1 hora</time>
      </header>

      <div className={styles.content}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nulla,
          reiciendis aliquid sunt assumenda voluptatibus ex fuga odit mollitia.
          Atque maxime reiciendis alias placeat optio error molestias nam iure
          similique.
        </p>
        <p>
          <a href="#">link pra algum lugar que eu nao sei</a>{" "}
        </p>
        <p>
          <a href="#">#igniteFeed</a>
        </p>
      </div>

      <form className={styles.form}>
        <strong>Deixe aqui seu comentario</strong>
        <textarea placeholder="Digite aqui seu comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
