import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBellConcierge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useOnlineStatus } from '../Utilities/useOnlineStatus'; 
import { Shimmer } from './Shimmer';
import Grocery from './Grocery';

const HeaderComponent = () =>
    {
        // Ever wondered how the const state variable gets updated even though it's declared as a const variable?
        // Here's the explanation:
        // The state variable itself (btnNameReact) is immutable because it's a const, meaning the reference to the state does not change.
        // However, React handles state updates internally. When you call the `setBtnNameReact` function, React triggers a reconciliation cycle:
        // 1. React updates the state value (e.g., from 'Login' to 'Logout').
        // 2. React re-renders the component, creating a new instance of the `btnNameReact` variable with the updated value.
 
        // IMPORTANT: "WHENEVER A STATE VARIABLE IS UPDATED, REACT TRIGGERS THE RECONCILIATION CYCLE AND RE-RENDERS THE COMPONENT."

        const [btnNameReact,setBtnNameReact] = useState('Login')

        //console.log('HeaderComponent rendered')

        //1. If there is no dependencies array  present then the userEffect() will  call everytime
        //2. If the dependencies array is [] is empty the useEffect will call once
        //3. if the dependencies is use any local variable then it will call whenever it will update

       const onlineStatus = useOnlineStatus();

        return  (
            <div className='flex justify-between bg-pink-200 '>
                <div className='classLogo'>
                    <FontAwesomeIcon className='text-7xl m-2 p-1' icon={faBellConcierge} />
                    <div className='font-bold' style={{fontSize:'25px', margin:'5px'}}>
                            <h4>Namste Foodie</h4>
                    </div>
                </div>
                 <div className='NavItems'>
                   <ul className='flex m-4 p-3'>
                        <li className='p-3 font-bold'>Online Status {onlineStatus ? "✅" : "❎"}</li>
                        <li className='p-3 font-bold'>
                            <Link to='/Body'> Home</Link>
                        </li>
                        <li className='p-3 font-bold'> 
                            <Link to='/About'>About Us</Link>
                        </li>
                        <li className='p-3 font-bold'>
                            <Link to='/Service'>Service</Link>
                            </li>
                        <li className='p-3 font-bold'>
                            <Link to='/Contact'>Find Us</Link>
                            </li>    
                        <li className='p-3 font-bold'>
                            <Link to='/Grocery'>Grocery</Link>
                            </li>                     
                    </ul>                  
                </div>
               
                <div className='m-5 p-6 font-bold ' style={{margin:'5px'}}>
                    <button className='btn-class' onClick={()=>{
                        // Check if the current value of btnNameReact is "Login".
                        // If true, update it to "Logout" using the setBtnNameReact function.
                        // Otherwise, update it to "Login".
                        btnNameReact === 'login'? setBtnNameReact("logout"): setBtnNameReact("login");
                        // The updated state (btnNameReact) will automatically re-render the UI
                        // to reflect the current value of the button label.
                    }}>{btnNameReact}</button>
                </div>
            </div>   
        )  ;
    }
export default HeaderComponent;