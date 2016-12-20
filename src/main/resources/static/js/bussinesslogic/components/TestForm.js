/**
 * Created by sjain on 12/5/2016.
 */

var  React = require("react") ;
var ViewTestForm =  require("../../view/FormView");
const ResolveAvailability = require("../services/Details");

const OBJECT_PROP_DEFAULTS = {
    defaultValues: {
        wareHouseName: "",
        wareHouseNumber: "",
        wareHouseBooked:""

    },

    dynamicContent: {
        wareHouseNameLabel: "Enter Name",
        wareHouseNumberLabel: "WareHouse Number",
        wareHouseBookedLabel : "Booked",
    }
};

const TestForm = React.createClass({

    getDefaultProps() {
        return {
            defaultValues: OBJECT_PROP_DEFAULTS.defaultValues,
            dynamicContent: OBJECT_PROP_DEFAULTS.dynamicContent,
        }
    },

    getInitialState(){
        const {wareHouseName, wareHouseNumber, wareHouseNameLabel, wareHouseNumberLabel}
            = this.preserveObjectPropDefaults("defaultValues");
        return {
            wareHouseName, wareHouseNumber, wareHouseNameLabel, wareHouseNumberLabel
        };
    }
    ,

    preserveObjectPropDefaults(key) {
        const obj = Object.assign({}, OBJECT_PROP_DEFAULTS[key], this.props[key]);

        // No deep clone utility available. Cloning all child objects of parent, 1 level deep only.
        for (const prop in obj) {
            if (obj[prop] instanceof Object) {
                obj[prop] = Object.assign({}, OBJECT_PROP_DEFAULTS[key][prop], this.props[key][prop]);
            }
        }

        return obj;
    },

    OnSubmitHandler(e){
        e.preventDefault();
        const formDataFields =  {
            "customerName": this.state.wareHouseName,
            "warehouseNumber": this.state.wareHouseNumber
        }

        console.log(formDataFields);

        // const responsePromise = new Promise((resolve,reject) =>{
          var data =  ResolveAvailability(formDataFields)
                // .then(response => {
                //     if (!response.ok) {
                //         return Promise.reject()
                //     } else {
                //         console.log(response.body);
                //         resolve("Stuff worked!");
                //         console.log(response.get(0).productType);
                //     }
                // })
                // .catch(err => {
                //     reject("It broke");
                // })



        // });
        console.log(data);

    },

    OnChangeHandler(e){
        e.preventDefault();
            this.setState({warehouseNumber: e.value});
    },

    OnChangeHandler(e){
        e.preventDefault();
        this.setState({warehouseNumber: e.value});
    },

    render(){

        const dynamicContent = this.preserveObjectPropDefaults("dynamicContent");
        return (
            <div>
                <ViewTestForm
                    wareHouseName={this.state.wareHouseName}
                    wareHouseNumber={this.state.wareHouseNumber}
                    wareHouseBooked={this.state.wareHouseBooked}
                    dynamicContent={dynamicContent}
                    buttonText="submit"
                    onSubmit={this.OnSubmitHandler}
                    onChangeName={this.OnChangeHandler}
                    onChangeNumber= {this.props.onChangeNumber}
                ></ViewTestForm>
            </div>
        );
    }

});
module.exports =  TestForm;


