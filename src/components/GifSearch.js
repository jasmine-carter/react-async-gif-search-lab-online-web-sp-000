import React, { Component } from 'react';


class GifSearch extends Component {

  state = {
    query: ""
  }


handleSubmit = event => {
  event.preventDefault()
  this.props.fetchGifs(this.state.query)
}

render() {
  return (
  <div>
    <form onSubmit={this.state.handleSubmit}>
      <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
      <button>Search that gif!</button>
    </form>
  </div>
  )
}

}
export default GifSearch
