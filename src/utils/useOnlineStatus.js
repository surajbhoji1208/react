import { useState } from "react";

const useOnlineStatus = ()=>
{
    const [onlineStatus,setOnlineStatus ] = useState(true)
    addEventListener("online", (event) => {
        setOnlineStatus(true)
    });

    addEventListener("offline", (event) => {
        setOnlineStatus(false)
    });
    return onlineStatus
}

export default useOnlineStatus