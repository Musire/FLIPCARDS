const CardSelector = ({ handleClick, gamePack }) => {
    return ( 
        <button onClick={() => handleClick(gamePack)} className="w-full h-full centered bg-blue-500">{gamePack}</button>
     );
}
 
export default CardSelector;