import React from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';

import Search from "./Components/Search";
import CardList from "./Components/CardList";
import MultiSelect from "./Components/MultiSelect";
import testdata from "./Data/testdata.json";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            favorites: [],
            results: testdata.testdata,
            allTags: [],
            selectedTags: []
        }
    }

    async componentDidMount() {
        this.getResults();
        this.getTags();
    }

    getResults() {
        console.log("Get Results Hit.");
        
        //let url3 = 'https://sheet.best/api/sheets/dce16b23-ba7f-4705-a5fe-1c922f431c17';
        /*axios.get(url3)
            .then(response => {
                    this.setState({
                        results: response.data
                    }, () => {
                        console.log("SHEETS: ", response.data);
                    })
                })
                .catch(error => {
                    console.log("AXIOS FAILED AXIOS FAILED AXIOS FAILED------------" + error);
                })*/
    }

    getTags() {
        let allTagsTemp = [];
        let allTagsCheck = [];
        this.state.results.forEach(meal => {
            let tagArr = meal.Tags.toLowerCase().split(', ');
            for (let i = 0; i < tagArr.length; i++) {
                if (!allTagsCheck.includes(tagArr[i])) {
                    allTagsTemp.push({
                        "value": tagArr[i],
                        "label": tagArr[i]
                    });
                    allTagsCheck.push(tagArr[i]);
                }
            }
        });
        this.setState({
            allTags: allTagsTemp
        },() => {
            console.log("Finished Processing Unique Tags Below: ")
            console.log(this.state.allTags)
        });
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

    childToParent = (childData) => {
        this.setState({
            selectedTags: childData
        })
    }

    render() {
        const hasSearch = this.state.filterText.length > 0;
        console.log("RENDERED MainPage");
        console.log("Selected Tags Below: ");
        console.log(this.state.selectedTags);
        
        return (
            <Container>
                <br/>
                <Row>
                    <MultiSelect allTags={this.state.allTags} childToParent={this.childToParent}/>
                </Row>
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
                    <br/><br/><br/>
                    
                        <CardList 
                            data={this.state.results}
                            filter={this.state.filterText}
                        />
                    
                </Row>
            </Container>
        )
    };
}

export default MainPage;