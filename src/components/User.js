import { useState } from "react"

const User =(props)=>{
    const {count} = useState(0)
    return(
        <div className="user-card">
            <h1>count:{count}</h1>
        <h1>Name:{props.name}</h1>
        <h3>Locaktion:dehradun</h3>
        <h4>Contact:@gmial.com</h4>
        </div>
    )
}

export default User