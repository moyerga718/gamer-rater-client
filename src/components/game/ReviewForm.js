import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState} from "react"
import { getGameById } from "../../managers/GameManager"
import { createReview } from "../../managers/ReviewManager"


export const ReviewForm = () => {
    const { gameId } = useParams()
    const navigate = useNavigate()
    const [currentGame, setCurrentGame ] = useState({})
    const [reviewObj, setReviewObj] = useState({
        review: "",
        rating: 1
    })


    useEffect(
        () => {
            getGameById(gameId).then(setCurrentGame)
        },[]
    )

    return <>
        <h2>Review {currentGame.title}</h2>

        <form className="gameForm">
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="rating">Rating (1-5): </label>
                    <input type="number" name="rating" required autoFocus className="form-control"
                        value={reviewObj.rating}
                        onChange={(changeEvent) => {
                            if (changeEvent.target.value < 6 && changeEvent.target.value > 0) {
                                const gameCopy = {...reviewObj}
                                gameCopy.rating = changeEvent.target.value
                                setReviewObj(gameCopy)
                            } else {
                                window.alert("GOTTA BE BETWEEN 1 AND 5 OK??")
                            }
                        }}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="review">Review </label>
                    <input type="textarea" name="review" required autoFocus className="form-control"
                        value={reviewObj.review}
                        onChange={(changeEvent) => {
                            const gameCopy = {...reviewObj}
                            gameCopy.review = changeEvent.target.value
                            setReviewObj(gameCopy)
                        }}
                    />
                </div>
            </fieldset>

            {/* TODO: create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const review = {
                        review: reviewObj.review,
                        rating: reviewObj.rating,
                        game_id: parseInt(gameId)
                        
                    }

                    // Send POST request to your API
                    createReview(review)
                        .then(() => navigate(`/games/${gameId}`))
                }}
                className="btn btn-primary">Create</button>
        </form>
    
    </>
}