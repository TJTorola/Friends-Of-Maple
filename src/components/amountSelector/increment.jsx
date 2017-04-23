import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import { setPlanId, setNavigationAmountToInfo } from '~/actions/index';

const Increment = ({ last, selectedPlanId, selectPlanId, increment, navigate }) => {
  const handleClick = () => {
    selectPlanId(increment.id);
    navigate();
  }

  return (
    <div
      className={classnames(last, increment.id === selectedPlanId)}
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
  selectedPlanId: state.planId,
});

const mapDispatchToProps = (dispatch) => ({
  selectPlanId: (planId) => dispatch(setPlanId({ planId })),
  navigate: () => dispatch(setNavigationAmountToInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Increment);
