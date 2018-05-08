import React, { Component } from 'react'
import Space from './Space'
import locations from './locations'

class Spaces extends Component {
  render() {
    return (
      locations.map(x => <Space location={x} />)
    )
  }
}

export default Spaces
