import User from "./User"
import UserClass from "./UserClass"
import React from "react";
import { UserContext } from "./../utils/UserContext"; // Correct import

class About extends React.Component{
    constructor(){
        super()
        console.log("parent constructor");
        
    }
    componentDidMount(){
        console.log("componentDitMount parent");
        
    }
    render(){
        console.log("render parent");
        
        return(
            <div>
                <div>
                <UserContext.Consumer>
                            {(data) => (
                                <div>
                                    <h3>User Name from Context: {data.userName}</h3>
                                    {console.log(data)}
                                </div>
                            )}
                        </UserContext.Consumer>
                </div>
           <h1>about</h1>
           <h5>this is about page</h5>
           <UserClass name={"First"}></UserClass>
       </div>
        )
    }
}

// const About=()=>
// {
//     return(
//         <div>
//             <h1>about</h1>
//             <h5>this is about page</h5>
//             <User name={"this is name from function"}></User>
//             <UserClass name={"this is name from class"}></UserClass>
//         </div>
//     )
// }

export default About