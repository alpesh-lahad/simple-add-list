function Item({ foodItem, bought, handldeBuyButton }) {
    return (
        <>
            <li className={`list-group-item clearfix ${bought && 'active'}`}>
                {foodItem}
                <button
                    type="button"
                    className="btn btn-primary btn-sm float-end"
                    onClick={handldeBuyButton}
                >
                    Buy
                </button>
            </li>
        </>
    )
}

export default Item;