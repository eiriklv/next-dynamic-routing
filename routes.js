const routes = require('next-routes');

/**
 * Create route structure
 */
module.exports = routes()
.add('zero', '/', 'index')
.add('one', '/:a', 'index')
.add('two', '/:a/:b', 'index')
.add('three', '/:a/:b/:c', 'index')
.add('four', '/:a/:b/:c/:d', 'index')
.add('five', '/:a/:b/:c/:d/:e', 'index')
.add('six', '/:a/:b/:c/:d/:e/:f', 'index')
.add('seven', '/:a/:b/:c/:d/:e/:f/:g', 'index')
.add('eigth', '/:a/:b/:c/:d/:e/:f/:g/:h', 'index')
.add('nine', '/:a/:b/:c/:d/:e/:f/:g/:h/:i', 'index')
.add('ten', '/:a/:b/:c/:d/:e/:f/:g/:h/:i/:j', 'index')
