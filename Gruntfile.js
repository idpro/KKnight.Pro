'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    cssmin: {
      combine: {
        files: {
          'css/default.min.css': ['css/bootstrap.css', 'css/font-awesome.min.css', 'css/portfolio.css']
        }
      }
    },

    uglify: {
      target: {
        files: {
          'js/default.min.js': ['js/jquery.js', 'js/bootstrap.js', 'js/default.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['cssmin', 'uglify']);

}