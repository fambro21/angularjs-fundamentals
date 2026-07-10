// Karma configuration
// Generated on Wed Jul 01 2026 09:01:12 GMT-0400 (Eastern Daylight Time)

module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",

    // frameworks to use
    // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
    frameworks: ["jasmine"],

    // list of files / patterns to load in the browser
    files: [
      "node_modules/angular/angular.js",
      "node_modules/angular-mocks/angular-mocks.js",

      "2-databinding-first-app/1-hello-world/*.js",
      "2-databinding-first-app/1-hello-world/*.spec.js",
      "2-databinding-first-app/2-clock-example/js/*.js",
      "2-databinding-first-app/2-clock-example/js/*.spec.js",

      "3-scopes/*.js",
      "3-scopes/*.spec.js",

      "4-controllers/basic/*.js",
      "4-controllers/basic/*.spec.js",

      "4-controllers/inheritance/*.js",
      "4-controllers/inheritance/*.spec.js",

      "5-filters/1-builtin-filters/*.js",
      "5-filters/1-builtin-filters/*.spec.js",

      "5-filters/2-making-a-custom-filter/*.js",
      "5-filters/2-making-a-custom-filter/*.spec.js",

      "6-beginning-directives/first-directive/*.js",
      "6-beginning-directives/first-directive/*.spec.js",

      "6-beginning-directives/controller-scope-concept/*.js",
      "6-beginning-directives/controller-scope-concept/*.spec.js",

      "6-beginning-directives/controllers-vs-directives/*.js",
      "6-beginning-directives/controllers-vs-directives/*.spec.js",

      "7-built-in-directives/1-intro/*.js",
      "7-built-in-directives/1-intro/*.spec.js",

      "7-built-in-directives/2-nested-controller-anti-pattern/*.js",
      "7-built-in-directives/2-nested-controller-anti-pattern/*.spec.js",

      "7-built-in-directives/3-ng-app/*.js",
      "7-built-in-directives/3-ng-app/*.spec.js",

      "7-built-in-directives/4-ng-bind-template/*.js",
      "7-built-in-directives/4-ng-bind-template/*.spec.js",

      "7-built-in-directives/5-ng-change/*.js",
      "7-built-in-directives/5-ng-change/*.spec.js",

      "7-built-in-directives/6-ng-class/*.js",
      "7-built-in-directives/6-ng-class/*.spec.js",
    ],

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor
    preprocessors: {},

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
    reporters: ["progress"],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
    browsers: ["Chrome"],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser instances should be started simultaneously
    concurrency: Infinity,
  });
};
