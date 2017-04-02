import React from 'react';
import { connect } from 'react-redux';

import { postPledge, setNavigationPrev } from '~/actions/index';
import { AmountSelector, Form } from '~/components/index';
import { COPY, PAYMENT_FORM } from '~/config';
const copy = COPY.BODY.PAYMENT;

const Payment = ({ firstName, lastName, back, next }) => (
  <div id="payment">
    <AmountSelector />
    <div className="donor-info">
      <h2>{ copy.H2 }</h2>
      <span>{ `${firstName} ${lastName}`.trim() }</span>
    </div>
    <Form form={ PAYMENT_FORM } />
    <div className="nav-buttons">
      <div className="Button is-gray" onClick={back}>
        Back
      </div>
      <div className="Button is-green" onClick={next}>
        Next
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  firstName: state.information.firstName,
  lastName: state.information.lastName,
});

const mapDispatchToProps = (dispatch) => ({
  next: () => dispatch(postPledge()),
  back: () => dispatch(setNavigationPrev()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
