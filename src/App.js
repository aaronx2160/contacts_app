import React from "react";
import './App.css';
import Home from "./pages/Home";
import {Provider} from "react-redux";
import store from './store'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import AddNew from "./pages/AddNew";



function App() {
  return (
    <div className="App">
        <Router>
                <Routes>
                    <Route path="/addNew" element={<AddNew/>}>

                    </Route>
                    <Route path="/" element={<Home/>}>
                    </Route>
                </Routes>
        </Router>
    </div>

  );
}

export default App;
