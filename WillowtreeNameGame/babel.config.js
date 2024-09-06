module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    'babel-plugin-parameter-decorator',
    'react-native-reanimated/plugin',
  ],
  env: {
    production: {
      plugins: [
        [
          'babel-plugin-root-import',
          {
            rootPathPrefix: '~',
            rootPathSuffix: 'src',
          },
        ],
        'react-native-reanimated/plugin',
      ],
    },
  },
};
