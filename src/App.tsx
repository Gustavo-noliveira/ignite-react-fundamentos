import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import  './global.css'
import styles from './App.module.css'

//Author: { avatar_url: "", name: "", role: ""}
//publishedAt: Date
//content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/DanielRoberto72.png',
      name: 'Daniel Roberto',
      role: 'Dev Surf'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},      
    ],
    publishedAt: new Date('2022-07-22 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/gustavo-noliveira.png',
      name: 'Pedro Macedo',
      role: 'Backoffice Surf'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},      
    ],
    publishedAt: new Date('2022-07-26 18:00:00')
  },

]

export function App() {

  return (
    <div>

    <Header/>
    
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        {posts.map(post =>{
          return (
            <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
          )
        })}
      </main>
    </div>
    </div>
  )
}




