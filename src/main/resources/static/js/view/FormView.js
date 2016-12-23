/**
 * Created by sjain on 12/4/2016.
 */
var  React = require("react") ;

var WarehouseMainForm = require("./WarehouseMainForm");



const ViewTestForm = React.createClass({

    formSubmit(e){
        this.props.onSubmit(e);
    },

    render(){
        return (
            <div className="container">
            <form  className="" onSubmit={this.formSubmit}>

                <WarehouseMainForm label={this.props.dynamicContent.wareHouseNameLabel}
                                   placeHolderText={this.props.wareHouseName}
                                   onChange = {this.props.onChangeName}
                            />
                <WarehouseMainForm label={this.props.dynamicContent.wareHouseNumberLabel}
                                   placeHolderText={this.props.wareHouseNumber}
                                   onChange = {this.props.onChangeNumber}
                />

                <WarehouseMainForm label={this.props.dynamicContent.wareHouseBookedLabel}
                                   placeHolderText={this.props.wareHouseBooked}  />
                <button type="submit" className="localization__input-submit"
                        data-submit>{this.props.buttonText}</button>


            </form>
            </div>
        );
    }


});
module.exports= ViewTestForm;
