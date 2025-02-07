import FindClass from "./FindClass";
import React from 'react';

class Contact extends React.Component{
    constructor(props){
        super(props)

        
    }

   componentDidMount(){
   
   }


    render(){
        
        return(
            <div className="ContactClass">
                <h1>My Name</h1>
                <h2>Store Name</h2>
                <h3>My Location</h3>

                <FindClass name={'First'} storeName={'CoupleCafe'} location={'Maratha Galli Athai'} rent={5000} />
            </div>
        )
        
    }
}
export default Contact;