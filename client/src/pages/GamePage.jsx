import { LoadedGameContext, gameActionTypes as Types } from "./"
import { Card } from "../components/gamepage"

const GamePage = () => {
    const { gameState, gameDispatch } = LoadedGameContext()
    console.log(gameState)

    return ( 
        <div className="w-full h-full">
            <Card />
        </div>
     );
}
 
export default GamePage;