import React from 'react';
import {restaurants} from "./restaurants.js";
import {Layout} from "./Layout.jsx";
import {Restaurant} from "./Restaurant.jsx";

export const App = () => {
    return (
        <Layout>
            <div className="row align-items-start">
                {restaurants.map((restaurant) => (
                    <Restaurant key={restaurant.id} restaurant={restaurant} />
                ))}
            </div>
        </Layout>
    )
}
