import 'whatwg-fetch'; //fetch resources asynchronously
const APIkey1 = 'b0b8cd08bd4c1824cd4df64ab44f6975fc71e6ba25914603fe048c61'
const APIkey2 = '751a89233e75cb2c4b04e3d8733e9f25f559f45b11f560a30aa8da57'
const APIkey3 = 'c91022a315f8c81aa37071cd9e7632f4b1dd60243a9d22c2097bbaea'
const APIkey4 = 'test'
let instance = null;

/** Http Service
 * This Singelton class's responsibilty is to allow controlled,smooth and easy interface
 * for server requests.
 * Using 'fetch' to create HTTP Requests.
 **/

class HttpService {

    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    /** getDATA(ip)
     *  Type: HTTP Request ~ GET
     *  Paramaters: ip ~ value if requested for specific ip, or empty for personal IP.
     *  Response: Json object with data about the IP address (country, city....) 
     *  
     *  Possible Errors:
     *      ~ Private ip: 127.0.0.1
     *      ~ UnValid IP address syntax (not a IPv4 || IPv6 address): 181131.13218.XCBU
     *      ~ Expired API key: If happend, change the `APIkey` value 
     */
    async getDATA(ip) {
        try {
            let response = await fetch(`https://api.ipdata.co${ip}?api-key=${APIkey1}`);
            let data = await response.json()
            return data;
        } catch (err) {
            return { message: err.message + ", Check if it is a private address" };
        }
    }
}

export default HttpService;