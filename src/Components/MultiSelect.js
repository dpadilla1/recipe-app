import React, { Component } from 'react'
import Select from 'react-select';


class MultiSelect extends Component {
    constructor(props){
        super(props)
        this.state = {
          dropDownOpt : [],
          id: "",
          email: '',
          allTags: [],
          selectedTags: []
        }
      }
     
      onChange = (event) => {
       this.setState(
         {
            selectedTags: event
          }, () => {
              this.props.childToParent(this.state.selectedTags);
          }
        )
      }
     
      componentDidMount(){
        //   this.setState({
        //       allTags: this.props.allTags
        //   })
      }

  render() {
      console.log(this.props.allTags)
    return (
        <div>
        <Select 
           options={this.props.allTags} 
           onChange={this.onChange}
           isMulti
           placeholder='tags...'
        />
      </div>
    )
  }
}

export default MultiSelect;