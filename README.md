# grunt-git-tag-parse

> Save a grunt variable containing a version string from a git tag, falling backon revision if a tag is not available

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-git-tag-parse --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-git-tag-parse');
```

## The "git_tag_parse" task

### Overview
In your project's Gruntfile, add a section named `git_tag_parse` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  git_tag_parse: {
    test: {
      options: {
        property:'someConfigName'
      },
    }
  },
});
```

### Options

#### options.property
Type: `String`
Default value: `'meta.revision'`

A string value representing the grunt config key to store the git tag into

#### options.revision
Type: `String`
Default value: `'HEAD'`

A string value denoting the git revision to interrogate.

#### options.number
Type: `Number`
Default value: `'6'`

A number representing the length passed to --short for cases where the current HEAD is not tagged and the plugin returns a git revision

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  git_tag_parse: {
    test: {
      options: {},
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
