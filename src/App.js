import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {
  Switch,
  Route
} from "react-router-dom";
import Contact from './component/Contact';

function App() {
  return (
    <>
      {/* <Switch> */}
        <Navbar />
        <div className="text-center">
          <h1>Text Manupulate</h1>
        </div>
        {/* <Route exact path="/"  >
          <Home/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
      </Switch> */}
          <Home/>
    </>

  );
}

export default App;
