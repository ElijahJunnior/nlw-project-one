import styles from './styles.module.scss';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

export default function Header() {

    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    })

    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" />
            <div> </div>
            <p> O melhor para você ouvir, Sempre! </p>
            <span> {currentDate} </span>
        </header >
    )

}
