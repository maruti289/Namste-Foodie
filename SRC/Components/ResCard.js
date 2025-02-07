import { CDN_URL } from "../Utilities/constants";
const ResCard = (props)=>
    {
        const { resData} =props;
    
        const { name, cloudinaryImageId, avgRating, areaName, deliveryTime, id,cuisines } = resData || {};
    
        return(
            <div className='p-2 m-2 w-100 h-120 border rounded-lg  bg-white hover:bg-gray-400'>  '
                <img  className="w-100 h-65 rounded-2xl" src={CDN_URL+resData.info.cloudinaryImageId}/>
                <h2 className="font-medium">{resData.info.name}</h2>
                <h3>{resData.info.areaName}📍</h3>
                <h3>{resData.info.avgRating}⭐</h3>
                <h3>{resData.info.cuisines.join(", ")}</h3>
                <h4>{resData.info.sla.deliveryTime} Min 🕛</h4>
            </div>
        )
    }
export const withLabelPromoted =(ResCard)=>{
    return (props) =>{
        return(
            <div>
                <lable className="absolute bg-gray-300 text-black p-2 m-4 rounded-xl max-w-auto">Restaurant is Open</lable>
                <ResCard {...props}/>
            </div>
        )
    }
}
export default ResCard;