# documentation-loader

[![Build Status](https://travis-ci.org/domjtalbot/documentation-loader.svg?branch=master)](https://travis-ci.org/domjtalbot/documentation-loader) [![npm version](https://badge.fury.io/js/documentation-loader.svg)](https://badge.fury.io/js/documentation-loader)
> Webpack loader for [documentation](https://github.com/documentationjs/documentation)

## [Install](https://www.npmjs.com/package/documentation-loader)

```console
$ npm install documentation-loader --save-dev
```

## Usage
[Documentation: using loaders](http://webpack.github.io/docs/using-loaders.html)

Within your webpack configuration, you'll need to add the documentation-loader to the list of modules:

```javascript
module.exports = {
  // ...
  module: {
      postLoaders: [
          {
              test: [/\.js$/],
              exclude: /(node_modules|bower_components)/,
              loader: 'documentation'
          }
      ]
  }
  // ...
}
```

## Configuration
```javascript
module.exports = {
  // ...
  documentation: {
      // Output location
      // Default: './documentation'
      output: String,

      // Infer links to github in documentation
      // Default: false
      github: Boolean,

      // Output format
      // Default: 'json'
      format: String,

      // Configuration file
      // Default: null
      config: String,

      // Specify a theme
      // Default: null
      theme: String,

      // Shallow mode turns off dependency resolution, only processing the specified files
      // Default: false
      shallow: Boolean,

      // File/files to parse
      // Default: Webpack input
      entry: String,
  },
  // ...
}
```

## Example webpack.config
```javascript
module.exports = {
    entry: {
        app: './app.js'
    },
    output: {
        path: './public',
    },
    module: {
        preLoaders: [
            {
                test: [/\.js$/],
                exclude: /(node_modules|bower_components)/,
                loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: [/\.js$/],
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ],
        postLoaders: [
            {
                test: [/\.js$/],
                exclude: /(node_modules|bower_components)/,
                loader: 'documentation'
            }
        ]
    }
    documentation: {
            entry: './assets/js/*.js .assets/js/**/*.js',
            github: true,
            format: 'html',
            output: './documentation/js'
    }
};
```
