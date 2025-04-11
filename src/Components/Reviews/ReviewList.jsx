export function ReviewList({reviews}) {
    return (
        <ul className="list-group list-group-flush">
            {reviews.map((review) => (
                <li key={review.id} className="list-group-item">
                    <q>{review.text}</q><br/><i>{review.user}</i>
                </li>
            ))}
        </ul>
    )
}
