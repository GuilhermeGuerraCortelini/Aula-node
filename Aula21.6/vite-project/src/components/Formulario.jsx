import { useState } from "react"
import './formulario.css'

const Formulario = () => {
    const [estouDigitando, setEstouDigitando] = useState("")
    const [controle, setControle] = useState(null)

    const [pessoa, setPessoa] = useState({
        nome: '', email: ''
    })

    const handleChange = ({name, value}) => setPessoa({...pessoa, [name]: value})

    // const [nome, setNome] = useState("")
    // const [email, setEmail] = useState("")

    // const handleChangeNome = evento => {
    //     digitando()
    //     setNome(evento.target.value)
    // }

    // const handleChangeEmail = evento => {
    //     digitando()
    //     setEmail(evento.target.value)
    // }

    const digitando = () => {
        setEstouDigitando(true)
        clearInterval(controle)
        setControle(setTimeout(() => setEstouDigitando(false), 2000))
    }

    const handleSubmit = (evento) => {
       evento.preventDefault()
       console.log(pessoa)
    }

    // onSubmit sempre que o button submit for ativado ele informa pro form
    return <form onSubmit={handleSubmit}> 
        <div style={{display: estouDigitando ? 'block' : 'none'}}className="digitando">Estou Digitando...</div>
        {/* onChange toda vez que muda o input ele percebe */}
        <input value={pessoa.nome} onChange={({target}) => handleChange(target)} type="text" name="nome" placeholder="Nome"/><br/>
        <input value={pessoa.email} onChange={({target}) => handleChange(target)} type="email" name="email" placeholder="Email"/><br/>
        <button type="submit">Enviar</button>
    </form>
}

export default Formulario