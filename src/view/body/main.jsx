import React from 'react';
import { connect } from 'react-redux';

import Nav from './nav/main';
import Amount from './amount/main';
import Info from './info/main';
import Payment from './payment/main';
import Processing from './processing';
import Pledged from './pledged';
import {
  AMOUNT_PAGE,
  INFO_PAGE,
  PAYMENT_PAGE,
} from '~/reducers/nav';

const contentMap = {
  [AMOUNT_PAGE]: <Amount />,
  [INFO_PAGE]: <Info />,
  [PAYMENT_PAGE]: <Payment />,
};

const Body = ({ nav, processingPledge, pledged }) => {
  if (processingPledge) {
    return (
      <div id="body">
        <Processing />
      </div>
    );
  }

  if (pledged) {
    return (
      <div id="body">
        <Pledged />
      </div>
    );
  }

  return (
    <div id="body">
      <Nav />
      { contentMap[nav] }
    </div>
  );
};

const mapStateToProps = (state) => ({
  processingPledge: state.pledge.processing,
  pledged: !!state.pledge.id,
  nav: state.nav,
});

export default connect(mapStateToProps, null)(Body);
