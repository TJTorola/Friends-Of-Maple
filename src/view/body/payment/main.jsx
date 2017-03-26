import React from 'react';
import { connect } from 'react-redux';

import { AmountSelector } from '~/components/index';
import { COPY } from '~/config';
const copy = COPY.BODY.PAYMENT;

const Payment = ({ firstName, lastName }) => (
  <div id="payment">
    <AmountSelector />
    <div className="donor-info">
      <h2>{ copy.H2 }</h2>
      <span>{ `${firstName} ${lastName}` }</span>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  firstName: state.information.firstName,
  lastName: state.information.lastName,
});

export default connect(mapStateToProps)(Payment);
