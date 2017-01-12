/**
 * Created by smita on 12/21/16.
 */

var  React = require("react") ;




const SearchResults = React.createClass({


    render: function(){

        var values = this.props.results.map(function(value){
            return (

                <div className="row searchResRow">
                    <div className="col-sm-4">{value.customerName}</div>
                    <div className="col-sm-4">{value.warehouseNumber}</div>
                    <div className="col-sm-4">{value.date}</div>
                </div>

                // <div>
                //                       <span>{value.customerName }  </span>
                //                       <span>{value.warehouseNumber }  </span>
                //                       <span>{value.date }  </span>
                //     <button> book</button>
                //     <br></br>
                //     <div>-------------------------------------------------</div>
                // </div>
            );
        });

        return (
            <div className="container searchResult">
                <h3 className="searchResHeading">Search Results</h3>
                <div>
                <div className="row searchResHeader">
                    <div className="col-sm-4">Customer Name</div>
                    <div className="col-sm-4">Warehouse Number</div>
                    <div className="col-sm-4">Date</div>
                </div>
                    </div>



                {/*{this.props.results.map(function(name, index){*/}
                    {/*return <li key={ index }>{name}</li>;*/}
                {/*})}*/}
                    {/*<br></br>*/}
                {/*<br></br>*/}
                        {/*<div>************************************</div>*/}
                    {/*<div>Welcome to search results</div>*/}
                {/*<div>*/}
                    {/*<span>Customer Name  </span>*/}
                    {/*<span>Warehouse Number   </span>*/}
                    {/*<span>Date  </span>*/}
                    {/*<button> book</button>*/}
                {/*</div>*/}

                {/*{JSON.stringify(this.props.results)};*/}
                {values}

            </div>
        );
    }


});
module.exports= SearchResults;
