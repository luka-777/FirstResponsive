import React, {useState} from "react";
import "./index.css";
import FrontCard from "./components/FrontCard";
import BackCard from "./components/BackCard";
import Input from "./components/Input";
import Thank from "./components/Thanck";

function App() {

  
  const [showInput, setShowInput] = useState(true);
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardholderName: "",
    expDate: "",
    cvc: ""
  }); 

  const handleInputChange = (name, value) => {
    setCardInfo({ ...cardInfo, [name]: value });
  };

  const handleConfirmation = () => {
    setShowInput(false); // Hide Input component
  };

  return (
    <div className="MainContainer">
      <div className="frontback">
        <FrontCard cardInfo={cardInfo} />
        <BackCard cardInfo={cardInfo}/>
      </div>
      <div>
      {showInput ? (
          <Input onInputChange={handleInputChange} onConfirmation={handleConfirmation} />
        ) : (
          <Thank />
        )}
      </div>
    </div>
  );
} 
  export default App;
  
  

