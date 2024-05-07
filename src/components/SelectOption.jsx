import pan from '../img/Pan.png'
import mantequilla from '../img/Mantequilla.png'
import cuchillo from '../img/Cuchillo.png'
import { useEffect, useState } from 'react'

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

export const SelectOption = ({getPlayer}) => {
    const [itemSelect, setItemSelect] = useState(['',''])
    const handleClick = (item) =>{
        setItemSelect([item.name,item.url])
    }

    useEffect(() =>{
        getPlayer({name:itemSelect[0], url: itemSelect[1]})
    },[itemSelect])

    return(
        <div className='selectOption'> {/* Componente */}
            {
                obj.map((item, index) =>{
                    return <img key = {index} src={item.url} alt={item.name} onClick={() =>{handleClick(item)}}/>
                })
            }
        </div>
    )
}