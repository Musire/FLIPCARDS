import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SelectPage, GamePage, ResultsPage } from "./pages"
import { MainLayout } from "./layouts"
import { GameProvider } from "./context/GameContext"

export default function App() {
  return (
    <GameProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<SelectPage />} />
            <Route path="game" element={<GamePage />} />
            <Route path="results" element={<ResultsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GameProvider>
  )
}