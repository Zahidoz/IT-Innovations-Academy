import React from 'react'

const PaymentCard = ({title, price}) => {
  return (
    <div className="payment-card">
      <h2>{title}</h2>
      <h1>
        {price}<span>azn/ay</span>
      </h1>
      <button>Tedrise qosul</button>
    </div>
  );
}

export default PaymentCard