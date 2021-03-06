import styles from './Post.module.css'

export function Post(){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/gustavo-noliveira.png"/>
          <div className={styles.authorInfo}>
            <strong>Gustavo Oliveira</strong>
            <span>Web Developer</span>

          </div>
        </div>

        <time dateTime='2022-05-11 08:13:30'>Publicado hรก 1h</time>
      </header>
      
      <div className={styles.content}>
      <p>Fala galeraa ๐</p>

      <p>Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐</p>

      <p>๐{'  '} <a href="">jane.design/doctorcare</a></p>

      <p><a href="">#novoprojeto #nlw #rocketseat</a> </p>
      </div>

      <form className={styles.commentForm} action="">
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentario'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
    </article>
  )
}