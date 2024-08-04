import { CDN_URL } from "../utils/constant"
const RestorentCard = (prop)=>{
    const {resData} = prop
    const {name,avgRating,cuisines,costForTwo,deleveryTime} = resData?.data
    return (
      <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
          <img className="res-logo" src={CDN_URL}></img>
        <h1>{name}</h1>
        <h4>{cuisines.join(',')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo/100} for two</h4>
        <h4>{deleveryTime} minutes</h4>
      </div>
    )
  }

  export default RestorentCard