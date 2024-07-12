// import { useState } from "react"
// // import './formulario.css'


// const FormTarefa = () =>{
//     const [tarefa, setTarefa ] = useState('')
//     const [tarefas, setTarefas] = useState({
//         tarefa: ''
//     })

//     const handleChange = ({tarefa, value}) => {
//         setTarefa({...tarefa, [tarefa]: value})
//     }

//     const handleSubmit = (evento) => {
//         evento.preventDefault()
//         console.log(tarefa)
//      }

//     return <div>
//     <form onSubmit={handleSubmit}>
//         <input value={tarefas.value} onChange={({target}) => handleChange(target)}  type="text" name="tarefa" placeholder="Tarefa"/>
//         <button type="submit">Adicioanar</button>
//     </form>
//     <ul>
//         {/* {tarefas.map((tarefas, indice) => <li key={indice}>{tarefas}<button>X</button></li>)} */}
//     </ul>
// </div>
// }

// export default FormTarefa
