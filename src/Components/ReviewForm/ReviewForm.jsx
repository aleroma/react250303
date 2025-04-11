import {Counter} from '../Counter/Counter.jsx';
import {useReviewForm} from './useReviewForm.js';

export function ReviewForm() {
    const {
        state,
        setName,
        setReviewText,
        increment,
        decrement,
        resetForm
    } = useReviewForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted review:', state);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
            <h4 className="mb-3">Leave a review</h4>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Your name</label>
                <input
                    id="name"
                    type="text"
                    value={state.name}
                    onChange={setName}
                    className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="reviewText" className="form-label">Review text</label>
                <textarea
                    id="reviewText"
                    value={state.reviewText}
                    onChange={setReviewText}
                    rows="4"
                    className="form-control"
                />
            </div>

            <p className="mb-2">Rating</p>
            <Counter
                counter={state.rating}
                increment={increment}
                decrement={decrement}
            />

            <div className="d-flex mt-3">
                <button type="submit" className="btn btn-primary">Отправить отзыв</button>
                <button
                    type="button"
                    onClick={resetForm}
                    className="btn btn-secondary ms-2"
                >
                    Очистить
                </button>
            </div>
        </form>
    );
}
