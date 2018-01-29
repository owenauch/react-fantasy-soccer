import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete'
import styled from 'styled-components'

import Fetcher from './Fetcher.js'
import AutoPlayerField from './AutoPlayerField.js'
import WeekSelector from './WeekSelector.js'

const FormLabel = styled.p`
  color: blue;
  font-size: 12px;
`

const SuccessText = styled.p`
  color: green;
  size: 15px;
`

const FailureText = styled.p`
  color: red;
  size: 15px;
`

export default class LineupSubmission extends Component {
  constructor (props) {
    super(props)
    this.state = {
      players: [{
        "id": 1,
        "name": "Owen Auch",
        "country_code": "Banter Legend",
      }],
      matchweeks: [],

      manager_name:'',
      matchweek: null,
      gk: '',
      gk_sub: '',
      d_one: '',
      d_two: '',
      d_three: '',
      d_four: '',
      d_sub: '',
      m_one: '',
      m_two: '',
      m_three: '',
      m_sub: '',
      f_one: '',
      f_two: '',
      f_three: '',
      f_sub: '',

      submitText: '',
      submitSuccess: false,
      submitFailure: false
    }
  }


  addFetchedDataToState = (field, data) => {
    this.setState({[field]: data})
  }

  // given a field and a value, updates state of that field
  // with the value
  updateValue = (field, value) => {
    this.setState({[field]: value})
  }

  // update state when manager name changes
  handleTextChange = (event) => {
    this.setState({manager_name: event.target.value})
  }

  // update state when select changes
  handleSelectChange = (event) => {
    this.setState({matchweek: event.target.value})
  }

  // handle submit button click
  handleSubmit = (event) => {
    const state = this.state
    fetch('http://127.0.0.1:8000/api/rosters/', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({
        manager_name: state.manager_name,
        week: state.matchweek,
        gk: this.getPlayerIdFromName(state.gk),
        gk_sub: this.getPlayerIdFromName(state.gk_sub),
        d_one: this.getPlayerIdFromName(state.d_one),
        d_two: this.getPlayerIdFromName(state.d_two),
        d_three: this.getPlayerIdFromName(state.d_three),
        d_four: this.getPlayerIdFromName(state.d_four),
        d_sub: this.getPlayerIdFromName(state.d_sub),
        m_one: this.getPlayerIdFromName(state.m_one),
        m_two: this.getPlayerIdFromName(state.m_two),
        m_three: this.getPlayerIdFromName(state.m_three),
        m_sub: this.getPlayerIdFromName(state.m_sub),
        f_one: this.getPlayerIdFromName(state.f_one),
        f_two: this.getPlayerIdFromName(state.f_two),
        f_three: this.getPlayerIdFromName(state.f_three),
        f_sub: this.getPlayerIdFromName(state.f_sub),
      })
    })
    .then((response) => {
      if (response.ok) {
        this.setState({submitSuccess: true, submitFailure: false})
      } else {
        this.setState({submitSuccess: false, submitFailure: true})
      }
    })
  }

  // given a player name, return a player id
  getPlayerIdFromName = (name) => {
    const player = this.state.players.find((item) => {
      return item.name == name
    })
    if (player) {
      return player.id
    } else {
      return -1
    }
  }

  render () {
    return (
      <div>
        <Fetcher
          addFetchedDataToState={this.addFetchedDataToState}
          url='http://127.0.0.1:8000/api/players/'
          field='players'
        />
        <Fetcher
          addFetchedDataToState={this.addFetchedDataToState}
          url='http://127.0.0.1:8000/api/matchweeks/'
          field='matchweeks'
        />
        <div>
          <FormLabel>Manager Name</FormLabel>
          <input type="text" value={this.state.manager_name} onChange={this.handleTextChange} />
          <FormLabel>Matchweek</FormLabel>
          <WeekSelector
            matchweeks={this.state.matchweeks}
            matchweek={this.state.matchweek}
            handleSelectChange={this.handleSelectChange}
          />
          <FormLabel>Goalkeeper</FormLabel>
          <AutoPlayerField
            players={this.state.players}
            value={this.state.gk}
            updateValue={this.updateValue}
            position='gk'
          />
          <FormLabel>Goalkeeper Substitute</FormLabel>
          <AutoPlayerField
            players={this.state.players}
            value={this.state.gk_sub}
            updateValue={this.updateValue}
            position='gk_sub'
          />
          <FormLabel>Defender</FormLabel>
          <AutoPlayerField
            players={this.state.players}
            value={this.state.d_one}
            updateValue={this.updateValue}
            position='d_one'
          />
          <FormLabel>Defender</FormLabel>
          <AutoPlayerField
            players={this.state.players}
            value={this.state.d_two}
            updateValue={this.updateValue}
            position='d_two'
          />
          <FormLabel>Defender</FormLabel>
          <AutoPlayerField
            players={this.state.players}
            value={this.state.d_three}
            updateValue={this.updateValue}
            position='d_three'
          />
          <FormLabel>Defender</FormLabel>
          <AutoPlayerField
            players={this.state.players}
            value={this.state.d_four}
            updateValue={this.updateValue}
            position='d_four'
          />
          <FormLabel>Defender Substitute</FormLabel>
          <AutoPlayerField
            players={this.state.players}
            value={this.state.d_sub}
            updateValue={this.updateValue}
            position='d_sub'
          />
          <FormLabel>Midfielder</FormLabel>
          <AutoPlayerField
            players={this.state.players}
            value={this.state.m_one}
            updateValue={this.updateValue}
            position='m_one'
          />
          <FormLabel>Midfielder</FormLabel>
          <AutoPlayerField
            players={this.state.players}
            value={this.state.m_two}
            updateValue={this.updateValue}
            position='m_two'
          />
          <FormLabel>Midfielder</FormLabel>
          <AutoPlayerField
            players={this.state.players}
            value={this.state.m_three}
            updateValue={this.updateValue}
            position='m_three'
          />
          <FormLabel>Midfielder Substitute</FormLabel>
          <AutoPlayerField
            players={this.state.players}
            value={this.state.m_sub}
            updateValue={this.updateValue}
            position='m_sub'
          />
          <FormLabel>Forward</FormLabel>
          <AutoPlayerField
            players={this.state.players}
            value={this.state.f_one}
            updateValue={this.updateValue}
            position='f_one'
          />
          <FormLabel>Forward</FormLabel>
          <AutoPlayerField
            players={this.state.players}
            value={this.state.f_two}
            updateValue={this.updateValue}
            position='f_two'
          />
          <FormLabel>Forward</FormLabel>
          <AutoPlayerField
            players={this.state.players}
            value={this.state.f_three}
            updateValue={this.updateValue}
            position='f_three'
          />
          <FormLabel>Forward Substitute</FormLabel>
          <AutoPlayerField
            players={this.state.players}
            value={this.state.f_sub}
            updateValue={this.updateValue}
            position='f_sub'
          />
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
        {this.state.submitSuccess && <SuccessText>SUCCESS!</SuccessText>}
        {this.state.submitFailure && <FailureText>Something went wrong.
          Check that your lineup is correct.</FailureText>}
      </div>
    )
  }
}
