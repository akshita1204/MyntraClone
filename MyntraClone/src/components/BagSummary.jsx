const BagSummary=({})=>
{
    const bagsummary={
        totalItem:3,
        totalMRP:9999,
        totalDiscount:1000,
        finalPayment:8999,

    }
 return (
    <div className="bag-summary">
      <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({bagsummary.totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{bagsummary.totalMRP}</span>
    </div>
    <div class="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{bagsummary.totalDiscount}</span>
    </div>
    <div Name="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{bagsummary.finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
    </div>
 );

}
export default BagSummary;