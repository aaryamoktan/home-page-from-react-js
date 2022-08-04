import React from "react";
import "../../../css/downupper.css";
import {
  Link
} from "react-router-dom";
const Downupper = () => {
  return (
    <div className="upperprofile">
      <div className="profilcontent">
        <div className="coverimg">
            
          <img 
          src="https://assets.website-files.com/5d4a641cc03a64b7f4498a20/6279d0986c24f9499c88390e_Screen%20Shot%202022-05-10%20at%2012.38.25%20pm.png"
            alt="profile img"
          />
        </div>
        <div className="prfileimg">
          <img
          src="https://assets.website-files.com/5d4a641cc03a64b7f4498a20/6279d06f40a3525819d69306_Screen%20Shot%202022-05-10%20at%2012.37.48%20pm.png"
            
            alt="profileimg"
          />
        </div>
        <div className="profilename">
          <h3>name</h3>
          <hr/>
          <p><Link to="/moreinfo" style={{textDecoration:"none"}}>more info</Link> </p>
          <hr/>
        </div>
      </div>
    </div>
  );
};

export default Downupper;
