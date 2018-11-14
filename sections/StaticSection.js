import React from 'react';
import { Link } from '../routes';

class StaticSection extends React.Component {
  render() {
    console.log('section props:', this.props);

    return (
      <div>
        Static Section
      </div>
    )
  };
}

export default StaticSection;
