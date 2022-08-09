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
                <h3>About</h3>
                <p>{currentGame.description}</p>
                <h3>Details</h3>
                <p>Released: {currentGame.year_released}</p>
                <p>Designer: {currentGame.designer}</p>
                <p>Number of Players: {currentGame.number_of_players}</p>
                <p>Duration: ~{currentGame.duration} minutes</p>
                <p>Recommended Age: {currentGame.age_recommendation} and up</p>
            </>
            : <></>
        }
        {
            (currentGame.categories)
            ? <>
                <h3>Categories:</h3>
                {
                    currentGame.categories.map(category => {
                        return <p>{category.name}</p>
                    }

                    )
                }
            </>
            : <>
            
            </>
        }
        
    </>
}