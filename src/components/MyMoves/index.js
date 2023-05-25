import {Component} from 'react'
import Home from '../Home'
import MyMovesItems from '../MyMovesItems'
import './index.css'

class MyMoves extends Component {
  state = {myMovesList: []}

  componentDidMount() {
    this.getMovesList()
  }

  getMovesList = async () => {
    const url = 'http://test.api.boxigo.in/sample-data/'
    const response = await fetch(url)
    const data = await response.json()
    const updatedData = data.Customer_Estimate_Flow.map(each => ({
      movingFrom: each.moving_from,
      movingTo: each.moving_to,
      estimateId: each.estimate_id,
      propertySize: each.property_size,
      totalItems: each.total_items,
      distance: each.distance,
      movingOn: each.moving_on,
      oldFloorNo: each.old_floor_no,
      newFloorNo: each.new_floor_no,
      oldElevatorAvailability: each.old_elevator_availability,
      newElevatorAvailability: each.new_elevator_availability,
      oldParkingDistance: each.old_parking_distance,
      newParkingDistance: each.new_parking_distance,
      items: each.items,
    }))
    console.log(updatedData.movingFrom)
    this.setState({myMovesList: updatedData})
  }

  render() {
    const {myMovesList} = this.state
    return (
      <div className="container">
        <Home />
        <div className="card">
          <h1 className="moves-heading">My Moves</h1>
          <ul>
            {myMovesList.map(each => (
              <MyMovesItems details={each} key={each.estimateId} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MyMoves
