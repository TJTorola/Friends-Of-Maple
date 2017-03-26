import React from 'react';
import { connect } from 'react-redux';

import { AmountSelector, Form } from '~/components/index';
import { advanceToPayment, setNavigationPrev } from '~/actions/index';
import { COPY, INFO_FORM } from '~/config';
const copy = COPY.BODY.INFO;

const Info = ({ next, back }) => (
  <div id="info">
    <AmountSelector />
    <div className="header">
      <h2>{ copy.H2 }</h2>
      <span>{ copy.SPAN }</span>
    </div>
    <Form form={ INFO_FORM } />
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

const mapDispatchToProps = (dispatch) => ({
  next: () => dispatch(advanceToPayment()),
  back: () => dispatch(setNavigationPrev()),
});

export default connect(null, mapDispatchToProps)(Info);
