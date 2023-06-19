import FeatureDiv1 from "./sub_components/FeatureDiv1";
import './css/Features.css'
import FeatureDiv2 from "./sub_components/FeatureDiv2";
import FeatureDiv3 from "./sub_components/FeatureDiv3";

function Features() {
  return (
    <div className="Features">
      <FeatureDiv1 heading="Career Opportunities :"
      text={<ul>
              <li>Life time access</li>
              <li>Life time access</li>
              <li>Life time access</li>
              </ul>}
      />
      {/* <FeatureDiv2 heading="Skills You Will Learn :"
      text={<ul>
              <li>Content Designing</li>
              <li>Content Adaptation</li>
              <li>Content Writing as a Career</li>
              <li>SEO: Understanding search engine optimization (SEO)</li>
            </ul>}
      />
      <FeatureDiv3 heading="Course Includes :"
      text={<ul>
              <li>Life time access</li>
              <li>Certificate of completion</li>
            </ul>}
      /> */}
    </div>
  );
}

export default Features;