import {Component} from 'react'
import {GoTriangleUp, GoTriangleDown} from 'react-icons/go'
import InventoryItems from '../InventoryItems'
import './index.css'

class Inventory extends Component {
  state = {viewMore: false}

  view = () => this.setState(prev => ({viewMore: !prev.viewMore}))

  render() {
    const {items} = this.props
    const {displayName} = items
    const {viewMore} = this.state
    const buttonImg = viewMore ? (
      <GoTriangleUp size={20} />
    ) : (
      <GoTriangleDown size={20} />
    )

    return (
      <div>
        <div className="inventory-cart">
          <div className="in-card">
            <h1 className="heading">{displayName}</h1>
            <p className="length">{items.category.length}</p>
          </div>
          <button type="button" onClick={this.view} className="view-btn">
            {buttonImg}
          </button>
        </div>
        {viewMore && (
          <>
            <ul>
              {items.category.map(eachItem => (
                <InventoryItems inventoryDetails={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Inventory
