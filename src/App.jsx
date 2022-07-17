import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import  './global.css'
import styles from './App.module.css'
export function App() {

  return (
    <div>

    <Header/>
    
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        <Post 
        author='Diego Fernandes' 
        content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo quisquam cupiditate temporibus sequi minus modi libero nulla. Illum veritatis, saepe voluptatem quae odit corporis temporibus ex, itaque facere dolorum eos.'
        />
        <Post 
          author='Gabriel Gustavo' 
          content='New post'
        />
      </main>
    </div>
    </div>
  )
}




