import {ReviewList} from "./ReviewList.jsx";
import {ReviewForm} from "../ReviewForm/ReviewForm.jsx";

export const Reviews = ({reviews, restaurantId}) => {
    return (
        <div className="RestaurantReviews">
            <h3>Reviews:</h3>
            {reviews?.length ? <ReviewList reviews={reviews}/> : 'There are no reviews yet'}
            <ReviewForm restaurantId={restaurantId} />
        </div>
    )
}

