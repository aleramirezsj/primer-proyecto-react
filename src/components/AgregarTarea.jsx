import { useState } from "react"

export const AgregarTarea = () => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange= (event)=>{
        setInputValue(event.target.value)
    }
    const handleOnSubmit=(event)=>{
        event.preventDefault()
        console.log(inputValue)
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
