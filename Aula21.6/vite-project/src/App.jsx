
import HelloWorld from './components/HelloWorld'
import NumeroAleatorio from './components/NumeroAleatorio'
import Formulario from './components/Formulario'
import Lista from './components/Lista'

function App() {

  return (
    <>
      <Formulario />
      <HelloWorld name="Gui" idade="17" /> 
      <NumeroAleatorio />
      <Lista />
    </>
  )
}

// const [nome, idade] = ['Gui', 17] // a ordem importa, o nome não importa
const pessoa = {nome: 'Gui', idade: 17} 
const {idade, nome} = pessoa // a ordem não importa, o nome importa]


export default App
