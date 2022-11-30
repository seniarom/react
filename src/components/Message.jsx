import styles from './Message.module.css'

export function Message(props) {
  return (
    <>
      <h1 className={styles.msg}> Привет! {props.text}</h1>
    </>
  )
};
