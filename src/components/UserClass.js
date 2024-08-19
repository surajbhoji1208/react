import React from "react";
import { LOGO_URL } from "../utils/constant";
class UserClass extends React.Component{
    constructor(props)
    {
        super(props)
        this.state ={
           userInfo:{
            login:"dummy name",
            public_repos:"dummy location",
            avatar_url:''
           }
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/surajbhoji1208")
        const json = await data.json()
        
        this.setState({
            userInfo:json
        })
    }
    render(){
        const {login,public_repos,avatar_url} = this.state.userInfo
        return(
            <div className="user-card">
            <img src={avatar_url}></img>
            <h1>Name:{login}</h1>
            <h3>public_repos:{public_repos}</h3>
            <h4>Contact:@gmial.com</h4>
            </div>
        )
    }
}
export default UserClass