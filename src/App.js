import React, { Component } from 'react'
import Fetcher from './Fetcher.js'
import AutoPlayerField from './AutoPlayerField.js'
import Autocomplete from 'react-autocomplete'

import styled from 'styled-components'

const FormLabel = styled.p`
  color: blue;
  font-size: 12px;
`

export default class App extends Component {
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
          <select
            name='matchweek'
            value={this.state.matchweek}
            onChange={this.handleSelectChange}
          >
          {this.state.matchweeks.map((item,key) => {
            return (<option
              key={item.id}
              value={item.id}>
              Week {item.week_number}: {item.start_date} to {item.end_date}
            </option>)
          })}
          </select>
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
      </div>
    )
  }
}
