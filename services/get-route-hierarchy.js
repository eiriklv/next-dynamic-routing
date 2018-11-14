export default async function getRouteHierarchy() {
  return [
    { path: '/', page: 'frontpage', name: 'Frontpage' },
    { path: '/resource', page: 'subpage', name: 'Resource Overview' },
    { path: '/resource/:resourceId', page: 'subpage', name: 'Specific Resource' },
  ];
}
