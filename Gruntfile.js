module.exports = function (grunt) {
  'use strict';

  var path      = require('path');
  var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

  var folderMount = function folderMount(connect, point) {
    return connect.static(path.resolve(point));
  };

  grunt.initConfig({
    livereload: {
      port: 35729 // Default livereload listening port.
    },
    connect: {
      livereload: {
        options: {
          port: 4001,
          middleware: function(connect, options) {
            return [lrSnippet, folderMount(connect, '.')]
          }
        }
      }
    },
    sass: {
      dist: {
        files: {
          'public/css/default.css': 'app/assets/stylesheets/default.scss'
        }
      },
      dev: {
        options: {
          style: 'expanded',
          lineNumbers: true
        },
        files: {
          'public/css/default.css': 'app/assets/stylesheets/default.scss'
        }
      }
    },
    regarde: {
      jade: {
        files: 'views/**/*.jade',
        tasks: ['livereload']
      },
      js: {
        files: 'public/js/**/*.js',
        tasks: ['uglify', 'livereload'],
        events: true
      },
      css: {
        files: 'app/assets/stylesheets/*.scss',
        tasks: ['sass', 'livereload'],
        events: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-livereload');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('run', ['livereload-start', 'connect', 'regarde']);

};
