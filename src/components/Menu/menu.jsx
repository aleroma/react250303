export const Menu = () => {
    return (
        <ul className="list-group list-group-flush">
            {restaurant.menu.map((dish) => (
                <li key={dish.id} className="list-group-item">
                    {dish.name} - {dish.price} $
                </li>
            ))}
        </ul>
    )
}
