// #docregion
module.exports = function(config){
  config.set({

    basePath : '..',

    files : [
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/core-js/client/shim.min.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/systemjs/dist/system.src.js',
      {pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},
      'test/karma_test_shim.js',
      {pattern: 'app/js/**/*.js', included: false, watched: true},
      {pattern: 'test/unit/**/*.js', included: false, watched: true},
      // #docregion html
      {pattern: 'app/js/**/*.html', included: false, watched: true}
    ],

    proxies: {
      // required for component assests fetched by Angular's compiler
      "/js": "/base/app/js"
    },
    // #enddocregion html

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome', 'Firefox'],

    plugins : [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
