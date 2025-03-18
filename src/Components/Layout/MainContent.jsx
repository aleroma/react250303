import {RestaurantPage} from "../RestaurantPage/RestaurantPage.jsx";

export const MainContent = ({route, content}) => {
    if (route === 'RestaurantsPage') {
        return <RestaurantPage restaurants={content}  />
    }
    return "Route not found";
}
