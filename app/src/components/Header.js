import CW2 from '../images/CW 2.png'
import CW1 from '../images/CW 1.png'
import './css/Header.css'
import GraphicElement from '../images/GRAHPIC ELEMENT.svg'

function Header() {
  return (
    <div className="Header">
        <div id="Header-div">
            <div id="Header-div-text">
                <h1 id="Header-div-maintext">Ace Our Single Shot Challenge !</h1>
                <h3 id="Header-div-subtext">Jumpstart Your Career with Our Free Assessment Test: Prove Your Skills and Secure an Internship Today!</h3>
            </div>
            <button id='Header-div-button'>
                <h4 id="Header-div-button-text">Take A Free Assessment</h4>
            </button>

        </div>
        <img src={CW2} alt="CW 2" id="CW2"></img>
        <img src={CW1} alt="CW 1" id="CW1"></img>
        {/* <svg src={GraphicElement} id="GraphicElement"></svg> */}
        <object type="image/svg+xml" data={GraphicElement} id='GraphicElement'>
          Your browser does not support SVG.
        </object>
    </div>
  );
}

export default Header;