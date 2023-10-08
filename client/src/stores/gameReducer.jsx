export const initialState = {
    data: [],
    score: 0, 
    current: 0,
    gameRunning: false,
    gamePack: ""
}

export const gameActionTypes = {
    loadData: "LOAD_DATA",
    increaseScore: "INCREASE_SCORE",
    increaseCurrent: "INCREASE_CURRENT",
    initializeGame: "INITIALIZE_GAME",
    loadGamepack: "LOAD_GAMEPACK"
}

export const gameReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_DATA":
            return { ...state, data: action.payload }
        case "INCREASE_SCORE":
            return { ...state, score: state.score + 1 }
        case "INCREASE_CURRENT":
            return { ...state, current: state.current + 1 }
        case "INITIALIZE_GAME":
            return { ...state, gameRunning: true }
        case "LOAD_GAMEPACK":
            return { ...state, gamePack: action.payload}
        default:
            throw Error('Unknown action type: GameReducer');
    }
}