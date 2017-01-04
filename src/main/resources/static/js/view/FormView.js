/**
 * Created by sjain on 12/4/2016.
 */
var  React = require("react") ;

var WarehouseMainForm = require("./WarehouseMainForm");
var SearchMainForm = require("./SearchMainForm");



const ViewTestForm = React.createClass({

    formSubmit(e){
        this.props.onSubmit(e);
    },

    render(){
        return (
            <div className="container">
                <div className="searchMainDiv">
            <form  className="" onSubmit={this.formSubmit}>

                <SearchMainForm label={this.props.dynamicContent.wareHouseNameLabel}
                                   placeHolderText={this.props.wareHouseName}
                                   onChange = {this.props.onChangeName}
                            />

                <button type="submit" className="localization__input-submit btn btn-info searchBtn"
                        data-submit>{this.props.buttonText}
                    <span className="glyphicon glyphicon-search"></span>
                </button>


            </form>
                </div>
            </div>
        );
    }


});
module.exports= ViewTestForm;
