import React from "react";
import ReactDOM from "react-dom";

const Title =()=>{
  return <div>
      <h1>the this title HeadingComponent</h1>
  </div>
}

const headingComponent =()=>{
  return <div>
    <Title/>
      <h1>the this heading HeadingComponent</h1>
  </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
