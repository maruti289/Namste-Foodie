import  {useState} from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({data})=>{
    //console.log(data)
    const [showItems, setshowItems] = useState(false);

    const  handleClick = () => {

    setshowItems(!showItems);
    
    }
    return(
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold font-serif">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            { showItems && <ItemList items={data.itemCards}/>}
        </div>
    )
}
export default RestaurantCategory;