import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

const TextInput = ({ printable, errors, value, setValue, mask }) => {
  const handleChange = ({ target: { value }}) => (
    setValue((mask) ? mask(value) : value)
  );

  let input;

  return (
    <div className={classnames(errors)} onClick={() => input.focus()}>
      <input onChange={handleChange} value={value} ref={el => input = el} required />
      <label>{ printable }</label>
      <span className="bar" />
      { errors && <span className="error">{ errors[0] }</span> }
    </div>
  );
}

const classnames = (errors) => cx(
  'Input',
  { 'has-error': errors }
);

const mapStateToProps = (state, { getter, errors }) => ({
  value: getter(state),
  errors: errors(state),
});

const mapDispatchToProps = (dispatch, { setter }) => ({
  setValue: (value) => dispatch(setter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);
