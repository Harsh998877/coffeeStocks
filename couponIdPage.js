import React, { useState } from 'react';

function CouponPage() {
  const [couponId, setCouponId] = useState('');

  const handleSubmit = async () => {
    // Make API call here with couponId
    


  };

  return (
    <div>
      <input
        type="text"
        value={couponId}
        onChange={e => setCouponId(e.target.value)}
        placeholder="Enter coupon ID"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default CouponPage;