var React = require('react');
const ReactDOM = require('react-dom');
var AppTest = require('./AppTest');
var TestForm = require('./bussinesslogic/components/TestForm')
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
        </div>
    </div>
                    );
    }
    });
    var element = React.createElement(welcomeText);
        ReactDOM.render(element, document.getElementById("test"));