/**
 * Created by smita on 12/21/16.
 */

var  React = require("react") ;




const SearchResults = React.createClass({


    render: function(){

        var values = this.props.results.map(function(value){
            return (
                <div>
                                      <span>{value.customerName }  </span>
                                      <span>{value.warehouseNumber }  </span>
                                      <span>{value.date }  </span>
                    <button> book</button>
                    <br></br>
                    <div>-------------------------------------------------</div>
                </div>
            );
        });

        return (
            <div className="container">
                {/*{this.props.results.map(function(name, index){*/}
                    {/*return <li key={ index }>{name}</li>;*/}
                {/*})}*/}
                    <br></br>
                <br></br>
                        <div>************************************</div>
                    <div>Welcome to search results</div>
                <div>
                    <span>Customer Name  </span>
                    <span>Warehouse Number   </span>
                    <span>Date  </span>
                    <button> book</button>
                </div>

                {/*{JSON.stringify(this.props.results)};*/}
                {values};

            </div>
        );
    }


});
module.exports= SearchResults;
