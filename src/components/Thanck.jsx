import "./Thanck.css";
import Lg from "./images/done.png";

const Thank = () => {
  return (
    <div className="main-container">
      <div className="lg">
        <img src={Lg} alt="" />
      </div>
      <div className="txt">
        <h1>THANK YOU!</h1>
        <p>We’ve added your card details</p>
      </div>
      <div className="done">
        <button>Continue</button>
      </div>
    </div>
  );
};

export default Thank;
