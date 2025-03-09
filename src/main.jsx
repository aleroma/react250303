import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/mock";

const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(
  <div className="container">
    <div className="row align-items-start">
      {restaurants.map((restaurant) => (
        <div className="col" key={restaurant.id}>
          <h2>{restaurant.name}</h2>
          <h3>Menu:</h3>
          <ul className="list-group list-group-flush">
            {restaurant.menu.map((dish) => (
              <li key={dish.id} className="list-group-item">
                {dish.name} - {dish.price} $
              </li>
            ))}
          </ul>
          <h3>Reviews:</h3>
          <ul className="list-group list-group-flush">
            {restaurant.reviews.map((review) => (
              <li key={review.id} className="list-group-item">
                <q>{review.text}</q><br /><i>{review.user}</i>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
)

