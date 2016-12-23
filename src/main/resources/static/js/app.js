var React = require('react');
const ReactDOM = require('react-dom');
var AppTest = require('./AppTest');
var TestForm = require('./bussinesslogic/components/TestForm');
var FindWarehouseForm = require('./bussinesslogic/components/FindWarehouseForm')
var welcomeText = React.createClass({

    getInitialState: function () {
         return {
                productData: '',
         }
    },


    render: function () {
    return (
    <div>
        <div>
            {/*<AppTest></AppTest>*/}
            <TestForm></TestForm>
            {/*<FindWarehouseForm></FindWarehouseForm>*/}
        </div>
    </div>
                    );
    }
    });
    var element = React.createElement(welcomeText);
        ReactDOM.render(element, document.getElementById("test"));