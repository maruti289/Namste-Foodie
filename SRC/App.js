import React from 'react';
import ReactDOM from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBellConcierge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import HeaderComponent from './Components/HeaderComponent';
import Body from './Components/Body';

const MainLayOut = () =>
{
    return(
        <div className='NoNeed'>
                <HeaderComponent/>
                <Body/>
        </div>    
    )
}
const root =ReactDOM.createRoot(document.getElementById('MainClass'));
root.render(<MainLayOut/>)

