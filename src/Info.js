import React, { Component} from 'react'
import CSS from './Info.css'
import { Button, Row, Input } from 'react-materialize'

class Info extends Component{

  render() {
    return (
        <div>
          <Button icon="arrow_back" href="javascript:history.back()">Back</Button>
          <h5 className='header'> Space info </h5>
          <div>
            <img src='http://www.dream-yard.com/images/paverstone-driveway.jpg'/>

            <Row>
              <Input s={12} type='select' label="Select vehicle" defaultValue='2'>
                <option value='1'>QW12 ASD</option>
                <option value='2'>AS3 HYA</option>
              </Input>
            </Row>

            <Button waves='light' className='header'>Rent this drive</Button>
          </div>
        </div>
    )
  }
}

export default Info
