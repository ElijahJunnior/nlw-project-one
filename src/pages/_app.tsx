//Arquivo criado para ficar acima de todos os outros, execeto do document, no memento em que a pagina for renderizada
//Ao contrario do arquivo document, que será carregado uma unica vez esse arquivo será recarregado sempre que a pagina carregada

import '../styles/global.scss';
import styles from '../styles/app.module.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Player from '../components/Player';

import { PlayerContext } from '../contexts/PlayerContext';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <PlayerContext.Provider value={''}>
        <main >
          <Header />
          <Component {...pageProps} />
          {/* <Footer /> */}
        </main>
        <Player />
      </PlayerContext.Provider>
    </div >
  )
}

export default MyApp
