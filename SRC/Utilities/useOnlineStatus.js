import { useEffect,useState } from "react"

const useOnlineStatus = () =>{
    //useState is a hook that allows you to have state variables in functional components
    const [isOnline, setIsOnline] = useState(true);
    //
    useEffect( ()=>{
        //Online Event Listener: The window.addEventListener('online', () => { setIsOnline(true); }) line adds an 
        // event listener for the 'online' event. When the device regains network connectivity, this event is triggered, 
        // and the callback function is executed. Inside the callback, the setIsOnline(true) function is called to update the state, 
        // indicating that the device is now online. 
        window.addEventListener('online',()=>{
            setIsOnline(true);
        })
        //Offline Event Listener: Similarly, the window.addEventListener('offline', () => { setIsOnline(false); }) line adds an event 
        // listener for the 'offline' event. When the device loses network connectivity, this event is triggered, and the callback function is executed. 
        // The setIsOnline(false) function is called to update the state, indicating that the device is now offline.
        window.addEventListener('offline',()=>{
            setIsOnline(false);
        })
    },[])

    return isOnline;
}
export {useOnlineStatus}