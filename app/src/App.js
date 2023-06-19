
import './App.css';

import Header from './components/Header';
import Companies from './components/Companies';
import Content from './components/Content'
import Features from './components/Features';

function App() {
  return (
    <div className="App">
      <div className="top-box">
        <Header />
        <Companies />
       
      </div>
       <div className="content-box">
          <Content />
          <Features />
        </div>
          
    </div>
  );
}

export default App;
