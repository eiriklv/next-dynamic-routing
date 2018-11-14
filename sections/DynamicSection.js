import React from 'react';
import { Link } from '../routes';

import { connect as connectRoute } from '../higher-order-components/route-context';

class DynamicSection extends React.Component {
  render() {
    console.log('section props:', this.props);

    return (
      <div>
        Dynamic Section {JSON.stringify(this.props.route.params)}
      </div>
    )
  }
}

function mapContextToProps(route) {
  return {
    route: route,
  };
}

export default connectRoute(
  mapContextToProps
)(DynamicSection);
