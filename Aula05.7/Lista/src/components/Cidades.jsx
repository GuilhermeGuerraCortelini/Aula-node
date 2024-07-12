import { useState } from "react"
import { useEffect } from "react"
// import './formulario.css'

const Cidades = ({estadoEscolhido, cidade, setCidade }) => {

    const [cidades, setCidades] = useState([])
    const handleChange = ({ target }) => setCidade(target.value)

    const carregaCidades = ({target}) => setCidades(target.value)

    useEffect(() => {
        const carregaCidades = async() => { // estabelecer a função
            const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`); // fetch é nativo
            const data = await response.json(); // js validar
            setCidades(data)
        }
        carregaCidades() // chamar as funções
    }, [UF])

    return <div>
        <form disabled={estadoEscolhido === ""}>
            <select value={cidade} onChange={({target}) => setCidade(target.value)}>
                <option value="-1">Selecione a Cidade</option>
                
                {cidades.map(cidade => <option key={cidade.UF} value={cidade.nome}>{cidade.nome}</option>)}
            </select>
        </form>
    </div>
}




export default Cidades