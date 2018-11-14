import React from 'react';

import getRouteHierarchy from '../services/get-route-hierarchy';
import getPageById from '../services/get-page-by-id';
import getRouteByPathFromHierarchy from '../services/get-route-by-path-from-hierarchy';

import getPageContainerByType from '../containers';

import { Provider as RouteProvider } from '../higher-order-components/route-context';

/**
 * NOTE: This is the root component of the application that
 * does all of the actual routing in terms of which data is loaded
 */
class Root extends React.Component {
  static async getInitialProps({ asPath }) {
    /**
     * Fetch route hierarchy from Sanity
     */
    const hierarchy = await getRouteHierarchy();

    /**
     * 2. Get the correct route and params (if a match exists)
     *
     * NOTE: This fetches the route config from sanity behind the scenes
     * and uses that to find the appropriate page/data to load,
     * which means that we're not actually doing the routing through next.js
     */
    const route = await getRouteByPathFromHierarchy(hierarchy, asPath);

    /**
     * TODO: Remove this logging (just for debuging)
     */
    if (route) {
      console.log('got match:', route.name);
    } else {
      console.log('no match - show 404 (or redirect)');
    }

    /**
     * Pull out the id for the page in the matching route
     */
    const { page: pageId } = route || {};

    /**
     * 3. Get the correct page setup from sanity
     * (default to error / 404)
     */
    const page = await getPageById(pageId ? pageId : 'error')

    /**
     * 4. Return the data we need to render the correct page based on the route
     */
    return { route, page };
  }

  render() {
    console.log('root props:', this.props);
    const { page = {}, route = {} } = this.props;
    const { slug = {} } = page;
    const { current = '' } = slug;

    /**
     * Map the page data into the correct component tree
     * (set the params as context? this way any module can access the params if they need to)
     */
    const Container = getPageContainerByType(current);

    /**
     * Wrap with all the functionality we need (router, params, apollo, redux, etc)
     */
    return (
      <RouteProvider route={route}>
        <Container {...this.props} />
      </RouteProvider>
    );
  }
}
export default Root;
