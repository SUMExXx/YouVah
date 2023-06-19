import CompanyImg1 from '../images/company_img1.png'
import CompanyImg2 from '../images/company_img2.png'
import CompanyImg3 from '../images/company_img3.png'
import CompanyImg4 from '../images/company_img4.png'

import './css/Companies.css'
import './css/CompaniesMobile.css'

function Companies() {
  return (
    <div className="Companies">
      
      <h1 className="Companies-div-text">See where our students are interning</h1>
      <div className="Companies-div-images-div">
        <img className="Company-img" src={CompanyImg1} alt='CompanyImage1'></img>
        <img className="Company-img" src={CompanyImg2} alt='CompanyImage2'></img>
        <img className="Company-img" src={CompanyImg3} alt='CompanyImage3'></img>
        <img className="Company-img" src={CompanyImg4} alt='CompanyImage4'></img>
      </div>
      
    </div>
  );
}

export default Companies;