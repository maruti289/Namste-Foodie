import { useRouteError } from "react-router";
const Error = () => {
    const error = useRouteError();
    console.log(error);
    return(
        <div className="ErrorClass">
            <h1>{error.status}</h1>
            <h1>{error.statusText}</h1>
        </div>
    )
}
export default Error;