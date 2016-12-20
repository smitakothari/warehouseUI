/**
 * Created by sjain on 12/11/2016.
 */
var $ = require('jquery');

const DEFAULT_TIMEOUT = 10000;
const url = "http://localhost:9000/warehouse";
let output = '';
class WareHouse {

    getDetails(formData) {
        $.ajax({
            type: 'POST',
            url: url,
            data: formData,
            contentType: 'application/json',
            success: function (data) {
                console.log('url:' + url);
                console.log('success:' + data[0].warehouseNumber);
                output=data;
            },
            error: function () {
                console.log('failed to register');
            }
        })

        //     return this.get(`https://product-cat.herokuapp.com/products`)
        //         .acceptJson()
        //         .disableDefaultHeaders()
        //         .setTimeout( DEFAULT_TIMEOUT)
        //         .send()
        //         .then(this.parseJson)
        //         .then(this.body)
        //         .then(response => {
        //             console.log("A successful response was received from the server.");
        //             return response;
        //         })
        //         .catch(error =>{
        //             console.log("A failed response was received from the server.");
        //         })
        // }
        return output;
    }
}
module.exports =  new WareHouse();