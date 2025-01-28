import {useState,useEffect} from 'react';
import { Shimmer } from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../Utilities/constants';
const RestaurantMenu = () =>{ 
    //resInfo is the state variable and setresInfo is the function to update the state variable
    //setresInfo update the state variable resInfo
    const [resInfo, setresInfo]= useState(null);

    const {resId} = useParams();

    console.log(resId);

    //useEffect is used to call the fetchMenu function when the component is mounted
    useEffect(()=>{
        fetchMenu() 
    },[])

    //Function to fetch the restaurant menu data from the API
    const fetchMenu =  async () =>{
        
        const data  =  await fetch(`${MENU_URL}${resId}`);
        const JSONData  = await data.json();

        console.log(JSONData);
        //Setting the state variable resInfo with the fetched data
        //setresInfo(JSONData.data); is used to update the state variable resInfo and re-render the component with the updated state variable
        setresInfo(JSONData.data);
    }

    if(resInfo === null)
    {
        return<Shimmer/>
    }

    const {name,avgRating,areaName,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    //we are extracting the itemsCards fom the resInfo object and destructuring it
    //Point to be noted you have to use the same key names as in the object
    const {itemCards} =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);

    return(
        <div className="RestaurantMenu">
            <h1>{name}</h1>
            <h2>{avgRating}</h2>
            <h3>{areaName}</h3>
            <h3>{cuisines.join(', ')} - {costForTwoMessage} </h3>
            <h1>Menu Items</h1>
            <ul >
                {/* The return statement ensures that the arrow function returns a 
                <li> element for each item in the itemCards array, allowing the map function to produce an array of <li> elements */}
                {itemCards?.map((item)=>{
                    return <li key={item.card.info.id}>{item.card.info.name} - { 'RS. '} {item.card.info.price/100 || item.card.info.defaultPrice/100 }</li>
                }
                )}
            </ul> 
        </div>
    );
}
export default RestaurantMenu;