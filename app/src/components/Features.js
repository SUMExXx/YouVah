import FeatureDiv1 from "./sub_components/FeatureDiv1";
import FeatureDiv2 from "./sub_components/FeatureDiv2";
import FeatureDiv3 from "./sub_components/FeatureDiv3";
import Buy from "./sub_components/Buy"
import './css/Features.css'

function Features() {
  return (
    <div className="Features">
      <FeatureDiv1 />
      <FeatureDiv2 />
      <FeatureDiv3 />
      <Buy />
    </div>
  );
}

export default Features;