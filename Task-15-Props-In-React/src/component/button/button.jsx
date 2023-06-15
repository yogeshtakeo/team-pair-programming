import styles from './button.module.css'

function Button(props) {
    return <button className={styles.submit}>{props.children}</button>
}

export default Button