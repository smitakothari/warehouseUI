/**
 * Created by sjain on 12/5/2016.
 */

var  React = require("react") ;
const WarehouseMainForm = React.createClass({


    render(){
        return(
            <div className="row">
                <label id="address-label" htmlFor="address-label"
                       className=""
                       >{this.props.label}
                </label>
                <input
                    type="text"
                    placeholder={this.props.placeHolderText}
                    className=""
                    onChange={this.props.onChange}
                ></input>

            </div>
        );
    }

});

module.exports = WarehouseMainForm;