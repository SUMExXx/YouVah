import './css/DetailsListItem.css'
import './css/DetailsListItem_Mobile.css'

function DetailsListItem(props) {
  return (
    <div className="Companies-details-list-item">
      <div className="Companies-details-list-item-div">
        <div className="Companies-details-list-item-div2">
          <div className="circle">
            <h4 className="item_no">{props.no}</h4>
          </div>
          <h4 className="item_text">{props.text}</h4>
        </div>
        <h5 className="item_time">{props.time}</h5>
      </div>
    </div>
  );
}

export default DetailsListItem;