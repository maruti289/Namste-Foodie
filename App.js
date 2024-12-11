import React from 'react';
import ReactDOM from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBellConcierge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';

const HeaderComponent = () =>
{
    return(
        <div className='HeaderItems'>
            <div className='classLogo'>
                <FontAwesomeIcon className='logo' icon={faBellConcierge} />
                <h3 className='TagLine'>Namste Foodie</h3>
            </div>

            <div className='NavItems'>
               
                <ul className='NavIcons'>
                    <li className='Home'> Home</li>
                    <li className='AboutUs'>AboutUs</li>
                    <li className='Service'>Service</li>
                    <li className='FindUs'>FindUs</li>
                </ul>
            </div>
            <div className='UserLogo'>
                <h1>
                <FontAwesomeIcon icon={faUserLarge} />
                </h1>
            </div>
        </div>   
    );
}

const SearchComponent = () =>
{
    return(
        <div className='SearchBarItems'>
            <div className='SearchBox'>
                <input type='text' placeholder='Type Your Fav Food'></input>
                <FontAwesomeIcon className='MagGlass' icon={faMagnifyingGlass} />
            </div>
        </div>
    );
    
}
const ResCards =(props)=>
{
    //console.log(props.name)
    return(
        <div className='ResCard'>
            
            <img className='ImgCls' src={props.src}/*"https://img.freepik.com/free-photo/high-angle-delicious-indian-dessert_23-2149312428.jpg?t=st=1732339828~exp=1732343428~hmac=60a7cd3c2e6986fb48b5dd01c9800a335e3b9ec10b10bc0dee3ef672b648d84b&w=996"*/ alt="Img Not Rendered"></img>
            <h3>{props.ItemName}</h3>
            <h3>{props.ResName}</h3>
            <h3>{props.starRating}⭐</h3>
            <h3>{props.delivaryTime}⏲️</h3>
        </div>
    );
}
const ResContainer= () =>
{
    return(
        <div className='ResConResCar'>
            <ResCards ItemName={'Paneer'} ResName={'A2B'} starRating = {4.3} delivaryTime={'18 Min'} src = {'https://as1.ftcdn.net/v2/jpg/03/09/47/20/1000_F_309472026_twmr3O8GgJ3DBkQznhorWcsbL70rHAs0.jpg'}/>
            <ResCards ItemName={'Veg Thali'} ResName={'Taj'} starRating = {3.3} delivaryTime={'20 Min'} src = {'https://as2.ftcdn.net/v2/jpg/02/84/46/89/1000_F_284468940_1bg6BwgOfjCnE3W0wkMVMVqddJgtMynE.jpg'}/>
            <ResCards ItemName={'Paneer Wrap '} ResName={'Obroi'} starRating = {4.2} delivaryTime={'60 Min'} src={'https://as1.ftcdn.net/v2/jpg/08/83/79/86/1000_F_883798611_fw8cqywOkFvVtcSosai7fF6BpgsZ0LRl.jpg'}/>
            <ResCards ItemName={'Biriyani'} ResName={'Khan'} starRating = {2.3} delivaryTime={'25 Min'} src={'https://as2.ftcdn.net/v2/jpg/05/17/96/89/1000_F_517968988_hFHjQT6Flfksjx8n0KxfvMtP2tqlmGKk.jpg'}/>
            <ResCards ItemName={'Paneer Thali '} ResName={'One8Commune'} starRating = {5.0} delivaryTime={'24 Hrs'} src={'https://as1.ftcdn.net/v2/jpg/02/09/22/78/1000_F_209227858_PRhEi8dVca85qpZaAjE0i7jb6EJzDnST.jpg'}/>
            <ResCards ItemName={'Special Dosa'} ResName={'Vithal Hote'} starRating = {3.5} delivaryTime={'85 Min'} src={'https://as2.ftcdn.net/v2/jpg/02/17/39/75/1000_F_217397519_MqLzfynUsUKGvZj1AB3iPREmr11sYRhk.jpg'}/>
            <ResCards ItemName={'Chicken Pulka'} ResName={'Raj Hotel'} starRating = {2.5} delivaryTime={'65 Min'} src={'https://as2.ftcdn.net/v2/jpg/00/49/38/95/1000_F_49389599_kJzBxAC9lycFm79B6vdhD2ey6bhlquxQ.jpg'}/>
            <ResCards ItemName={'Chicken 65'} ResName={'Shanti Sagar'} starRating = {2.0} delivaryTime={'32 Min'} src={'https://as1.ftcdn.net/v2/jpg/01/39/30/18/1000_F_139301819_Ip1WMIHLc6vtFjkXNkuhiVw3FqaXUZyd.jpg'}/>
            <ResCards ItemName={'Fried Chicken'} ResName={'Desert Spcl Hotel'} starRating = {5.0} delivaryTime={'80 Min'} src={'https://as1.ftcdn.net/v2/jpg/01/39/30/18/1000_F_139301819_Ip1WMIHLc6vtFjkXNkuhiVw3FqaXUZyd.jpg'}/>
            <ResCards ItemName={'Pure Veg Thali'} ResName={'Grand Horizon Hotel'} starRating = {4.2} delivaryTime={'56 Min'} src={'https://as2.ftcdn.net/v2/jpg/04/73/67/19/1000_F_473671907_7qUNSEz7c9w9EpKIbYBMb5sNsJiGvuJ4.jpg'}/>
            <ResCards ItemName={'Griled Chicken'} ResName={'Opulent Pearl Resort'} starRating = {4.0} delivaryTime={'5 Min'} src={'https://as1.ftcdn.net/v2/jpg/03/61/02/44/1000_F_361024401_whhOCNdEPi0LlQz1lvbyY0dvZuno3aVp.jpg'}/>
            <ResCards ItemName={'Fried rice'} ResName={'Sapphire Heights'} starRating = {4.9} delivaryTime={'10 Min'} src={'https://as2.ftcdn.net/v2/jpg/08/84/48/29/1000_F_884482905_qXDhtLttlege6kOz0f29mQAwrR0dNBK6.jpg'}/>
            <ResCards ItemName={'Gobi Manchuri'} ResName={'Regal Crown Suites'} starRating = {4.1} delivaryTime={'2 Min'} src={'https://as1.ftcdn.net/v2/jpg/09/49/72/76/1000_F_949727685_yjGfRxVzeXI5BHiuHeOtSPTUHK6bPkcO.jpg'}/>
            <ResCards ItemName={'Momos'} ResName={'Platinum Palace'} starRating = {4.6} delivaryTime={'6 Min'} src={"https://as1.ftcdn.net/v2/jpg/06/50/77/42/1000_F_650774274_h7dH585jyVXooZNe48gfdfYye2sMRHhU.jpg"}/>
           
        </div>
    )
}
const MainLayOut = () =>
{
    return(
        <div className='NoNeed'>
                <HeaderComponent/>
                <SearchComponent/>
                <ResContainer/>
        </div>
        
    )
}

const root =ReactDOM.createRoot(document.getElementById('MainClass'));
root.render(<MainLayOut/>)
