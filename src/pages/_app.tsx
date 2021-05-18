//Arquivo criado para ficar acima de todos os outros, execeto do document, no memento em que a pagina for renderizada
//Ao contrario do arquivo document, que será carregado uma unica vez esse arquivo será recarregado sempre que a pagina carregada

import '../styles/global.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
