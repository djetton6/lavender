import React from 'react';
import './App.css';
import Routes from './routes';
import {Link, useHistory } from 'react-router-dom';

function App() {

  const history = useHistory();
  const [state, setstate] = useState("");

  //if we are on a page, we don't want that page to show up in the navbar
  window.addEventListener("load", () => {
    if(window.location.pathname == "/contact"){
      setPath(window.location.pathname);
    }
  });



  return (
    <div className="App">
      <div className="container">

      </div>
    </div>
  );
}

export default App;
