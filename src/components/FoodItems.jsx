import { useState } from "react";
import Item from "./Item";

function FoodItems({ items }) {
    let [activeItems, setActiveItems] = useState([]);

    const onBuyButton = (item, e) => {
        let newItems = [...activeItems, item];
        setActiveItems(newItems);
    }

    return (
        <>
            <div className="row">
                <div className="col">
                    <ul className="list-group app-list-group">
                        {
                            items.map((item, index) =>
                                <Item
                                    key={index}
                                    foodItem={item}
                                    bought={activeItems.includes(item)}
                                    handldeBuyButton={(e)=>onBuyButton(item, e)}
                                />
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default FoodItems;