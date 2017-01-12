/**
 * Created by sjain on 12/5/2016.
 */


var  React = require("react") ;
var $ = require('jquery');
var ViewTestForm =  require("../../view/FormView");
var SearchResults =  require("../../view/SearchResults");
var HeaderSection =  require("../../view/HeaderSection");
const ResolveAvailability = require("../services/Details");

var  searchParameter = [
    'Customer Name',
    'Warehouse Number',
    'Date',
    'All',
];

const OBJECT_PROP_DEFAULTS = {
    defaultValues: {
        wareHouseName: "",
        wareHouseNumber: "",
        wareHouseBooked:"",
        searchRes:[],
        selected : "",
        searchParameters : [
        'Customer Name',
        'Warehouse Number',
        'Date'
    ]

    },

    dynamicContent: {
        wareHouseNameLabel: "Customer Name",
        wareHouseNumberLabel: "WareHouse Number",
        wareHouseBookedLabel : "Date",
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
    },

    generateURL(){
      let url = "https://product-cat.herokuapp.com/warehouse/" + this.state.selected + "/" + this.state.wareHouseName;
        return url;
    },

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
        console.log(this.state.wareHouseNumber)
        const formDataFields = ({
            "customerName": this.state.wareHouseName,
            "warehouseNumber":this.state.wareHouseNumber
        })

        // console.log(formDataFields);

        // const responsePromise = new Promise((resolve,reject) =>{
        let url = this.generateURL();
          // var data =  ResolveAvailability(url)
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
        self=this;
        $.ajax({
            type: 'GET',
            url: url,
            contentType: 'application/json',
            success: function (data) {
                console.log('url:' + url);
                console.log('success:' + data[0].warehouseNumber);
                self.setState({searchRes: data});

                // output=data;
                // console.log('output:' + output);
            },
            error: function () {
                console.log('failed to register');
            }
        })


        // });
        //console.log(data);



    },

    OnChangeHandler(e){
        e.preventDefault();
            this.setState({wareHouseName: e.target.value});
    },

    OnChangeHandler1(e){
        e.preventDefault();
        this.setState({wareHouseNumber: e.target.value});
    },


    getSearchParameters: function() {
        return searchParameter.map( (X) => <option>{X}</option>)
    },

    onChangeSelect: function(e){
        this.setState({selected: e.target.value});
    },

    render(){

        const dynamicContent = this.preserveObjectPropDefaults("dynamicContent");
        return (
            <div>
                {/*<button>Find All</button>*/}
                <HeaderSection></HeaderSection>
                <ViewTestForm
                    wareHouseName={this.state.wareHouseName}
                    wareHouseNumber={this.state.wareHouseNumber}
                    wareHouseBooked={this.state.wareHouseBooked}
                    dynamicContent={dynamicContent}
                    buttonText="Search  "
                    onSubmit={this.OnSubmitHandler}
                    onChangeName={this.OnChangeHandler}
                    onChangeNumber= {this.OnChangeHandler1}
                    formSubmit ="value"

                    onChangeSelect ={this.onChangeSelect}
                    selected = {this.state.selected}
                    s1 = {this.getSearchParameters()}

                ></ViewTestForm>
                {this.state.searchRes!= null ?
                <SearchResults results={this.state.searchRes}></SearchResults>:null}
            </div>
        );
    }

});
module.exports =  TestForm;


