import '../styles/Player.css'

export const Player = ({name,url, type, contador}) =>{

    return(
        <div className='player'>
                <div className='player-count'>
                    {contador}
                </div>
                <div className="imgContainer">
                    <img src={url} alt={type} />
                </div>
                <span className='player-name'>{name}</span>
        </div>
    )
}