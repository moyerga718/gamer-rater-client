export const Review = ({ reviewObj }) => {
    return <div className="reviewDiv">
        <div className="reviewHeader">
            <h3>{reviewObj.rating} / 10 | </h3>
            <h4>Reviewed by {reviewObj?.player?.user?.first_name} {reviewObj?.player?.user?.last_name}</h4>
        </div>
        <p>{reviewObj.review}</p>
    </div>

}