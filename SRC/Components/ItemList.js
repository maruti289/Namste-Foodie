import { CDN_URL } from "../Utilities/constants";
const ItemList = ({items})=>{
    console.log(items)   
    return(
        <div>
           {items.map((item)=>(<div key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
            
            <div>
                <span className="font-bold text-lg">{item.card.info.name}</span>
                <span className="font-bold"> - ₹ {item.card.info.price / 100}</span>
                <p className="text-lg p-3 m-3 font-serif">{item.card.info.description}</p>
            </div>
            <div>
            <img className="w-60" src={CDN_URL+item.card.info.imageId}/>
            <button className="pl-10">➕</button>
            </div>
           </div>))}
        </div>
    )
}
export default ItemList;