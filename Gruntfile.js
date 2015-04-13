'use strict';

/**
* Project Configuration
*/

module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        project: {
            src: 'src',
            filename: 'enums',
            dist: 'dist',
            test: 'test',
            core: ['<%= project.src %>/<%= project.filename %>.js']
        },

        banner: '/*! <%= pkg.title %> v<%= pkg.version %> | (c) <%= grunt.template.today(\'yyyy\') %> @renehernandez | <%= pkg.homepage %>*/\n',

        jshint: {
            gruntfile: 'Gruntfile.js',
            files: ['<%= project.core %>'],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        watch: {
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: ['jshint:gruntfile']
            },
            js: {
                files: '<%= jshint.files %>',
                tasks: ['jshint', 'uglify']
            }
        },

        clean: {
            dist: ['dist']
        },

        copy: {
            test: {
                src: '<%= project.src %>/<%= project.filename %>',
                dest: '<%= project.test %>/<%= project.filename %>'
            }
        }

    });

    grunt.registerTask('default', [
        'clean',
        'jshint',
        'copy'
    ]);
};
