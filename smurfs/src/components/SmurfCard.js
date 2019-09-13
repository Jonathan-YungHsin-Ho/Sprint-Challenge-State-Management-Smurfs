import React from 'react';

export default function SmurfCard(props) {
  return (
    <div className='smurf-card'>
      <h3>{props.smurf.name}</h3>
      {/* <img src={props.smurf.img} /> */}
      <h4>Age: {props.smurf.age}</h4>
      <h4>Height: {props.smurf.height}</h4>
    </div>
  );
}
