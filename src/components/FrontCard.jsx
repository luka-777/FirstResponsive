import React from "react";
import './FrontCard.css';
import logo from './images/logo.png'

const FrontCard = ({ cardInfo }) => {
  const { cardNumber, cardholderName, month, year, } = cardInfo;
  return (
    <div className='front'>

      <div className='front-logo'>
        <img src={logo} alt="" />
        </div>

      <h2 className={cardNumber ? "cardNumber" : "Fdesign"}>{cardNumber ? cardNumber : "0000 0000 0000 0000"}</h2>
      <ul>
        <li className={cardholderName ? "cardholderName" : "Fdesign"} style={{textTransform: 'uppercase'}}>{cardholderName ? cardholderName : "Luka giunashvili"}</li>
        <li className={month && year ? "month && year" : "Fdesign"}>{month && year ? `${month}/${year}` : "MM/YY"}</li>
      </ul>
    </div>
  );
};

export default FrontCard;