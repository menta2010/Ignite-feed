
import { Header } from './components/Header';
import { Post } from './Post';
import './global.css';
export function App() {

  return (
    <>
    <Header/>
      <Post author="Natalino Estevs"
        content="Oii"
      />
      <Post author="lucas Esteves"
        content="olá"
      />
      <Post author="Natalino Estevs"
        content="tudo bem?"
      />

    </>
  )
}

