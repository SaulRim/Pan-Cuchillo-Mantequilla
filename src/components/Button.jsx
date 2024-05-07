import '../styles/Buttom.css'

export const Button = ({text,action}) =>{
    const metodo = () =>{
        action()
    }
    return(
        <button className = "botonGame" onClick={metodo}>{text}</button>
    )
}