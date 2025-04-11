export const Counter = ({ counter, increment, decrement }) => {
    return (
        <div className="Counter d-flex align-items-center">
            <button type="button" className="btn btn-outline-secondary" onClick={decrement}>
                <i className="fa-solid fa-minus"></i>
            </button>
            <span className="mx-3 fs-5">{counter}</span>
            <button type="button" className="btn btn-outline-secondary" onClick={increment}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}
