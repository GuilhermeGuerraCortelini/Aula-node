import { useState } from 'react'
import './lista.css'

const Lista = () => {
    const [frutas, setFrutas] = useState([
        'Maça', 'Banana', 'Laranja'
    ])
    const [fruta, setFruta] = useState("")


    const addFruta = (evento) => {
        evento.preventDefault()
        setFrutas([...frutas, fruta]) // adicionar a fruta no vetor frutas
        setFruta("")
    }
    
    return <div>
        <ul>
            {/* map() passa em todas as posições do vetor e modifica seus valores | precisamos atribuir uma chave para li pq se repetir a fruta da ruim*/}
            {frutas.map((fruta, indice) => <li key={indice}>{fruta}</li>)}
        </ul>
        
        <form onSubmit={addFruta}>
            <input value={fruta}  onChange = {(evento) => setFruta(evento.target.value)} type="text" name="fruta" placeholder="Fruta"/><br/>
            <button disabled={fruta === ""} type="submit">Adicionar</button>
        </form>
    </div>
}

export default Lista