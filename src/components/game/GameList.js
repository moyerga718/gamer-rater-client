import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getAllGames } from "../../managers/GameManager"
import "./Game.css"

export const GameList = () => {
    const navigate = useNavigate()
    const [ games, setGames ] = useState([])

    useEffect(
        () => {
            getAllGames().then(setGames)
        },
        []
    )

    return <>
    
    <h1>Game List</h1>

    <button onClick={() => 
    {navigate("/games/create")}
    }>
        Register New Game
    </button>

    {
        (games)
        ? <>
        {
            games.map( game => {
                return <div className = "game-link">
                    <Link to={`/games/${game.id}`}><h3>{game.title}</h3></Link>
                    <h3>|   {game.average_rating}/10</h3>
                </div>
            })
        }
        </>
        : <></>
    }

    </>
}