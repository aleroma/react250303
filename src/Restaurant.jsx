import { MenuItem } from "./MenuItem.jsx";
import { Review } from "./Review.jsx";

export const Restaurant = ({ restaurant }) => {
    const { name, menu, reviews } = restaurant;
    return (
        <div className="col">
            <h2>{name}</h2>
            <h3>Menu:</h3>
            <ul className="list-group list-group-flush">
                {menu.map((menuItem) => (
                    <MenuItem key={menuItem.id} menuItem={menuItem} />
                ))}
            </ul>
            <h3>Reviews:</h3>
            <ul className="list-group list-group-flush">
                {reviews.map((review) => (
                    <Review key={review.id} review={review} />
                ))}
            </ul>
        </div>
    )
}
