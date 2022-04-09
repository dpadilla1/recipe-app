import React from 'react';
import axios from 'axios';
//import '../stylesheets/TestQuery1.css';
//import Navbar from "../components/navbar.component";
//import CanvasJSReact from '../CanvasJS/canvasjs.react';
//var CanvasJS = CanvasJSReact.CanvasJS;
//var CanvasJSChart = CanvasJSReact.CanvasJSChart;

import Search from "./Components/Search";
import CardList from "./Components/CardList";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            favorites: [],
            results: [{
                "ID" : "1",
                "Name" : "Derek",
                "Tags" : "fat, ugly, poor",
                "DocsLink" : "https://docs.google.com/document/d/14FUB4UkJ1DpqQlIbO0uHHWx4hiLDK777Zc9AhlgJ-u0/edit#bookmark=id.jqjib22kmuoo"
            }, {
                "ID" : "2",
                "Name" : "Gavin",
                "Tags" : "buff, sexy, rich",
                "DocsLink" : "https://docs.google.com/document/d/14FUB4UkJ1DpqQlIbO0uHHWx4hiLDK777Zc9AhlgJ-u0/edit#bookmark=id.3v5azsnre1rr"
            }],
            results2: null,
            dataPoints1: [{tType: 'loading'}],
            dataPoints2: [{tType: 'loading'}],
            dataPoints3: [{tType: 'loading'}]
        }
    }

    async componentDidMount() {
        this.getResults();
    }

    getResults() {
        let url2 = 'https://catfact.ninja/fact';
        axios.get(url2)
            .then(response => {
                this.setState({
                    results2: response.data
                }, () => {
                    console.log("API RESULTS: ", response.data.fact);
                })
            })
            .catch(error => {
                console.log("AXIOS FAILED AXIOS FAILED AXIOS FAILED------------" + error);
            })

        //let url3 = 'https://sheet.best/api/sheets/dce16b23-ba7f-4705-a5fe-1c922f431c17';
        /* axios.get(url2)
            .then(response => {
                    this.setState({
                        results: response.data
                    }, () => {
                        console.log("API RESULTS: ", response.data.fact);
                    })
                })
                .catch(error => {
                    console.log("AXIOS FAILED AXIOS FAILED AXIOS FAILED------------" + error);
                })*/

        //var chart = this.chart;
        let url = 'http://localhost:5000/api/trendquery3';
        /*axios.get(url)
            .then(res => {
                this.setState({
                    results: res.data
                }, () => {
                    //display data for testing
                    console.log("MY RESULTS: ", res);
                    //insert data into datapoints for chart
                    let a = [];
                    let b = [];
                    let c = [];
                    for(var i=0; i< (res.data.length / 3); i++) {
                        a.push({
                            y: res.data[i].C,
                            label: res.data[i].MONTH,
                            tType: res.data[i].TURNOVERTYPE
                        })
                    }
                    for(var j= (res.data.length / 3); j< (res.data.length / 3 * 2); j++) {
                        b.push({
                            y: res.data[j].C,
                            label: res.data[j].MONTH,
                            tType: res.data[j].TURNOVERTYPE
                        })
                    }
                    for(var k= (res.data.length / 3 * 2); k< res.data.length; k++) {
                        c.push({
                            y: res.data[k].C,
                            label: res.data[k].MONTH,
                            tType: res.data[k].TURNOVERTYPE
                        })
                    }
                    this.setState({
                        dataPoints1: a,
                        dataPoints2: b,
                        dataPoints3: c
                    });
                    chart.render();
                })
            })
            .catch(error => {
                console.log("AXIOS FAILED AXIOS FAILED AXIOS FAILED------------" + error);
            })*/
    }

    // update filterText in state when user types 
    filterUpdate(value) {
        this.setState({
        filterText: value
        });
    }

    // add clicked name ID to the favourites array
    addFavorite(id) {
        const newSet = this.state.favorites.concat([id])
        this.setState({
            favorites: newSet
        });
    }

    // remove ID from the favourites array
    deleteFavorite(id) {
        const { favorites } = this.state
        const newList = [
        ...favorites.slice(0, id),
        ...favorites.slice(id + 1)
        ]
        this.setState({
            favorites: newList
        })
    }

    render() {
        const hasSearch = this.state.filterText.length > 0;
        //Table Entries
        var results2 = null;
        /*if(this.state.results != null) {
            if(this.state.results.length > 0) {
                results = this.state.results.map((r,i) => {
                    return (
                        <tr key={i}>
                            <th scope="row">{i}</th>
                            <td>{r.FACT}</td>
                        </tr>
                    )
                })
            }
        }*/
        console.log("RESULTS: " + this.state.results2)
        if(this.state.results2 != null){
            results2 = this.state.results2.fact
        }
        
        

        return (

            <div>
                <div className="container">
                    <br/>
                    <header className='text-center'>
                        <Search
                            filterVal={this.state.filterText}
                            filterUpdate={this.filterUpdate.bind(this)}
                        /> <br/>
                        {/* 
                            Show only if user has typed in search.
                            To reset the input field, we pass an 
                            empty value to the filterUpdate method
                        */}
                        {hasSearch &&
                            <button
                            className='text-center'
                            onClick={this.filterUpdate.bind(this, '')}>
                            Clear Search
                            </button>
                        }
                    </header>
                    <br/>
                    
                    {/*<h5 className="text-center">Trend Query 3</h5><br/>*/}
                    <br/><br/>
                    <main>
                        <CardList 
                            data={this.state.results}
                            filter={this.state.filterText}
                        />
                    </main>


                    <br/><br/><br/>

                    {/*<h4 className="text-center">Teams</h4> */ }
                    <div className="timesheet-table">
                        <h5 className="text-center">Displaying results for Cat Facts API</h5>
                    
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Fact</th>
                                    <th>-</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                   <td>{results2}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    };
}

export default MainPage;