import './index.css'

const InventoryItems = props => {
  const {inventoryDetails} = props
  const {displayName} = inventoryDetails

  return (
    <>
      <h1 className="inventory-display">{displayName}</h1>
    </>
  )
}

export default InventoryItems
