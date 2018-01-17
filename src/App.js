import React, { Component } from 'react'
import Fetcher from './Fetcher.js'
import Autocomplete from 'react-autocomplete'

// import styled from 'styled-components'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      players: null,
      loadedPlayerData: false,
      value: ''
    }
  }

  addPlayerDataToState = (playerData) => {
    this.setState({ players: playerData, loadedPlayerData: true })
    console.log(playerData)
  }

  render () {
    return (
      <div>
        <Fetcher
          addPlayerDataToState={this.addPlayerDataToState}
        />
        <Autocomplete
          getItemValue={(item) => item.name}
          items={this.state.players}
          shouldItemRender={(player, value) => {
            return (player.name.toLowerCase().indexOf(value.toLowerCase()) !== -1)
          }}
          renderItem={(item, isHighlighted) =>
            <div
              style={{ background: isHighlighted ? 'lightgray' : 'white' }}
              key={item.id}
            >
              {item.name + ' -- ' + item.country_code}
            </div>
          }
          renderMenu={children => (
            <div>
              {children}
            </div>
          )}
          value={this.state.value}
          onChange={(e) => this.setState({value: e.target.value})}
          onSelect={(value) => this.setState({value})}
        />
      </div>
    )
  }
}
