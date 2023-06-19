import CW2 from '../images/CW 2.png'
import CW1 from '../images/CW 1.png'
import Visual from '../images/visual.png'
import './css/Header.css'
import GraphicElement from '../images/GRAHPIC ELEMENT.svg'

function Header() {
  return (
    <div className="Header">
        <img src={CW2} alt="CW 2" id="CW2"></img>
        <img src={Visual} alt="Visual" id="Visual"></img>
        <div id="Header-div">
            <div id="Header-div-text">
                <h1 id="Header-div-maintext">Ace Our Single Shot Challenge !</h1>
                <h3 className="Header-div-subtext" id='subtext1'>Jumpstart Your Career with Our Free Assessment Test: Prove Your Skills and Secure an Internship Today!</h3>
                <h3 className="Header-div-subtext" id='subtext2'>Jumpstart Your Career with Our Free<br />Assessment Test: Prove Your Skills and Secure an<br />Internship Today!</h3>
            </div>
            <button className='Header-div-button' id='button1'>
                Take A Free Assessment
            </button>
            <button className='Header-div-button' id='button2'>
                Take A Test
            </button>

        </div>
        
        <img src={CW1} alt="CW 1" id="CW1"></img>
        {/* <svg src={GraphicElement} id="GraphicElement"></svg> */}
        <object type="image/svg+xml" data={GraphicElement} id='GraphicElement'>
          Your browser does not support SVG.
        </object>
    </div>
  );
}

export default Header;