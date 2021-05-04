//Arquivo criado para ficar acima de todos os outros no memento em que a pagina for renderizada
//Ao contrario do arquivo app, que será carregado toda vez que a pagina for iniciada esse arquivo só será carregado uma vez

import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    {/* Aqui os itens de header que deve ser aplicados em todas as paginas mas executados uma unica vez */}
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Lexend:wght@500;600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }

}