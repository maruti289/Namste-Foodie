import { useState,useEffect, use } from "react";
import { restaurantList } from "../Utilities/MockData";
import ResCard,{withLabelPromoted} from "./ResCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../Utilities/useOnlineStatus";
import Offline from "./Offline";
const Body = ()=>
{
    
    // allResList: Master list that holds the original data from API
    // This list never changes after initial load - serves as source of truth
    const [allResList, setAllResList]=useState([]); 
    
    
    // resList: List that's displayed on the UI
    // This list changes when we apply filters or search
    let [resList,setResList ] = useState([]); 
    
    // searchText: Holds the current value of search input field
    const[searchText,setSearchText]=useState('');
   
    const ResCardWithLabel = withLabelPromoted(ResCard);

     // useEffect runs when component mounts ([] means it runs only once)
    useEffect(()=>{
        fetchData()
    },[]);

    // Function to fetch restaurant data from Swiggy API
    const fetchData =  async () =>{
         // Making API call to Swiggy's endpoint
        const LiveData = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

        // Converting response to JSON
        const JsonData =  await LiveData.json()
       
        
        // Extracting restaurant data from nested JSON structure
        const restaurants = JsonData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        //Sets both allResList and resList to the same initial data
        setAllResList(restaurants); // Set master list
        setResList(restaurants); // Set display list

    }
    // Show loading shimmer if we don't have restaurant data yet
    const onlineStatus = useOnlineStatus();

    if(resList.length===0 )
    {
        return <Shimmer/>
    }
    
    return onlineStatus ? (
        <div className='BodyComponent'>
         <div className="flex justify-between">
            <div className="SearchComponent">
                <input
                    className="p-1 m-1 border-2 rounded-lg" 
                    type="text" 
                    value={searchText} 
                    onChange={(e)=>{
                    setSearchText(e.target.value)// Update searchText state as user types
                }
                }></input><span>   </span>
                <button 
                onClick={()=>{
                    // Search Logic:
                    // 1. Filter allResList based on restaurant name
                    // 2. Convert both strings to lowercase for case-insensitive search
                    // 3. Update resList with filtered results
                    const filteredRestaurant = allResList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setResList(filteredRestaurant)
                    setSearchText('');
                    }
                } className="font-bold px-5 bg-gray-200 border-3 rounded-2xl m-1">Search</button>
            </div>
            <div>
                <button className="font-bold px-5 bg-gray-200 border-3 rounded-2xl" onClick={()=>{
                    // Reset Logic:
                    // 1. Restore resList to original data
                    // 2. Clear search input
                    setResList(allResList); 
                    setSearchText(""); 
                }}>Reset</button>
            </div>
            <div className='FilterComponent'>
               <button className="font-bold px-5 bg-gray-200 border-3 rounded-2xl" onClick={()=>{
                    // Filter Logic:
                    // 1. Filter restaurants with rating > 4.5
                    // 2. Update resList with filtered results
                    const FilteredList = allResList.filter(res=>res.info.avgRating>4.5);
                    setResList(FilteredList);
               }
               }>
                    Top Rated Restaurant
               </button>
            </div>
         </div>
         <div className='flex flex-wrap'>
                {resList.map((restaurant) => (
                    <Link to={'/restaurants/' + restaurant.info.id} key={restaurant.info.id}>
                       {
                            restaurant.info.isOpen ? <ResCardWithLabel resData={restaurant}/> : <ResCard resData={restaurant} />
                       } 
                    </Link>
                ))}
            </div>
    </div>): <Offline/>;    
}
export default Body;