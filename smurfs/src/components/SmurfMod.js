import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { putData, getData } from '../store/actions';

export default function SmurfMod() {
  const [smurfToUpdate, setSmurfToUpdate] = useState({});
  const [id, setId] = useState('');
  const dispatch = useDispatch();

  const data = useSelector(state => state.data);

  const handleSelect = e => {
    const targetSmurf = JSON.parse(e.target.value);
    setSmurfToUpdate({
      ...smurfToUpdate,
      name: targetSmurf.name,
      age: targetSmurf.age,
      height: targetSmurf.height,
    });
    setId(targetSmurf.id);
  };

  const handleChange = e => {
    setSmurfToUpdate({ ...smurfToUpdate, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(putData(id, smurfToUpdate));
    dispatch(getData());
  };

  return (
    <div className='smurf-form'>
      <h2>Upsmurf a Smurf!</h2>
      <select onChange={handleSelect}>
        <option>Select a Smurf!</option>
        {data.map(smurf => (
          <option key={smurf.id} value={JSON.stringify(smurf)}>
            {smurf.name}
          </option>
        ))}
      </select>
      <input
        type='text'
        name='name'
        value={smurfToUpdate.name}
        placeholder='...name'
        onChange={handleChange}
      />
      <input
        type='text'
        name='age'
        value={smurfToUpdate.age}
        placeholder='...age'
        onChange={handleChange}
      />
      <input
        type='text'
        name='height'
        value={smurfToUpdate.height}
        placeholder='...height'
        onChange={handleChange}
      />
      {/* <input
        type='text'
        name='image'
        placeholder='...image url (optional)'
        onChange={handleChange}
      /> */}
      <button onClick={handleSubmit}>Subsmurf!</button>
    </div>
  );
}
