import './css/FeatureDiv2.css'
import Books from '../../images/books.svg'

function FeatureDiv2(props) {
  return (
    <div className="FeatureDiv2">
        <object type="image/svg+xml" data={Books} Class="icon">Your browser does not support SVG.</object>
        <h1 className="Feature-heading">{props.heading}</h1>
        <h3 className="Feature-text">
            {props.text}
        </h3>

    </div>
  );
}

export default FeatureDiv2;