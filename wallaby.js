module.exports = function(wallaby) {
  // There is a weird error with the mui and mantra.
  // See: https://goo.gl/cLH8ib
  // Using require here seems to be the error.
  // Renaming it into `load` just fixed the issue.
  var load = require;

  return {
    files: [
      'src/client/modules/**/components/*.tsx',
      'src/client/modules/**/actions/*.ts',
      'src/client/modules/**/containers/*.ts', 'client/modules/**/libs/*.ts'
    ],
    tests: [ 'src/client/modules/core/actions/tests/*.ts' ],
    compilers: {
      '**/*.js*': wallaby.compilers.babel({
        babel: load('babel-core'),
        presets: [ 'es2015', 'stage-2', 'react' ]
      }),
      '**/*.ts*': wallaby.compilers.typeScript({module: "amd"})
    },
    env: {
      type: 'node'
    },
    testFramework: 'mocha',
    setup: function() {
      global.React = require('react');
    }
  };
};
