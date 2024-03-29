import React, { Component } from 'react'

/* ###################### */
/* ##### Search bar ##### */
/* ###################### */

// need a component class here
// since we are using `refs`
class Search extends Component {
  render() {
    const { filterVal, filterUpdate} = this.props
    return (
      <form>
        <input 
          style={{'width':'100%'}}
          type='text'
          ref='filterInput'
          placeholder='Search by Name...'
          // binding the input value to state
          value={filterVal}
          onChange={() => {
           filterUpdate(this.refs.filterInput.value) 
          }}
        /> 
      </form>
    )
  }
}

export default Search;