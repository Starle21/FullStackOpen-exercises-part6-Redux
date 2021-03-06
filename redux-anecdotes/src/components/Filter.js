import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../reducers/filterReducer';

const Filter = props => {
  const handleChange = event => {
    const filterString = event.target.value;
    props.setFilter(filterString);
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};
const mapDispatchToProps = {
  setFilter,
};
const ConnectedFilter = connect(null, mapDispatchToProps)(Filter);
export default ConnectedFilter;
