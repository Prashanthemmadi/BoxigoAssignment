import {Component} from 'react'
import {AiOutlineArrowRight, AiFillHome} from 'react-icons/ai'
import {FaBoxes, FaTruckMoving} from 'react-icons/fa'
import {GiPathDistance} from 'react-icons/gi'
import {
  BsPencil,
  BsCheckSquareFill,
  BsFillExclamationTriangleFill,
} from 'react-icons/bs'
import Inventory from '../Inventory'
import './index.css'

class MyMovesItems extends Component {
  state = {viewMoveDetails: false}

  viewMove = () =>
    this.setState(prev => ({viewMoveDetails: !prev.viewMoveDetails}))

  render() {
    const {viewMoveDetails} = this.state
    const {details} = this.props
    const {
      movingFrom,
      movingTo,
      estimateId,
      propertySize,
      totalItems,
      distance,
      movingOn,
      oldFloorNo,
      newFloorNo,
      oldElevatorAvailability,
      newElevatorAvailability,
      oldParkingDistance,
      newParkingDistance,
      items,
    } = details
    return (
      <>
        <div className="address_details">
          <div className="address">
            <h1 className="from">From</h1>
            <p className="moving-from">{movingFrom}</p>
          </div>
          <div className="arrow">
            <AiOutlineArrowRight className="arrow-icon" size={20} />
          </div>
          <div className="address">
            <h1 className="from">To</h1>
            <p className="moving-from">{movingTo}</p>
          </div>
          <div className="address">
            <h1 className="request">Request#</h1>
            <p className="estimate">{estimateId}</p>
          </div>
        </div>
        <div className="order-details">
          <div className="cart">
            <AiFillHome size={25} className="icons" />
            <p className="property-size">{propertySize}</p>
          </div>
          <div className="cart">
            <FaBoxes size={25} className="icons" />
            <p className="property-size">{totalItems}</p>
          </div>
          <div className="cart">
            <GiPathDistance size={25} className="icons" />
            <p className="property-size">{distance}</p>
          </div>
          <div className="cart">
            <FaTruckMoving size={25} className="icons" />
            <p className="property-size">{movingOn}</p>
          </div>
          <BsPencil size={20} />
          <div className="cart">
            <BsCheckSquareFill size={25} className="icons" />
            <p className="property-size">Is flexible</p>
          </div>
          <button
            type="button"
            className="view-move-btn"
            onClick={this.viewMove}
          >
            View move details
          </button>
          <button type="button" className="quotes-btn">
            Quotes Awaiting
          </button>
        </div>
        <div className="disclaimer-cart">
          <BsFillExclamationTriangleFill
            size={15}
            className="disclaimer-icon"
          />
          <p className="disclaimer-para">
            <span className="disclaimer">Disclaimer: </span>Please update your
            move date before two days of shifting
          </p>
        </div>
        {viewMoveDetails && (
          <>
            <div className="additional-cart">
              <h1 className="additional-heading">Additional Information</h1>
              <button type="button" className="additional-btn">
                Edit Additional Info
              </button>
            </div>
            <p>Test Data</p>
            <div className="additional-cart">
              <h1 className="additional-heading">House Details</h1>
              <button type="button" className="additional-btn">
                Edit House Details
              </button>
            </div>
            <h1 className="existing-heading">Existing House Details</h1>
            <div className="existing-cart">
              <div>
                <h1 className="floor">Floor No.</h1>
                <p className="floor-no">{oldFloorNo}</p>
              </div>
              <div>
                <h1 className="floor">Elevator Available.</h1>
                <p className="floor-no">{oldElevatorAvailability}</p>
              </div>
              <div>
                <h1 className="floor">
                  Distance from Elevator / Staircase to truck.
                </h1>
                <p className="floor-no">{oldParkingDistance}</p>
              </div>
            </div>
            <h1 className="existing-heading">New House Details</h1>
            <div className="existing-cart">
              <div>
                <h1 className="floor">Floor No.</h1>
                <p className="floor-no">{newFloorNo}</p>
              </div>
              <div>
                <h1 className="floor">Elevator Available.</h1>
                <p className="floor-no">{newElevatorAvailability}</p>
              </div>
              <div>
                <h1 className="floor">
                  Distance from Elevator / Staircase to truck.
                </h1>
                <p className="floor-no">{newParkingDistance}</p>
              </div>
            </div>
            <div className="additional-cart">
              <h1 className="inventory-heading">Inventory Details</h1>
              <button type="button" className="additional-btn">
                Edit Inventory
              </button>
            </div>
            <ul>
              {items.inventory.map(item => (
                <Inventory items={item} key={item.id} />
              ))}
            </ul>
          </>
        )}
        <hr />
      </>
    )
  }
}

export default MyMovesItems
