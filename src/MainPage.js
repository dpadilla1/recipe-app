import React from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';

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
                "Name" : "Derek Pizza",
                "Tags" : "fat, ugly, poor",
                "DocsLink" : "https://docs.google.com/document/d/14FUB4UkJ1DpqQlIbO0uHHWx4hiLDK777Zc9AhlgJ-u0/edit#bookmark=id.jqjib22kmuoo",
                "SlidesLink" : "slide=id.g123c42ac328_0_45",
                "img" : "https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/wmzltkrx/71623eb0-5357-4fc4-8759-167961cf0dbf.jpg"
            }, {
                "ID" : "2",
                "Name" : "Gavin Pizza",
                "Tags" : "buff, sexy, rich",
                "DocsLink" : "https://docs.google.com/document/d/14FUB4UkJ1DpqQlIbO0uHHWx4hiLDK777Zc9AhlgJ-u0/edit#bookmark=id.3v5azsnre1rr",
                "SlidesLink" : "slide=id.g123c42ac328_0_174",
                "img" : "https://w0.peakpx.com/wallpaper/181/86/HD-wallpaper-double-patty-cheeseburger-thumbnail.jpg"
            }],
            results2: null
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
                    console.log("CAT: ", response.data.fact);
                })
            })
            .catch(error => {
                console.log("AXIOS FAILED AXIOS FAILED AXIOS FAILED------------" + error);
            })
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
            <Container>
                <br/>
                <Row>
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
                    <br/><br/>
                    <main>
                        <CardList 
                            data={this.state.results}
                            filter={this.state.filterText}
                        />
                    </main>
                </Row>


                <br/><br/><br/>

                <div className="timesheet-table" style={{ float: 'none' }} >
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
            </Container>
        )
    };
}

export default MainPage;