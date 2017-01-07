/**
 * Created by sjain on 12/11/2016.
 */
var $ = require('jquery');

const DEFAULT_TIMEOUT = 10000;


class WareHouse {



    getDetails(url) {
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
  // let data =[];
        // data = Object.keys(formData).map(key => formData[key])
        //
        // const url = "http://localhost:9000/warehouse/wareHouseNumber/" +data[0];
        // console.log(Object.keys(formData).map(key => formData[key]));
        console.log('url:' + url);
        function testAjax() {

            return $.ajax({
                type: 'GET',
                url: url,
                contentType: 'application/json',
                success: function (data) {
                    console.log('url:' + url);
                    console.log('success:' + data[0].warehouseNumber);

                    // output=data;
                    // console.log('output:' + output);
                },
                error: function () {
                    console.log('failed to register');
                }
            })
        }

        var output = testAjax();
        return output;
    }
}
module.exports =  new WareHouse();