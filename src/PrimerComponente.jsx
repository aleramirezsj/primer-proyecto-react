import './PrimerComponente.css'

const string = 'esto es un texto'
const number = 123456
const array = ['Curso de React', 'Youtube', 4, 100000]
const boolean = true
const funcion = () => 'string desde funcion'
const objeto = { nombre: 'Curso de Javascript', duracion: 4 }
const fecha = new Date()

export const PrimerComponente = () => {
  return (
    <>
      <h1> Variables en JSX</h1>
      <h4>Variable string</h4><p>{string}</p>
      <h4>Variable number</h4><p>{number}</p>
      <h4>Variable array</h4><p>{array}</p>
      <h4>Variable boolean</h4><p>{boolean}</p>
      <h4>Variable function</h4><p>{funcion()}</p>
      <h4>Variable objeto</h4><p>{JSON.stringify(objeto)}</p>
      <h4>Variable fecha</h4><p>{JSON.stringify(fecha)}</p>
    </>
  )
}
