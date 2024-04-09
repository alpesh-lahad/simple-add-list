function FoodInput({handleKeyDown}) {    
    return (
        <>
            <div className="row mb-2">
                <div className="col">
                    <input 
                    id="foodInput"
                    type="text" 
                    className="form-control" 
                    placeholder="Enter food item here..." 
                    onKeyDown={handleKeyDown}
                    />
                </div>
            </div>
        </>
    )
}

export default FoodInput;