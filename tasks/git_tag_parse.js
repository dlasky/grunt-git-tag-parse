/*
 * grunt-git-tag-parse
 * https://github.com/dlasky/grunt-git-tag-parse
 *
 * Copyright (c) 2014 Dan Lasky
 * Licensed under the MIT license.
 */

'use strict';

var when = require('when');

module.exports = function(grunt) {

  function spawn(options) {
    var def = when.defer();
    grunt.util.spawn(options, function(err, result, code) {
      if (err) { def.reject(err); }
      if (result) { def.resolve(String(result)); }
    });
    return def.promise;
  }

  grunt.registerMultiTask('git_tag_parse', 'write the current git tag to a variable', function() {

    var options = this.options({
      number: 6,
      revision: "HEAD",
      property: "meta.revision"
    }),
    done = this.async();

    function writeResult(data) {
      var def = when.defer(),
        dirty = data[0].split("\n"),
        tagRev = data[1],
        output = "";
      
      output += tagRev;

      if (dirty.length) {
        output += " (dirty)";
      }

      grunt.log.ok(output);
      grunt.config.set(options.property, output);
      def.resolve(output);
      return def.promise;
    }

    when.some([
      spawn({
        cmd:"git",
        args: ["status","--porcelain"]
      }),
      spawn({
        cmd:"git",
        args: ["describe", "--exact-match", options.revision]
      }),
      spawn({
        cmd:"git",
        args: ["rev-parse", "--verify", "--short=" + options.number, options.revision]
      })
    ], 2)
    .then(writeResult)
    .done(done);

  });
};
