import {ReviewList} from "./ReviewList";

export const Reviews = ({reviews}) => {
    return (
        <div className="RestaurantReviews">
            <h3>Reviews:</h3>
            {reviews.length ? <ReviewList reviews={reviews}/> : 'There are no reviews yet'}
        </div>
    )
}
