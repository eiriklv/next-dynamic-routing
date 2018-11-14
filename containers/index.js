export default function getPageContainerByType(type) {
  const containers = {
    'default': require('./Default').default,
    'empty': require('./Empty').default,
  };

  return containers[type] || containers['empty'];
}
