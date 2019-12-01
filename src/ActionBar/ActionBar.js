import React, { useState, useEffect } from 'react'
import './ActionBar.css';

/*ActionBar Services*/
import httpService from '../services/httpService'
let http = new httpService();

function ActionBar(props) {
    /**Props:
     *   ~ displayFunc : a function that is used by the parent component  which will collect the data and display it
     **/

    const [inputValue, setInputValue] = useState("")

    /** async IPsearchClick(ipAddress)
      * This function Invoked when one of the search buttons is clicked.
      * Async function that wait for the response from the server before sending the new data to `APP` component.
      * 
      * Checks if the request is for specific IP (sent as input), or personal IP which doesn't need a paramater.
      */
    async function IPsearchClick(ipAddress) {

        let data = await http.getDATA(ipAddress)
        props.displayFunc(data)

    }

    return (

        <div className="Action-Bar-Container">
            <button class="btn btn-success personal_IP_btn" type="button" id='private' onClick={() => IPsearchClick("")}>Find My IP!</button>
            <div class="input-group mb-3 specific_IP_wrapper">
                <input type="text" class="form-control specific_IP_input" id='IP_input' placeholder="Find a Specific IP" onChange={e => setInputValue(e.target.value)} value={inputValue} />
                <div class="input-group-append">
                    <button class="btn btn-success specific_IP_btn" type="button" id='specific' onClick={() => IPsearchClick(`/${inputValue}`)}>-></button>
                </div>
            </div>
        </div>

    );
}
export default ActionBar;