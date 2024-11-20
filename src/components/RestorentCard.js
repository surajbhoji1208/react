import { CDN_URL } from "../utils/constant"
const RestorentCard = (prop)=>{
  console.log("prop==>",prop);
  
    const {resData} = prop
    const {name,avgRating,cuisines,costForTwo,sla,cloudinaryImageId} = resData
    return (
      <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
          <img className="res-logo" src={CDN_URL+cloudinaryImageId}></img>
        <h1 className="font-bold py-4 text-lg">{name}</h1>
        <h4>{cuisines?.join(',')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo/100} for two</h4>
        <h4>{sla?.deliveryTime} minutes</h4>
      </div>
    )
  }

  //higher order component
  export const withPromotedLabel = (RestorentCard)=>{
    return(props)=>{
      return(
        <div>
          <label className="absolute bg-black text-white m-2 y-2 rounded-lg">
            Promoted
          </label>
          <RestorentCard {...props}></RestorentCard>
        </div>
      )
    }
  } 

  export default RestorentCard