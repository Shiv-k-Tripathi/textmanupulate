import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {
  Switch,
  Route
} from "react-router-dom";
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;


// import React from "react";
// import Parent from './Parent.js';
// export default function App() {
//   return (
//     <div>
//        <Parent />
//     </div>
//   );
// }