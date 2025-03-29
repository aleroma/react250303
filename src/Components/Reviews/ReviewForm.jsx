import {Counter} from "../Counter/Counter.jsx";
import {useRating} from "./useRating.js";

export function ReviewForm({restaurantId}) {
    return (
        <form className="ReviewForm bg-secondary-subtle rounded border p-4">
            <h4>Leave a review</h4>
            <input type="hidden" name="RestaurantId" value={restaurantId}/>
            <div>
                Rating <Counter key={restaurantId} customCounterHook={useRating}/>
            </div>
            <div className="mt-3">
                <label className="form-label">Your Name</label>
                <input className="form-control" type="text"/>
            </div>
            <div className="mt-3">
                <label className="form-label">Review text</label>
                <textarea className="form-control" rows="3"></textarea>
            </div>
            <div className="mt-3">
                <button type="submit" className="btn btn-secondary">Submit</button>
                <button type="reset" className="btn btn-outline-secondary ms-3">Reset</button>
            </div>
        </form>
    )
}
