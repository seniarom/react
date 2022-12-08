import React, { useState } from 'react';
import { Message } from './components/Message';
import { MessageList } from './components/MessageList';
import { Button } from './components/ui/Button'
import './index.css';



export function App() {
  const [messageList, setMessageList] = useState([]);
  const [arr, setArr] = useState(['']);
  const [value, setValue] = useState('');

  const result = arr.map((element, index) => {
    return <p key={index}>{element}</p>;
  });

  return <div class="">
    {result}
    <input className='text_input' value={value} onChange={event => setValue(event.target.value)} />
    <Button type='submit' className='btn' onClick={event => setArr([...arr, value])}>Input message</Button>
  </div>
}