/**
 * Created by sjain on 12/5/2016.
 */

var  React = require("react") ;
const WarehouseMainForm = React.createClass({


    render(){
        return(
            <div className="container-fluid tableFormat">
            <div className="row">
                <div className="col-sm-4">
                <label id="address-label" htmlFor="address-label"
                       className=""
                       >{this.props.label}
                </label>
                </div>
                <div className="col-sm-8">
                <input
                    type="text"
                    placeholder={this.props.placeHolderText}
                    className=""
                    onChange={this.props.onChange}
                ></input>
                </div>
            </div>
            </div>
        );
    }

});

module.exports = WarehouseMainForm;