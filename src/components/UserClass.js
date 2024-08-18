import React from "react";
class UserClass extends React.Component{
    constructor(props)
    {
        super(props)
        this.state ={
            count:1,
            count2:2
        }
    }
    render(){
        return(
            <div className="user-card">
                <h1>count:{this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({count:this.state.count+1})
                }}>Increase the count</button>
            <h1>Name:{this.props.name}</h1>
            <h3>Locaktion:dehradun</h3>
            <h4>Contact:@gmial.com</h4>
            </div>
        )
    }
}
export default UserClass