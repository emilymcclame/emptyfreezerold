import titleVector from './images/titleGradient.svg';
import footerVector from './images/footerGradient.svg';
import './App.css';

function TitleBox(props) {
  return (
    <div id={props.divID} className="titleDiv">
      <div className="navBarDiv">
        <ul className="navBar">
          <li><a>Home</a></li>
          <li>|</li>
          <li><a>About</a></li>
          <li>|</li>
          <li><a>Products</a></li>
          <li>|</li>
          <li><a>Contact Us</a></li>
        </ul>
      </div>
      <div className="titleGraphic"></div>
    </div>
  )
}

function ContentBox(props) {
  return (
    <div className="contentParentDiv">
      
    </div>
  )
}

function FooterBox(props) {
  return (
    <div className="footerDiv">
      <div className="footerGraphic"></div>
    </div>
  )
}


function App() {
  return (
    <div id="parentDiv">
      <TitleBox divID="homeTitleDiv"/>
      <ContentBox />
      <FooterBox />
    </div>
  );
}

export default App;
