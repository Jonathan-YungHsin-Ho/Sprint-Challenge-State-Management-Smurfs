import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getData } from '../store/actions';

import SmurfCard from './SmurfCard';

export default function SmurfList() {
  const data = useSelector(state => state.data);
  const isFetching = useSelector(state => state.isFetching);

  const dispatch = useDispatch();

  useEffect(() => dispatch(getData()), []);

  return (
    <div className='smurfs-wrapper'>
      {data.map(smurf => (
        <SmurfCard key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
}
