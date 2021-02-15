import React, {useEffect, useState} from 'react';
import { css } from "@emotion/core";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import PuffLoader from "react-spinners/PuffLoader";

import './App.css';


import HomePage from './pages/HomePage';



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
    }, 4000)
  },[])
  return (

    <div className ="App">
    
    {
      loading ?  <div className="pramodize-loading"><PuffLoader color={color} loading={loading} css={override} size={50} /></div> :

      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch>
      </Router>
    }

    </div>

  );
}

export default App;
