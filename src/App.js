import React, {useEffect, useState} from 'react';
import { css } from "@emotion/core";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import PuffLoader from "react-spinners/PuffLoader";

import './App.css';






const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


function App() {


  const [loading, setLoading] = useState(false);
  let [color] = useState("#1d1d1d");

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  },[])
  return (

    <div className ="App">

    {
      loading ?  (<div className="pramodize-loading"><PuffLoader color={color} loading={loading} css={override} size={50} /></div>) :
      <Router>
          <Switch>
          {/* <Route exact path='/' component={HomePage} /> */}
          <div><HomePage /></div>
          </Switch>
      </Router>

    }

    </div>

  );
}

export default App;
