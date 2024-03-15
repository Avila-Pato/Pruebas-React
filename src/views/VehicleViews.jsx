/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import './VehicleViews.css'

function VehicleViews({vehicle}) {
  return (
    <div className="VehicleViews">
       <h1>{vehicle.name} </h1>
       <p>{vehicle.description}</p>
       <img src={vehicle.image} alt={vehicle.name + " image"} />
    </div>
  );
}

export default VehicleViews

