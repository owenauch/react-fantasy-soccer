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
      players: null,
      loadedPlayerData: false,
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

  addPlayerDataToState = (playerData) => {
    this.setState({ players: playerData, loadedPlayerData: true })
  }

  // given a position and a value, updates state of that position
  // with player's name
  updateValue = (position, value) => {
    this.setState({[position]: value})
  }

  render () {
    return (
      <div>
        <Fetcher
          addPlayerDataToState={this.addPlayerDataToState}
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
    )
  }
}
