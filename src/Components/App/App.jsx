import './App.css';
import {restaurants} from "../../mock-data/restaurants.js";
import {PageHeader} from "../Layout/PageHeader.jsx";
import {MainContent} from "../Layout/MainContent.jsx";
import {PageFooter} from "../Layout/PageFooter.jsx";

export const App = () => {
    return (
        <div className="d-flex flex-column" style={{minHeight: '100vh'}}>
            <PageHeader/>
            <main className="container">
                <MainContent route="RestaurantsPage" content={restaurants} />
            </main>
            <PageFooter/>
        </div>
    )
}
