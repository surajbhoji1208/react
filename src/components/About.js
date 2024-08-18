import User from "./User"
import UserClass from "./UserClass"

const About=()=>
{
    return(
        <div>
            <h1>about</h1>
            <h5>this is about page</h5>
            <User name={"this is name from function"}></User>
            <UserClass name={"this is name from class"}></UserClass>
        </div>
    )
}

export default About