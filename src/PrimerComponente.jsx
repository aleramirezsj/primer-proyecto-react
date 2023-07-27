import './PrimerComponente.css'
import PropTypes from 'prop-types'

export const PrimerComponente = ({ titulo, subtitulo }) => {
  return (
    <>
      <h1>{titulo}</h1> 
      <h2>{subtitulo}</h2>     
    </>
  )
}

PrimerComponente.PropTypes={
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired
}

PrimerComponente.defaultProps ={
  titulo:"Conociendo las props de React-",
  subtitulo:"para enviar información entre componentes-"
}
