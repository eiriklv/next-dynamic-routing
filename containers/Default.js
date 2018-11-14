import React from 'react';
import { Link } from '../routes';
import Head from '../components/head';
import Nav from '../components/nav';

import getSectionByType from '../sections';

class Default extends React.Component {
  render() {
    console.log('container props:', this.props);

    /**
     * Pull out what we need from the page data (sanity)
     */
    const { page = {} } = this.props;
    const { title = 'Unknown', sections = [] } = page;

    /**
     * Map the sections from the page data into the
     * corresponding section types we have available
     * and forward the data/props into each of them
     */
    const sectionElements = sections.map((section) => {
      const Section = getSectionByType(section._type);
      return <Section key={section._key} {...section} />;
    });

    return (
      <div>
        {/* NOTE: This is where you would add metadata for the page (https://github.com/zeit/next.js/#populating-head) */}
        <Head title="Home" />
        <Nav />

        <div className="hero">
          <h1 className="title">{title}</h1>
          <p className="description">
            To get started, edit <code>pages/index.js</code> and save to reload.
          </p>

          <div className="row">
            <Link route="/">
              <a className="card">
                <h3>Getting Started &rarr;</h3>
                <p>Learn more about Next on Github and in their examples</p>
              </a>
            </Link>
            <Link route="/resource">
              <a className="card">
                <h3>Examples &rarr;</h3>
                <p>
                  Find other example boilerplates on the{' '}
                  <code>create-next-app</code> site
                </p>
              </a>
            </Link>
            <Link route="/resource/10">
              <a className="card">
                <h3>Create Next App &rarr;</h3>
                <p>Was this tool helpful? Let us know how we can improve it</p>
              </a>
            </Link>
            <Link route="/doesnotexist">
              <a className="card">
                <h3>Create Next App &rarr;</h3>
                <p>Was this tool helpful? Let us know how we can improve it</p>
              </a>
            </Link>
          </div>
        </div>

        {/* NOTE: For every container you need to specify how/where to render the section elements */}
        <div>
          {sectionElements}
        </div>

        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title,
          .description {
            text-align: center;
          }
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .card {
            padding: 18px 18px 24px;
            width: 220px;
            text-align: left;
            text-decoration: none;
            color: #434343;
            border: 1px solid #9b9b9b;
          }
          .card:hover {
            border-color: #067df7;
          }
          .card h3 {
            margin: 0;
            color: #067df7;
            font-size: 18px;
          }
          .card p {
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
          }
        `}</style>
      </div>
    )
  }
}

export default Default
