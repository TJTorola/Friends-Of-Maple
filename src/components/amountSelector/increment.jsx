import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import { setAmount, setNavigationAmountToInfo } from '~/actions/index';

const Increment = ({ last, selectedAmount, selectAmount, increment, navigate }) => {
  const handleClick = () => {
    selectAmount(increment.amount);
    navigate();
  }

  return (
    <div
      className={classnames(last, increment.amount === selectedAmount)}
      onClick={handleClick}
    >
      <div className="value">
        { increment.printable }
      </div>
    </div>
  );
};

const classnames = (isLast, isSelected) => cx({
  'increment': true,
  'is-last': isLast,
  'is-selected': isSelected,
});

const mapStateToProps = (state) => ({
  selectedAmount: state.amount,
});

const mapDispatchToProps = (dispatch) => ({
  selectAmount: (amount) => dispatch(setAmount({ amount })),
  navigate: () => dispatch(setNavigationAmountToInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Increment);
