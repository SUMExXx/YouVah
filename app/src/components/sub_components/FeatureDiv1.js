import './css/FeatureDiv1.css'
import Startup from '../../images/startup.svg'

function FeatureDiv1(props) {
  return (
    <div className="FeatureDiv1">
        <object type="image/svg+xml" data={Startup} Class="icon">Your browser does not support SVG.</object>
        <h1 className="Feature-heading">{props.heading}</h1>
        <h3 className="Feature-text">
            {props.text}
        </h3>

    </div>
  );
}

export default FeatureDiv1;