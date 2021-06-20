import React from "react";
import { ToastContainer } from "react-toastify";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import ShowContacts from './components/ShowContacts'


function App() {
  return (
    <>
    
    <Router>
      <ToastContainer/>
        <header>
          <Navbar></Navbar>
        </header>
        <main>
          <Route exact path="/" component={ShowContacts}></Route>
          <Route path="/add">I am Home Page</Route>
          <Route path="/update/:id">I am Home Page</Route>
          <Route path="/remove/:id">I am Home Page</Route>
        </main>
    </Router>
    </>
  );
}

export default App;
