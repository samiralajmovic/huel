# HAL

> Roger that Dave, I can build that for you.

## Synopsis

A highly opionated build and development environment for the web. A collocation of the following tools:

* webpack
* babel
* prettier
* eslint
* postcss

Which enables the following features:

* TODO

## Requirements

* Node > 8

## Usage

```
  Usage: hal [options]


  Options:

    -V, --version              output the version number
    -t, --template <template>  template for project. [string] [required]
    -e, --entry <entry>        entry for project. [string] [required]
    -o, --output <output>      output for project. [string] [required]
    -p, --port [port]          port webpack-dev-server listens on. [integer] [default: 3000]
    -w, --watch                start development server. [boolean] [default: false]
    -h, --help                 output usage information

  Examples:

    Production build
    $ hal -t src/index.html -e src/app.js -o dist

    Start webpack-dev-server
    $ hal -w -p 3001 -t src/index.html -e src/app.js -o dist
```

## Development

Follows [Conventional Commits](https://conventionalcommits.org/).

## Resources

* [Webpack concepts](https://webpack.js.org/concepts/output/)
* [Webpack development](https://webpack.js.org/guides/development/)
* [Webpack devserver configuration](https://webpack.js.org/configuration/dev-server)
* [Webpack production](https://webpack.js.org/guides/production/)
* [Webpack dashboard](https://github.com/FormidableLabs/webpack-dashboard)
