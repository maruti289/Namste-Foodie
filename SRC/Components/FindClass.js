import React from 'react';
class FindClass extends React.Component{

    // This is the constructure which will be called when the component is created
    //Constructore will receive the props from the parent component
    constructor(props){
        super(props);
        //Creation of state varibale in class based component
        this.state={
            userInfo:{
                name:'DummyName',
                location:"DummyLoaction",
                avatar_url:"https://avatars.githubusercontent.com/u/1?v=4",
                html_url:"https://dummyurl.com", 
            }
        }
    }

   async componentDidMount(){
        const userData = await fetch('https://api.github.com/users/maruti289');

        const JSONData = await userData.json();

        //setState is function which will update the state of the component
        this.setState({
            userInfo:JSONData
        })
   
   }

   componentDidUpdate(){
    console.log('Component Did Update is called')
   }

    componentDidUnMount(){
        console.log('Component Did Mount is called')
    }
    render(){
        const {name,location,avatar_url,html_url} = this.state.userInfo;

        return(
            <div className="FindFunClass">
                <img src={avatar_url}/>
                <h1>Name of the Developer: {name} </h1>
                <h2>Location: {location} </h2>
                <h3>Github Link: {html_url} </h3>
                
            </div>
        )
    }
}
export default FindClass;