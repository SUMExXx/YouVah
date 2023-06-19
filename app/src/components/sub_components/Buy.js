import "./css/Buy.css";
import "./css/BuyMobile.css"

function Buy() {
  return (
    <div className="Buy">
        <div className="price-div">
            <h1 className="price-heading">₹1000</h1>
            <h4 className="price-subtext"><s>₹2000</s> 50% off</h4>
        </div>
        <button className="buy-button">Buy Now</button>
      
    </div>
  );
}

export default Buy;