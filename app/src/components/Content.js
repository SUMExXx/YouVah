import './css/Content.css'
import './css/ContentMobile.css'

import DetailsListItem from './sub_components/DetailsListItem'
import DashedLine from './sub_components/DashedLine';

function Content() {
  return (
    <div className="Content">
      <div className="Content-box">
        <div className="Content-heading-box">
          <h1 className="Content-heading">Content :</h1>
          <h4 className='Content-heading-subtext'>12 lessons • 2hr 3min</h4>
        </div>
        <div className="Content-details">
          <DetailsListItem no="1" text="Introductory Session (Live class)" time="2hr 3min"/>
          <DashedLine />
          <DetailsListItem no="2" text="Getting into the Fundamentals" time="2hr 3min"/>
          <DashedLine />
          <DetailsListItem no="3" text="Know your niche" time="2hr 3min"/>
          <DashedLine />
          <DetailsListItem no="4" text="The Crux of Search Engine Optimization (SEO) What is SEO?" time="2hr 3min"/>
          <DashedLine />
          <DetailsListItem no="5" text="The Key to Keywords" time="2hr 3min"/>
          <DashedLine />
          <DetailsListItem no="6" text="Content Marketing - Ensuring the Reach" time="2hr 3min"/>
        </div>
        <div className="button-div">
          <button className="ViewAllButton">
            <h2 className="ViewAllButton-text">View All</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content;