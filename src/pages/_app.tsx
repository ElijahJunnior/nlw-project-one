//Arquivo criado para ficar acima de todos os outros, execeto do document, no memento em que a pagina for renderizada
//Ao contrario do arquivo document, que será carregado uma unica vez esse arquivo será recarregado sempre que a pagina carregada

import { useState } from 'react';
import styles from '../styles/app.module.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Player from '../components/Player';
import '../styles/global.scss';

import { PlayerContext } from '../contexts/PlayerContext';

function MyApp({ Component, pageProps }) {

  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
  }

  return (
    <div className={styles.wrapper}>
      <PlayerContext.Provider value={{ episodeList, currentEpisodeIndex, play }} >
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
