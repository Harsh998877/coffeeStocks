import React, { useState } from 'react';

function CouponPage() {
  const [couponId, setCouponId] = useState('');
  const [couponData, setCouponData] = useState(null);

  const handleSubmit = async () => {
    // Make API call here with couponId
    try {
      const couponResp = await fetch('/your-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ couponId })
      });
      //success
      const couponInfo = await couponResp.json();
      setCouponData(couponInfo);
    } catch (error) {
      //failure
      console.log('Invalid coupon id. Please pay to drink... chutiya nhi hai hm free mei denge')
    }
  };

  return (
    <div>
      <input
        type="text"
        value={couponId}
        onChange={e => setCouponId(e.target.value)}
        placeholder="Enter coupon ID"
        style={{ margin: '10px', padding: '5px' }}
      />
      <button onClick={handleSubmit} style={{ padding: '5px 10px' }}>
        Submit
      </button>

      {
      
        /*Now show coupon data*/
        /* If coupon exists  */
        couponData && (
          <div>
            {/* Scratch code here */}
          </div>
        )
      
      }
      
    </div>
  );
}

export default CouponPage;