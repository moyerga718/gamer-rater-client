import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllGames } from "../../managers/GameManager"

export const GameList = () => {
    const [ games, setGames ] = useState([])

    useEffect(
        () => {
            getAllGames().then(setGames)
        },
        []
    )

    return <>
    
    <h1>Game List</h1>

    {
        (games)
        ? <>
        {
            games.map( game => {
                return <Link to={`/games/${game.id}`}><h3>{game.title}</h3></Link>
            })
        }
        </>
        : <></>
    }

    </>
}