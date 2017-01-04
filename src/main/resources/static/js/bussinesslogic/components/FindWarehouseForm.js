/**
 * Created by smita on 12/20/16.
 */

var  React = require("react") ;
const $ = require('jquery');4
const url = "http://localhost:9000/warehouse";

var FindWarehouseForm = React.createClass({

    OnSubmitFindWarehouse: function(){
        $.ajax({
           type: 'GET',
            contentType: 'application/json',
            url: url,
            success: function(data){
                console.log(data[0].wareHouseNumber);
            },
            error: function () {
                console.log('failed to connect');
            }
        });
    },

    render: function(){
        return(
          <form onSubmit={this.OnSubmitFindWarehouse}>
              <button type="submit" >Find Warehouse</button>
          </form>
        );
    }
});

module.exports =  FindWarehouseForm;
