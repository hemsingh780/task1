
import './App.css';
import Fifth from './component/Fifth/Fifth';
import FourthComponent from './component/FourthComponent/FourthComponent';
import LowerText from './component/LowerText/LowerText';
import Seventh from './component/Seventh/Seventh';
import Sixth from './component/Sixth/Sixth';
import ThirdComponent from './component/ThirdComponent/ThirdComponent';
import Toolbar from './component/Toolbar/Toolbar';
import Eight from './component/Eight/Eight';

function App() {
  return (
    <div className="App">
       <Toolbar />
        <LowerText />
        <ThirdComponent />
       <FourthComponent />
       <Fifth />
       <Sixth />
       <Seventh />
       <Eight />
    </div>
  );
}

export default App;
