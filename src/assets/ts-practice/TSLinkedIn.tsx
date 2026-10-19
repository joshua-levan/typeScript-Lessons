interface InventoryItem {
    displayName: string;
    inventoryType: string;
    trackingNumber: string;
    createDate: Date;
    originalCost: number
}

const getInventoryItem = (trackingNumber: string): InventoryItem => null

const TSLinkedIn = () => {
  return (
    <div>TSLinkedIn</div>
  )
}

export default TSLinkedIn