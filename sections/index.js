export default function getPageSectionByType(type) {
  const sections = {
    'dynamic-section': require('./DynamicSection').default,
    'static-section': require('./StaticSection').default,
    'default': () => {
      console.log(`Unknown section of type ${type} specified`);
      return null;
    },
  };

  return sections[type] || sections['default'];
}
