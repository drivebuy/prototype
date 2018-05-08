import React, { Component } from 'react'
import { Card } from 'react-materialize'

class Space extends Component {
  render() {
    var location = this.props.location
    return (
      <Card className='blue-grey darken-1' textClassName='white-text' title={location.name} actions={[<a href='#'>Park here</a>]}>
        This space is available to park {location.availability}. It will cost you ${location.price} to park here!
      </Card>
    )
  }
}

export default Space
