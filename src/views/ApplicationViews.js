import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"

export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                {/* Routes Here */}
            </Route>
        </Routes>
    </>
}