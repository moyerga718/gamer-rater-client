import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllCategories } from "../../managers/CategoryManager"
import { createGame } from "../../managers/GameManager"


export const GameForm = () => {

    const navigate = useNavigate()
    const [ categories, setCategories ] = useState([])
    const [currentGame, setCurrentGame] = useState({
        title: "",
        description: "",
        designer: "",
        yearReleased: 0,
        numberOfPlayers: 0,
        duration: 0,
        ageRecommendation: 0,
        gameCategoryId: 0
    })

    useEffect(
        () => {
            getAllCategories().then(setCategories)
        },
        []
    )

    return <>

        <h1>Register New Game</h1>

        <form className="gameForm">
            <h2 className="gameForm__title">Register New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentGame.title}
                        onChange={(changeEvent) => {
                            const gameCopy = {...currentGame}
                            gameCopy.title = changeEvent.target.value
                            setCurrentGame(gameCopy)
                        }}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="designer">Designer: </label>
                    <input type="text" name="designer" required autoFocus className="form-control"
                        value={currentGame.designer}
                        onChange={(changeEvent) => {
                            const gameCopy = {...currentGame}
                            gameCopy.designer = changeEvent.target.value
                            setCurrentGame(gameCopy)
                        }}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentGame.description}
                        onChange={(changeEvent) => {
                            const gameCopy = {...currentGame}
                            gameCopy.description = changeEvent.target.value
                            setCurrentGame(gameCopy)
                        }}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="yearReleased">Year Released: </label>
                    <input type="number" name="yearReleased" required autoFocus className="form-control"
                        value={currentGame.yearReleased}
                        onChange={(changeEvent) => {
                            const gameCopy = {...currentGame}
                            gameCopy.yearReleased = changeEvent.target.value
                            setCurrentGame(gameCopy)
                        }}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="numberOfPlayers">Number of Players: </label>
                    <input type="number" name="numberOfPlayers" required autoFocus className="form-control"
                        value={currentGame.numberOfPlayers}
                        onChange={(changeEvent) => {
                            const gameCopy = {...currentGame}
                            gameCopy.numberOfPlayers = changeEvent.target.value
                            setCurrentGame(gameCopy)
                        }}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="duration">Duration: </label>
                    <input type="number" name="duration" required autoFocus className="form-control"
                        value={currentGame.duration}
                        onChange={(changeEvent) => {
                            const gameCopy = {...currentGame}
                            gameCopy.duration = changeEvent.target.value
                            setCurrentGame(gameCopy)
                        }}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="ageRecommendation">Age Recommendation: </label>
                    <input type="number" name="ageRecommendation" required autoFocus className="form-control"
                        value={currentGame.ageRecommendation}
                        onChange={(changeEvent) => {
                            const gameCopy = {...currentGame}
                            gameCopy.ageRecommendation = changeEvent.target.value
                            setCurrentGame(gameCopy)
                        }}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="game_category">Game Category: </label>
                    <select onChange={(changeEvent) => {
                            const gameCopy = {...currentGame}
                            gameCopy.gameCategoryId = changeEvent.target.value
                            setCurrentGame(gameCopy)
                        }}>
                        <option value = "0">PICK A GAME CATEGORY</option>
                        {
                            categories.map( category => {
                                return <option value = {category.id}>{category.name}</option>
                            } )
                        }
                    </select>
                    
                </div>
            </fieldset>

            {/* TODO: create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const game = {
                        title: currentGame.title,
                        designer: currentGame.designer,
                        description: currentGame.description,
                        year_released: currentGame.yearReleased,
                        number_of_players: parseInt(currentGame.numberOfPlayers),
                        duration: parseInt(currentGame.duration),
                        age_recommendation: parseInt(currentGame.ageRecommendation),
                        category_id: parseInt(currentGame.gameCategoryId)
                    }

                    // Send POST request to your API
                    createGame(game)
                        .then(() => navigate("/games"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    </>
}