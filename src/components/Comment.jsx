import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment(){
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/gustavo-noliveira.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego fernandes </strong>
              <time dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom dev, parabens!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}