import React from "react";
import { ToastContainer } from "react-toastify";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import ShowContacts from './components/ShowContacts'
import AddContact from "./components/AddContact";
import DetailsContact from "./components/DetailsContact";


function App() {
  return (
    <>
    
    <Router>
      <ToastContainer/>
        <header className="w-100">
          <Navbar></Navbar>
        </header>
        <main>
          <Route exact path="/" component={ShowContacts}></Route>
          <Route path="/add" component={AddContact}></Route>
          <Route path="/update/:id" component={DetailsContact}></Route>
        </main>
    </Router>
    </>
  );
}

export default App;
