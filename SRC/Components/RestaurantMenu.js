import {useState,useEffect} from 'react';
import { Shimmer } from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../Utilities/constants';
import RestaurantCategory from './RestaurantCategory';
const RestaurantMenu = () =>{ 
    //resInfo is the state variable and setresInfo is the function to update the state variable
    //setresInfo update the state variable resInfo
    const [resInfo, setresInfo]= useState(null);

    const {resId} = useParams();

    

    //useEffect is used to call the fetchMenu function when the component is mounted
    useEffect(()=>{
        fetchMenu() 
    },[])

    //Function to fetch the restaurant menu data from the API
    const fetchMenu =  async () =>{
        
        const data  =  await fetch(`${MENU_URL}${resId}`);
        const JSONData  = await data.json();
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

    //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
   
    const cat = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    //console.log(cat)

    return(
        <div className="text-center">
            <h1 className='font-bold text-4xl my-6 font-serif'>{name}</h1>
            <h3 className='font-medium text-4xl my-4'>{areaName}</h3>
            <h3 className='font-light text-2xl my-2'>{cuisines.join(', ')} - {costForTwoMessage} </h3>
            {cat.map((category)=>{
                //key={category?.card?.card?.itemCards?.info?.id}
                return<RestaurantCategory data={category.card?.card}/>
            })}
        </div>
        
    );
}
export default RestaurantMenu;