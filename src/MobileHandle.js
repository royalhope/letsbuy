import React from "react";
import "./MobileHandler.css";

const MobileHandler = () => {
  return (
    <div className="mobileScreen">
      <div className="mobileContainer">
        <div className="mobileHeading">
          <h3>Desktop Not Detected!</h3>
        </div>
        <div className="mobileInfo">
          <p>LetsBuy has been designed for only Desktop Browser users, the mobile version of LetsBuy is in progress, <br /> <br /> Sorry for any inconvenience caused.</p>
        </div>
      </div>
    </div>
  );
};

export default MobileHandler;
