import React from 'react';

const ServiceCard = ({service}) => {
  const {img, price, title} = service
  return (
    <div className="card w-96 bg-slate-800 shadow-xl">
      <figure><img src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-2xl text-orange-600 font-semibold">Price: ${price}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div> 
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;