import { useState } from "react"

const NumeroAleatorio = () => {
    const [n , setN] = useState(0) // Huck, desruturação de vetor
    const [backgroundColor, setBackgroundColor] = useState('null')   
    const [controle, setControle] = useState(null)

    const gerarAleatorio = () => {
        const numAleatorio = Math.round(Math.random() * 100)
        setN((numAleatorio < 10 ? '0' : '') + numAleatorio)
    }

    const trocarCorFundo = () => {
        const numAleatorio1 = Math.round(Math.random() * 225)
        const numAleatorio2 = Math.round(Math.random() * 225)
        const numAleatorio3 = Math.round(Math.random() * 225)

        setBackgroundColor(`rgb( ${numAleatorio1},  ${numAleatorio2},  ${numAleatorio3})`)
    }

    const inicio = () => {
        if(controle === null){
        setControle(setInterval(trocarCorFundo, 500))
        }
    }

    const fim = () => {
        clearInterval(controle) 
        setControle(null)
    }

    return(
        <>
            <div style={{padding:'20px',backgroundColor}}>{n}</div>
            <button onClick={gerarAleatorio} type="button">Gerar</button>
            <button onClick={trocarCorFundo} type="button">Trocar</button>
            <button onClick={inicio} type="button">Inicio</button>
            <button onClick={fim} type="button">Fim</button>
        </>
    )
}

export default NumeroAleatorio