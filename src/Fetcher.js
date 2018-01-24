import React, { Component } from 'react'

export default class Fetcher extends Component {
  componentDidMount () {
    fetch('http://127.0.0.1:8000/api/players/', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.props.addPlayerDataToState(responseJson)
    })
  }

  render () {
    return null
  }
}
