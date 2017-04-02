import React from 'react';
import { connect } from 'react-redux';

import Nav from './nav/main';
import Amount from './amount/main';
import Info from './info/main';
import Payment from './payment/main';
import Processing from './processing';
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

const Body = ({ nav, processingPledge }) => (
  <div id="body">
    <Nav />
    {
      processingPledge
      ? <Processing />
      : contentMap[nav]
    }
  </div>
);

const mapStateToProps = (state) => ({
  processingPledge: state.pledge.processing,
  nav: state.nav,
});

export default connect(mapStateToProps, null)(Body);
