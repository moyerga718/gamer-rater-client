import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"
import { GameList } from "../components/game/GameList"
import { GameDetails } from "../components/game/GameDetails"

export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/games" element={<GameList />} />
                <Route path="/games/:gameId" element={<GameDetails />} />
            </Route>
        </Routes>
    </>
}