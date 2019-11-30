import React from 'react'
import './GoogleMap.css';

function GoogleMap(props) {
    /** Props
    *    ~ data: {country, city, currency, flag}
    **/

    let query = prepareQuery()

    /** prepareQuery()
    * This function using the props to prepare the query for the GoogleMap API.
    * Sometimes the city is N/A and in this case we will ignore this paramater.
    * The query is used by the Iframe tag in order to get the requested map display.
    */
    function prepareQuery() {
        let city, country
        country = props.data.country.split(" ").join("+")

        if (props.data.city) {
            city = props.data.city.split(" ").join("+")
        } else {
            city = ""
        }
        return `https://www.google.com/maps/embed/v1/place?key=AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk&q=${city},${country}`
    }

    return (

        <iframe className="googleIframe"
            src={query}
        />

    );
}
export default GoogleMap;
