import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import { setAmount } from '~/actions/index';

const Increment = ({ last, selectedAmount, selectAmount, increment }) => (
  <div
    className={classnames(last, increment.amount === selectedAmount)}
    onClick={() => selectAmount(increment.amount)}
  >
    <div className="value">
      { increment.printable }
    </div>
  </div>
);

const classnames = (isLast, isSelected) => cx({
  'increment': true,
  'is-last': isLast,
  'is-selected': isSelected,
});

const mapStateToProps = (state) => ({
  selectedAmount: state.amount,
});

const mapDispatchToProps = (dispatch) => ({
  selectAmount: (amount) => dispatch(setAmount({ amount }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Increment);
