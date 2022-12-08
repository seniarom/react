import styles from './Message.module.css'

export function Message(props) {

  const MessageList = [
    {
      author: [],
      text: []
    }
  ]

  return (
    <>
      <h1 className={styles.msg}> Привет! {props.text}</h1>
    </>
  )
};

