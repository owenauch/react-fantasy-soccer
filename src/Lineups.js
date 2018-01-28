import React, { Component } from 'react'

import Fetcher from './Fetcher'

export default class Lineups extends Component {
  constructor (props) {
    super(props)
    this.state = {
      matchweeks: [],
      matchweek: null
    }
  }

  addFetchedDataToState = (field, data) => {
    this.setState({[field]: data})
  }

  render () {
    return (
      <div>
        <Fetcher
          addFetchedDataToState={this.addFetchedDataToState}
          url='http://127.0.0.1:8000/api/matchweeks/'
          field='matchweeks'
        />
      </div>
    )
  }
}
