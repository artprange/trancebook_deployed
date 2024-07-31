import { Post, PostType } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './global.css'
import styles from './App.module.css'

//author: { avatar_url: "", name: "", role:""}
//publishedAt: Date
//content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      id: 1,
      avatarUrl:
        'https://www.folhavitoria.com.br/entretenimento/blogs/na-balada/wp-content/uploads/2024/01/Astrix-800x500.jpg',
      name: 'Astrix',
      role: 'Fullon DJ',
    },
    content: [
      { type: 'paragraph', content: 'Fala Galeraaa!' },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um set!',
      },
      {
        type: 'paragraph',
        content:
          ' Tentei reviver as minhas origens! Dê o play e sinta a energia emanar! ',
      },
      {
        type: 'link',
        content: 'https://www.youtube.com/watch?v=lIuEuJvKos4',
      },
    ],
    publishedAt: new Date('2023-10-12 15:00:00'),
  },
  {
    id: 2,
    author: {
      id: 2,
      avatarUrl:
        'https://i.scdn.co/image/ab6761610000e5eb8f35c6b2a9280144fcd28a7f',
      name: 'Neelix',
      role: 'Prog Fullon DJ',
    },
    content: [
      { type: 'paragraph', content: 'Como vocês estão crianças? ' },
      {
        type: 'paragraph',
        content:
          'Vídeo fresquinho no canal! Saiu o Editado do UNIVERSO PARALELO',
      },
      {
        type: 'paragraph',
        content:
          ' Eu amei tocar esse ano e mal posso esperar pelo ano que vem!',
      },
      {
        type: 'link',
        content: 'https://www.youtube.com/watch?v=fONegAhyBRU',
      },
    ],
    publishedAt: new Date('2023-10-13 15:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />{' '}
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
        </main>
      </div>
    </div>
  )
}
