import { CDN_URL } from "../Utilities/constants";
const ResCard = (props)=>
    {
        const { resData} =props;
    
        const { name, cloudinaryImageId, avgRating, areaName, deliveryTime, id,cuisines } = resData || {};
    
        return(
            <div className='res-card'>
                <img  className="img-class" src={CDN_URL+resData.info.cloudinaryImageId}/>
                <h2>{resData.info.name}</h2>
                <h3>{resData.info.areaName}</h3>
                <h3>{resData.info.avgRating}</h3>
                <h3>{resData.info.cuisines.join(", ")}</h3>
                <h4>{resData.info.deliveryTime} Min</h4>
            </div>
        )
    }
export default ResCard;