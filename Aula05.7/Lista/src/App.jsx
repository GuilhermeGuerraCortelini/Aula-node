import { useState } from "react"
// import FormTarefa from './components/FormTarefa'
// import ListaDeTarefas from './components/ListaDeTarefas'
// import Tarefa from './components/Tarefa'
import Cidades from './components/Cidades'
import Estados from './components/Estados'

function App() { 

  const [estado, setEstado] = useState("-1") 
  const [cidade, setCidade] = useState("-1") 

  const handleEstado = async (uf) => {
    setEstado(uf)
    setCidade("-1")
  }

  return (
    <>
      {/* <FormTarefa />
      <ListaDeTarefas />
      <Tarefa /> */}
      <Estados estado={estado} setEstado={handleEstado}/>
      <Cidades ufEstado={estado.UF} estadoEscolhido={estado} cidade={cidade} setCidade={setCidade}/>
      <span>
        <p>Você Selecionou</p>
        <p>{cidade} - {estado}</p>
      </span>

    </>
  )
}

export default App
