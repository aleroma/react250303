import {Counter} from "../Counter/Counter.jsx";

function preventSubmit(event) {
    event.preventDefault(); // отмена отправки формы
}

export function ReviewForm({activeId}) {
    return (
        <form className="ReviewForm bg-secondary-subtle rounded border p-4" onSubmit={preventSubmit}>
            <h4>Leave a review</h4>
            <input type="hidden" name="RestaurantId" value={activeId}/>
            <div>
                Rating <Counter/>
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
