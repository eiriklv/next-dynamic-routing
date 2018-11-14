import React from 'react';
import { Link } from '../routes';
import Head from '../components/head';
import Nav from '../components/nav';

import getSectionByType from '../sections';

class Empty extends React.Component {
  render() {
    console.log('container props:', this.props);
    const { page = {} } = this.props;
    const { title = 'Unknown', sections = [] } = page;

    const sectionElements = sections.map((section) => {
      const Section = getSectionByType(section._type);
      return <Section key={section._key} {...section} />;
    });

    return (
      <div>
        <h1>{title}</h1>
        <div>{sectionElements}</div>
      </div>
    );
  }
}

export default Empty;
