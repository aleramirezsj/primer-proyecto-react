import { useState } from "react"

export const AgregarTarea = ({funcionAgregarTarea}) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange= (event)=>{
        setInputValue(event.target.value)
    }
    const handleOnSubmit=(event)=>{
        event.preventDefault()
        funcionAgregarTarea(inputValue)
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <input
                type="text"
                placeholder="Ingresa tarea nueva"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
