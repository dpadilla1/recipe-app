import React from 'react';
import axios from 'axios';
//import '../stylesheets/TestQuery1.css';
//import Navbar from "../components/navbar.component";
//import CanvasJSReact from '../CanvasJS/canvasjs.react';
//var CanvasJS = CanvasJSReact.CanvasJS;
//var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: null,
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
                    results: response.data
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

        var chart = this.chart;
        let url = 'http://localhost:5000/api/trendquery3';
        axios.get(url)
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
            })
    }

    render() {
        //Table Entries
        var results = null;
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
        console.log("RESULTS: " + this.state.results)
        if(this.state.results != null){
            results = this.state.results.fact
        }
        
        

        return (

            <div>
                <div className="container">
                    <h5 className="text-center">Trend Query 3</h5><br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                    {/*<h4 className="text-center">Teams</h4> */ }
                    <div className="timesheet-table">
                        <h5 className="text-center">Displaying results for Trend Query 3</h5>
                    
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th>-</th>
                                    <th>Month</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    };
}

export default MainPage;