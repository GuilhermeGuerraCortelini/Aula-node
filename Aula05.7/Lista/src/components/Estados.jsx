import { useEffect } from "react"
import { useState } from "react"
// import './formulario.css'

const Estados = ({ estado, setEstado }) => {
    const [loading, setLoading] = useState(true)
    const [estados, setEstados] = useState([])

    const handleChange = ({ target }) => setEstado(target.value)

    useEffect(() => {
        const carregaEstados = async() => { // estabelecer a função
            const response = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"); // fetch é nativo
            const data = await response.json(); // js validar
            setEstados(data)
            setLoading(false)
        }
        carregaEstados() // chamar as funções
    }, [])

    return <div>
        <form action="">
            <select disabled={loading} value={estado} onChange={handleChange}>
                <option value="-1">Selecione o Estado</option>
                {estados.map(estado => <option key={estado.sigla} value={estado.sigla}>{estado.nome}</option>)}
            </select>
        </form>
    </div>
}

export default Estados