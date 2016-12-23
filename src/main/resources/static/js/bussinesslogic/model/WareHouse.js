/**
 * Created by sjain on 12/11/2016.
 */
var $ = require('jquery');

const DEFAULT_TIMEOUT = 10000;
const url = "https://product-cat.herokuapp.com/warehouse";
let output = '';
class WareHouse {

    getDetails(formData) {
        // $.ajax({
        //      type: 'POST',
        //     url: url,
        //     data: formData,
        //     contentType: 'application/json',
        //     success: function (data) {
        //         console.log('url:' + url);
        //         console.log('success:' + data[0].warehouseNumber);
        //         output=data;
        //     },
        //     error: function () {
        //         console.log('failed to register');
        //     }
        // })

        $.ajax({
            type: 'GET',
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

        return output;
    }
}
module.exports =  new WareHouse();