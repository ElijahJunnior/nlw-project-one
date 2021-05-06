import styles from './styles.module.scss';

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" />
            <div> </div>
            <p> O melhor para você ouvir, Sempre! </p>
            <span> Qui, 8 Abril </span>
        </header >
    )
}
