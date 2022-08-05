import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getGameById } from "../../managers/GameManager"

export const GameDetails = () => {
    const { gameId } = useParams()
    const [ currentGame, setCurrentGame ] = useState({})

    useEffect(
        () => {
            getGameById(gameId).then(setCurrentGame)
        },
        []
    )

    return <>
        {
            (currentGame)
            ? <>
                <h2>{currentGame.title}</h2>
                
            </>
            : <></>
        }
        
    </>
}