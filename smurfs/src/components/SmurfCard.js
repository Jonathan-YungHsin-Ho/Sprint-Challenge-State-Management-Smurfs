import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteSmurf, getData } from '../store/actions';

export default function SmurfCard(props) {
  const dispatch = useDispatch();
  const isDeleting = useSelector(state => state.isDeleting);

  const handleDelete = e => {
    e.preventDefault();
    dispatch(deleteSmurf(props.smurf.id));
  };

  useEffect(() => dispatch(getData()), [isDeleting]);

  return (
    <div className='smurf-card'>
      <h3>{props.smurf.name}</h3>
      {/* <img src={props.smurf.img} /> */}
      <h4>Age: {props.smurf.age}</h4>
      <h4>Height: {props.smurf.height}</h4>
      <button onClick={handleDelete} className='card-button'>
        Desmurf!
      </button>
    </div>
  );
}
