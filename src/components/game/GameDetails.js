import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getGameById } from "../../managers/GameManager"
import { getReviewsForGame } from "../../managers/ReviewManager"
import { Review } from "./Review"
import "./Game.css"

export const GameDetails = () => {
    const navigate = useNavigate()
    const { gameId } = useParams()
    const [ currentGame, setCurrentGame ] = useState({})
    const [ gameReviews, setGameReviews ] = useState([])

    useEffect(
        () => {
            getGameById(gameId).then(setCurrentGame)
            getReviewsForGame(gameId).then(setGameReviews)
        },
        []
    )

    return <>
        {
            (currentGame)
            ? <>
                <h2>{currentGame.title} | {currentGame.average_rating}/10</h2>
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

        <button onClick={() => navigate(`/games/${gameId}/edit`)}>Edit Game Details</button>

        <h3>Reviews</h3>
        <button onClick={() => navigate(`/games/${gameId}/review`)}>Write a review</button>

        {
            (gameReviews)
            ? <>
                {
                    gameReviews.map( reviewObj => <Review 
                        reviewObj={reviewObj}    
                    />)
                }
            </>
            : <></>
        }
    </>
}