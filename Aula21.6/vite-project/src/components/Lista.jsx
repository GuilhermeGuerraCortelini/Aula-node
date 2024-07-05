import { useState } from 'react'
import './lista.css'

const Lista = () => {
    const [frutas, setFrutas] = useState([
        'Maça', 'Banana', 'Laranja'
    ])
    const [fruta, setFruta] = useState("")


    const addFruta = (evento) => {
        evento.preventDefault()
        // descobrir em qual posição quero adicionar o elemento console.log(frutas.findIndex(f => f> fruta)) 
        const idx = frutas.findIndex(f => f.toLocaleLowerCase() > fruta.toLocaleLowerCase())

        let f = [...frutas] // ... cópia 
        f.splice(idx < 0 ? f.length : idx, 0, fruta)
        setFrutas(f) // adicionar a fruta no vetor frutas

        setFruta("")
    }

    const removerFruta = (fruta) => {
        setFrutas(frutas.filter(f => f !== fruta))
    }

    return <div>
        <ul>
            {/* map() passa em todas as posições do vetor e modifica seus valores | precisamos atribuir uma chave para li pq se repetir a fruta da ruim*/}
            {frutas.map((fruta, indice) => <li key={indice}>{fruta}<button onClick={() => removerFruta(fruta)}>X</button></li>)}
        </ul>
        
        <form onSubmit={addFruta}>
            <input value={fruta}  onChange = {(evento) => setFruta(evento.target.value)} type="text" name="fruta" placeholder="Fruta"/><br/>
            <button disabled={fruta === ""} type="submit">Adicionar</button>
        </form>
    </div>
}

export default Lista