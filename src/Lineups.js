import React, { Component } from 'react'

import Fetcher from './Fetcher'
import WeekSelector from './WeekSelector.js'

export default class Lineups extends Component {
  constructor (props) {
    super(props)
    this.state = {
      matchweeks: [],
      matchweek: null,
      rosters: []
    }
  }

  addFetchedDataToState = (field, data) => {
    this.setState({[field]: data})
  }

  // update state when select changes
  handleSelectChange = (event) => {
    this.setState({matchweek: event.target.value})
  }

  render () {
    return (
      <div>
        <Fetcher
          addFetchedDataToState={this.addFetchedDataToState}
          url='http://127.0.0.1:8000/api/matchweeks/'
          field='matchweeks'
        />
        <WeekSelector
          matchweeks={this.state.matchweeks}
          matchweek={this.state.matchweek}
          handleSelectChange={this.handleSelectChange}
        />
      </div>
    )
  }
}
