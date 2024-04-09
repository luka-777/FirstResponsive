import React from "react";
import "./BackCard.css";

const BackCard = ({ cardInfo }) => {
  const { cvc } = cardInfo;
  return (
    <div className="back">
      <p className={cvc ? "cvc" : "Bdesign"}>{cvc ? cvc : "000"}</p>
    </div>
  );
};

export default BackCard;
