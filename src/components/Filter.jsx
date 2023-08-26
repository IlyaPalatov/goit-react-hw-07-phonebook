import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../contactsSlice'; 

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <label className="filter">
      Filter contacts by name:
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        className="filter__input"
        style={{ marginTop: '10px' }}
      />
    </label>
  );
};

export default Filter;
