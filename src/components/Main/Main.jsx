import './Main.css'
import { Button } from '../Button';

export const Main = () => {
  return <main className='Main'>
     <Button className="App__button" onPress={() => alert('Hello')}>Say Hello</Button>
    <Button className="App__button" onPress={() => console.log('Hello')}>Submit</Button>
  </main>
}