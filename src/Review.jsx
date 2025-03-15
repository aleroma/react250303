export const Review = (review) => {
    const { text, user } = review;
    return (
        <li className="list-group-item">
            <q>{text}</q><br/><i>{user}</i>
        </li>
    )
}

