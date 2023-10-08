import { createContext, useContext, useReducer } from "react"
import { gameReducer, initialState, gameActionTypes as Types } from "../stores/GameReducer"

const GameContext = createContext()

export const GameProvider = ({ children }) => {
    const [ gameState, gameDispatch ] = useReducer(gameReducer, initialState)

    const handleCorrect = () => {
        gameDispatch({ type: Types.increaseScore })
        gameDispatch({ type: Types.increaseCurrent })
    }

    const handleIncorrect = () => {
        gameDispatch({ type: Types.increaseCurrent })
    }

    const startGame = (payload) => {
        gameDispatch({ type: Types.initializeGame })
        gameDispatch({ type: Types.loadGamepack, payload })
    }

    const gameContext = { gameState, gameDispatch, startGame, handleCorrect, handleIncorrect }

    return <GameContext.Provider value={ gameContext }>{ children }</GameContext.Provider>
}

export const LoadedGameContext = () => {
    return useContext(GameContext)
}