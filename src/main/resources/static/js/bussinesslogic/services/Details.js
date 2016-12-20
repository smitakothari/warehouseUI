/**
 * Created by sjain on 12/11/2016.
 */

const WareHouse = require("../model/WareHouse");
const $ = require('jquery');

 const ResolveAvailability = (formdata) =>{


     const url = "https://product-cat.herokuapp.com/products";
     const DEFAULT_TIMEOUT = 10000;


    // const detailsPromise = new Promise((resolve, reject) => {

    //     $.ajax({
    //         type: 'GET',
    //         url: url,
    //         contentType: 'application/json',
    //         success : function (data) {
    //             console.log('url' + url);
    //             console.log('success' + data);
    //             resolve();
    //         },
    //     error : function () {
    //         console.log('failed to register');
    //         reject();
    //     }
    //     })
    //
    // })

   let output=  WareHouse.getDetails(formdata)

    //     .then(response =>{
    //     console.log("A successful response was received from WareHouseDetals.");
    //         resolve(response);
    // })
    //    .catch(error =>{
    //        console.log("A Failed response was received from WareHouseDetals.");
    //        reject(error);
    //    })

// });
//     return detailsPromise;
     return output;
};
module.exports = ResolveAvailability;

