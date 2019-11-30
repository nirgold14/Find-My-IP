import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './earth.png'

// App Components
import ActionBar from '../ActionBar/ActionBar'
import ResultsSection from '../ResultsSection/ResultsSection'

function App() {

  const [IP_Data, set_IP_Data] = useState('')                         //| Data from IPdata server
  const [imgClass, setImgClass] = useState('img-fluid logo-img')      //| Landing img shown or not
  const [ResultsShowStatus, setResultsShowStatus] = useState(false)   //| Results Section shown or not


  /** displayResults(data)
   * This function is sent as props to the component: `ActionBar`.
   * Invoked when one of the search buttons is clicked.
   * Set the state with the new Data from the server and toggle the logo <--> Results Screen if it's the first time.
   */
  function displayResults(data) {

    set_IP_Data(data)

    if (imgClass !== 'hide') {
      setImgClass('hide')
      setResultsShowStatus(true)
    }
  }

  return (
    <div className="App">
      <div className="Header">
        Find My IP
     </div>
      <ActionBar displayFunc={displayResults} />
      <img src={logo} className={imgClass} />
      <ResultsSection show={ResultsShowStatus} data={IP_Data} />

    </div>
  );
}

export default App;
