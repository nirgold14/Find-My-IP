import React from 'react'
import './ResultsSection.css';

// ResultsSection Components
import GoogleMap from '../GoogleMap/GoogleMap'
import { notDeepEqual } from 'assert';

function ResultsSection(props) {
    /** Props: 
        *     ~ data: The response from the server (eror message || data Object)
        *     ~ show: Boolean value that indicate if the component will be shown or not (true || false)
        */

    /** prepareData()
     * This function checks if:
     *      ~ The response is an error msg --> Display it to the user
     *      ~ The response is valid data   --> Create a `newData` object holding the neccessry information,
     *                                         and display it to the user.
    */
    function prepareData() {
        if (props.data.message) {
            return (<h2>{props.data.message}</h2>)
        } else {
            let newData = {
                country: props.data.country_name,
                city: props.data.city,
                currency: props.data.currency.name,
                flag: props.data.flag,
            }
            return howToDisplayResults(newData)
        }
    }

    /** howToDisplayResults(newData)
     * This Function decide how to display the data fetched from the server.
     */
    function howToDisplayResults(newData) {
        return (
            <div className="resultsDiv">
                <div className="resultsFeatureWrapper IPinfo">
                    <p>Country:  {newData.country}</p>
                    <p>City:     {newData.city}</p>
                    <p>Currency: {newData.currency}</p>
                    <img src={newData.flag} className='flag_img' />
                </div>
                <div className="resultsFeatureWrapper GoogleMapResult">
                    <GoogleMap data={newData} />
                </div>
            </div>
        )
    }

    return (

        <div className="Results-Container">
            {props.show &&
                prepareData()
            }
        </div>

    );
}
export default ResultsSection;