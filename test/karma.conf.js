module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'lib/angular/angular.js',
      'lib/angular-mocks/angular-mocks.js',
      '*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    reporters: ['progress']

  });
};