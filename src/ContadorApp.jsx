import { useState } from "react"


export const ContadorApp = ({ value }) => {
    const handleClick = () => {
        console.log("se hizo click")
        setContador(contador + 1)
    }
    const [contador, setContador] = useState(value)
    return (
        <>
            <h1>ContadorApp</h1>
            <p>{`El contador es ${contador}`}</p>
            <button onClick={handleClick}>Sumar 1</button>
        </>
    )
}
