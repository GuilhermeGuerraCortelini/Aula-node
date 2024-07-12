import { useState } from "react"
// import './formulario.css'

const ListaDeTarefas = (tarefas) =>{
    return <div>
        <ul>
        {tarefas.map((tarefa, indice) => <li key={indice}>{tarefa}<button>X</button></li>)}
        </ul>
    </div>
}

export default ListaDeTarefas