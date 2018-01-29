import React, { Component } from 'react'

export default class Fetcher extends Component {
  componentDidMount () {
    console.log('fetching', this.props.field)
    fetch(this.props.url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(this.props.field, responseJson)
      this.props.addFetchedDataToState(this.props.field, responseJson)
    })
  }

  render () {
    return null
  }
}
