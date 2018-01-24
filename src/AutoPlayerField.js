import React, { Component } from 'react'

import Autocomplete from 'react-autocomplete'

export default class AutoPlayerField extends Component {
  renderPlayer = (player, value) => {
    return (player.name.toLowerCase().indexOf(value.toLowerCase()) !== -1)
  }

  render () {
    return (
      <Autocomplete
        wrapperStyle='block'
        getItemValue={(item) => item.name}
        items={this.props.players}
        shouldItemRender={(player, value) => this.renderPlayer(player, value)}
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
        value={this.props.value}
        onChange={(e) => {
          this.props.updateValue(this.props.position,e.target.value)}
        }
        onSelect={(value) => this.props.updateValue(this.props.position,value)}
      />
    )
  }
}
