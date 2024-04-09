function ErrorMessage({items}) {

    return (
        <>
            <div className="row mt-4">
                <div className="col">
                    {items.length === 0 && <h3 className='mb-4 text-primary'>I am still hungry!</h3>}
                </div>
            </div>
        </>
    )
}

export default ErrorMessage;