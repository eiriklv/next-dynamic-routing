import pathToRegexp from 'path-to-regexp';

export default function getRouteByPathFromHierarchy(hierarchy, parsedPath) {
  /**
   * Find the first matching route (if any)
   */
  const match = hierarchy
  .filter(({ path }) => pathToRegexp(path).exec(parsedPath))
  .map((entry) => {
    let keys = [];
    const values = pathToRegexp(entry.path, keys).exec(parsedPath);
    return { ...entry, values, keys };
  })[0];

  /**
   * Abort if no matching route found
   */
  if (!match) {
    return undefined;
  }

  /**
   * Find any route params specified
   */
  const params = match.keys.reduce((output, key, i) => {
    return { ...output, [key.name]: match.values[i + 1] };
  }, {});

  /**
   * Return the matching route data and params
   */
  return { ...match, params };
}
