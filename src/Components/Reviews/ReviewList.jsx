import {ReviewListItem} from "./ReviewListItem.jsx";

export function ReviewList({reviews}) {
    return (
        <ul className="list-group list-group-flush">
            {reviews.map((review) => (
                <ReviewListItem review={review} key={review.id}/>
            ))}
        </ul>
    )
}
