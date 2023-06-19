import './css/FeatureDiv3.css'
import Excel from '../../images/excel.svg'

function FeatureDiv3(props) {
  return (
    <div className="FeatureDiv3">
        <object type="image/svg+xml" data={Excel} Class="icon">Your browser does not support SVG.</object>
        <h1 className="Feature-heading">{props.heading}</h1>
        <h3 className="Feature-text">
            {props.text}
        </h3>

    </div>
  );
}

export default FeatureDiv3;