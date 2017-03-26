import React from 'react';
import { connect } from 'react-redux';

const TextInput = ({ placeholder, error, value, setValue }) => (
  <div className="Input">
    <input onChange={e => setValue(e.target.value)} value={value} required />
    <label>{ placeholder }</label>
    <span className="bar" />
    { error && <span className="error">{ error }</span> }
  </div>
);

const mapStateToProps = (state, { getter }) => ({
  value: getter(state),
});

const mapDispatchToProps = (dispatch, { setter }) => ({
  setValue: (value) => dispatch(setter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);
