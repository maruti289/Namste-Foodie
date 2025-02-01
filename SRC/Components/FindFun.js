const FindFun = (props) =>{
    //We have received the props from the Contact.js
    //Here we are destructuring the name,storeName,location,rent from the props
    const {name,storeName,location,rent} =props

    return(
        <div className="FindFunClass">
            <h1>{name}(Functional Component)</h1>
            <h2>{storeName}(Functional Component)</h2>
            <h3>{location}(Functional Component)</h3>
            <h4>{rent}(Functional Component)</h4>
        </div>
    )
}
export default FindFun;