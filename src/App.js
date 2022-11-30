import { Message } from './components/Message';
import './index.css';

export function App() {
  return (
    <div>
      <Message text='Ну как бы "Hello, World!"' />
      <Message text="Как дела?" />
      <Message text="Как настроение?" />
    </div>
  );
};
