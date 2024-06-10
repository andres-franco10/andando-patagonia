import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ComponentWithRouteParams = () => {
    const {userId} = useParams();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        console.log("Received userId", userId);
        return () => {
            console.log("Will change userId", userId);
        };
    }, [userId])

    return(
        <div>
            <h1>User:{userData.name}</h1>
            <img src={userData.avatar} alt={userData.name} />
            <p>{userData.profile}</p>
        </div>
    )
}

export default ComponentWithRouteParams