export function ReviewListItem({review}) {
    return (
        <li key={review.id} className="list-group-item">
            <q>{review.text}</q><br/><i>{review.user}</i>
        </li>
    )
}
