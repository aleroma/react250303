export const RestaurantButtons = ({restaurants, activeId, setActiveId}) => {
    return (
        <div className="RestaurantButtons mt-3">
            {restaurants.map((restaurant) => (
                <button key={restaurant.id} onClick={() => setActiveId(restaurant.id)}
                        className={activeId === restaurant.id ?
                            "btn btn-secondary me-3" :
                            "btn btn-outline-secondary me-3"}>
                    {restaurant.name}
                </button>
            ))}
        </div>
    )
}
