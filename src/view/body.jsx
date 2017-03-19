import React from 'react';

const Nav = () => (
  <div className="nav">
    <div className="step is-active">Amount</div>
    <div className="step">Info</div>
    <div className="step">Payment</div>
  </div>
);

const Body = () => (
  <div id="body">
    <Nav />
  </div>
);

export default Body;
