import React from 'react'
import './estilo.css'

const style = {
    color:'blue', 
    backgroundColor:'green'
}

const HelloWorld = ({name, idade}) => { // export do lado do const se tiver mais de uma função para exportá-las
    // const {name} = props
    console.log(name)


    return <p style={style} className='hello-world'>Hello, {name} {idade}!</p> // no style chamamos a const que criamos lá em cima para separ o css
}

export default HelloWorld 