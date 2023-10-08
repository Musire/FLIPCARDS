import { Navigate } from "react-router-dom"
import { CardSelector } from "../components/selectpage"
import { LoadedGameContext, gameActionTypes as Types } from "./"

const SelectPage = () => {
    const { gameState, gameDispatch, startGame } = LoadedGameContext()
    const isGameRunning = gameState?.gameRunning

    return ( 
        <>  
            {
                isGameRunning ? <Navigate to="/game" /> : 
                <section className="w-full h-full centered grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-4">
                    <CardSelector gamePack="teeth" handleClick={startGame} />
                    <CardSelector gamePack="lips" handleClick={startGame} />
                    <CardSelector gamePack="throat" handleClick={startGame} />
                    <CardSelector gamePack="tongue" handleClick={startGame} />
                </section>
            }
        </>
     );
}
 
export default SelectPage;