import React, { useState } from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import app from './firebase';
import ScratchCardViewer from './scratchCardViewer';

function CouponPage() {
  const [couponId, setCouponId] = useState('');
  const [couponData, setCouponData] = useState({});
  const [showQR,setShowQR] = useState(false);

  const handleSubmit = async () => {

    const dbRef = ref(getDatabase(app));
    get(child(dbRef,`/`)).then((snapshot) => {
    if (snapshot.exists()) {
      //console.log(snapshot.val());
      const retrieved_data = snapshot.val()
      const found = retrieved_data.find(element => element["CouponCode"] == couponId);
      if(found){
        console.log(found);
        setCouponData(found)
        setShowQR(true);
      }
    } else {
    console.log("No data available");
    }
    }).catch((error) => {
         console.error(error);
    });
  };

  return (
    (!showQR) ? (
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
    </div>
    ) :
    (
        <ScratchCardViewer Product={couponData} />
    )
  );
}

export default CouponPage;