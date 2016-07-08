import organism from 'Editor/organism';

export default organism({
  preview: require('./preview.png'),
  component: require('./Component').default,
  props: {
    type: 'type1',
    molecules: {
      Main: {
        type: 'static'
      }
    },
    settings: {}
  }
});