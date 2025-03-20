import {ReviewList} from "./ReviewList";
import {ReviewForm} from "./ReviewForm.jsx";

export const Reviews = ({reviews, activeId}) => {
    return (
        <div className="RestaurantReviews">
            <h3>Reviews:</h3>
            {reviews.length ? <ReviewList reviews={reviews}/> : 'There are no reviews yet'}
            <ReviewForm activeId={activeId} />
        </div>
    )
}
