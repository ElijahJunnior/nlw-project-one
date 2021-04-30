import { useState } from 'react';

export default function ContaClick() {

    const [counter, setCounter] = useState(0);

    function countClick() {
        setCounter(counter + 1);
    }

    function cleanClick() {
        setCounter(0);
    }

    return (
        <>
            <h4> Contador de Cliques </h4>
            <p> Cliques efetuados: {counter} </p>

            <button style={{ 'margin-top': '10px', 'margin-bottom': '15px' }} onClick={countClick}>
                Clicar
            </button>

            <button style={{ 'margin-left': '10px' }} onClick={cleanClick}>
                Zerar
            </button>
        </>
    )

}
