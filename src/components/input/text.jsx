import React from 'react';
import { connect } from 'react-redux';

const TextInput = ({ printable, error, value, setValue, mask }) => {
  const handleChange = ({ target: { value }}) => (
    setValue((mask) ? mask(value) : value)
  );

  let input;

  return (
    <div className="Input" onClick={() => input.focus()}>
      <input onChange={handleChange} value={value} ref={el => input = el} required />
      <label>{ printable }</label>
      <span className="bar" />
      { error && <span className="error">{ error }</span> }
    </div>
  );
}

const mapStateToProps = (state, { getter }) => ({
  value: getter(state),
});

const mapDispatchToProps = (dispatch, { setter }) => ({
  setValue: (value) => dispatch(setter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);
