import Home from "./Home";
import Holdover from "./Holdover";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import EtchComp from "./EtchComp";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/projects/sketch" element={<EtchComp />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
