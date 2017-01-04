/**
 * Created by smita on 1/2/17.
 */

var  React = require("react") ;



var searchParameters = [
    'Customer Name',
    'Warehouse Number',
    'Date'
];

const SearchMainForm = React.createClass({

    // getInitialState:function () {
    //
    //
    //    return {searchParameters : searchParameters};
    //
    // },

    getSearchParameters: function() {
        return searchParameters;
    },

    render(){

        s1 =function (X) {
            return <option>{X}</option>

        }

        return(
            <div className="container-fluid tableFormat">
                <div className="row">
                    <div className="col-sm-4">
                        <select >
                            {this.getSearchParameters().map(s1)}
                        </select>
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

module.exports = SearchMainForm;
