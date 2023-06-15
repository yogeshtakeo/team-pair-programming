import styles from './input.module.css'

function Input(props) {
    return <input value={props.children} className={styles.submit}></input>
}

export default Input