import React, { Component } from 'react'
import { Button } from 'react-materialize'
import Spaces from './Spaces'
import CSS from './Park.css'

class Park extends Component {
  render() {
    return (
      <div className="park">
        <Button icon="arrow_back" href="javascript:history.back()">Back</Button>
        <h5>Available spaces</h5>
        <Spaces />
      </div>
    )
  }
}

export default Park
