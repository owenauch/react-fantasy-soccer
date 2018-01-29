import React, { Component } from 'react'

import Fetcher from './Fetcher'
import WeekSelector from './WeekSelector.js'
import LineupScore from './LineupScore.js'
import LineupDetail from './LineupDetail.js'

export default class Lineups extends Component {
  constructor (props) {
    super(props)
    this.state = {
      matchweeks: [],
      matchweek: null,
      scored_rosters: [],
      current_roster: null
    }
  }

  addFetchedDataToState = (field, data) => {
    this.setState({[field]: data})
  }

  // update state when select changes
  handleSelectChange = (event) => {
    this.setState({matchweek: event.target.value})
  }

  // handle state change when lineup detail is closed
  handleCloseDetail = () => {
    this.setState({current_roster: null})
  }

  handleLineupClick = (id) => {
    this.setState({current_roster: id})
  }

  render () {
    // make roster url based on state
    var roster_url = 'http://127.0.0.1:8000/api/matchweek/'
    if (this.state.matchweek) {
      roster_url += this.state.matchweek + '/scored-rosters/'
    }

    return (
      <div>
        <Fetcher
          addFetchedDataToState={this.addFetchedDataToState}
          url='http://127.0.0.1:8000/api/matchweeks/'
          field='matchweeks'
        />
        {this.state.matchweek && <Fetcher
          addFetchedDataToState={this.addFetchedDataToState}
          url={roster_url}
          field='scored_rosters'
        />}
        <WeekSelector
          matchweeks={this.state.matchweeks}
          matchweek={this.state.matchweek}
          handleSelectChange={this.handleSelectChange}
        />
        {this.state.scored_rosters.map((item, key) => {
          return (
            <LineupScore
              roster={item}
              key={key}
              handleClick={this.handleLineupClick}
              rosters={this.state.scored_rosters}
              current_roster={this.state.current_roster}
              handleClose={this.handleCloseDetail}
            />
          )
        })}
      </div>
    )
  }
}
