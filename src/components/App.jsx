import '../styles/App.css'
import pan from '../img/Pan.png'
import mantequilla from '../img/Mantequilla.png'
import cuchillo from '../img/Cuchillo.png'
import coffeti from 'canvas-confetti'
import { useEffect, useState } from 'react'
import { SelectOption } from './SelectOption'
import { Player } from './Player'
import { Button } from './Button'

const obj = [
    {
        name: "pan",
        url: pan
    },
    {
        name: "mantequilla",
        url: mantequilla
    },
    {
        name: "cuchillo",
        url: cuchillo
    }
]

const optionWinners = [
    ["pan", "cuchillo"],
    ["cuchillo", "mantequilla"],
    ["mantequilla", "pan"],
]

export const App = () =>{
    const [pointPlayer,setPointPlayer] = useState(0)
    const [pointEnemy,setPointEnemy] = useState(0)

    const [player, setPlayer] = useState(['',''])
    const [enemy,setEnemy] = useState(['',''])
    const [response,setResponse] = useState("")

    useEffect(()=>{
        if(pointPlayer === 3){
            setResponse("Has ganado el juego")
            coffeti()
        } else if(pointEnemy === 3){
            setResponse("Has sido vencido")
        }
    },[pointEnemy,pointPlayer])


    const selectPlayer = ({name,url}) =>{
        setPlayer([name,url])
    }

    const selectEnemy = ({maxItems}) =>{
        const randomNumber = Math.floor(Math.random()*maxItems)
        setEnemy([obj[randomNumber].name,obj[randomNumber].url])
        return obj[randomNumber].name 
    }

    const addPointPlayer = () =>{
        setPointPlayer(pointPlayer + 1)
        
        
    }
    const addPointEnemy = () =>{
        setPointEnemy(pointEnemy + 1)
    }


    const startGame = () =>{
        if(!player[0] == false){
            const enemySelected= selectEnemy({maxItems:3}) // esperar enemigo para continuar?
            const result = winner(player[0], enemySelected)
            if(result === 1){
                console.log("Has ganado")
                if(pointPlayer+1 < 4){
                    setResponse("Ganaste")
                    addPointPlayer()
                }
                
            } else if(result === -1){
                if(pointPlayer+1 < 4){
                    setResponse("Perdiste")
                    addPointEnemy()
                }
                
            } else{
                if(pointPlayer+1 < 4 || pointPlayer+1 < 4){
                    setResponse("Empataste")
                    
                }
                
            }
        } else{
            console.log("No se ha seleccionado")
        }
    }

    const restart = () =>{
        setPointEnemy(0)
        setPointPlayer(0)
        setPlayer(['',''])
        setEnemy(['',''])
    }

    const winner = (player1, player2) =>{
        let aux = 0
        if(player1 === player2){
            return aux
        }
        optionWinners.forEach(item =>{
            if(item[0] === player1 && item[1] === player2){ 
                aux = 1
                return
            }
        })
        if(aux) {
            return aux
        } else {
            return -1
        }
    }

    return (
        <>
            <header className='header-title'>
                <h1 className='title'>Pan-Cuchillo-Mantequilla</h1>
            </header>
            <main className="boardGame">
                <SelectOption getPlayer={selectPlayer}></SelectOption>
                <h2>{response}</h2>
                <section className="playerContent">
                    <Player name={"jugador 1"} url={player[1]} type={player[0]} contador={pointPlayer}/>
                    <Player name={"jugador 2"} url={enemy[1]} type={enemy[0]} contador={pointEnemy}/>
                </section>
                <div className='button-content'>
                    <Button text={"Listo"} action={startGame}/>
                    <Button text={"reiniciar"} action={restart}/>
                </div>
            </main>
        </>
    )
} 