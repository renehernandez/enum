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
            specs: 'specs',
            core: ['<%= project.src %>/<%= project.filename %>.js']
        },

        banner: '/*! <%= pkg.title %> v<%= pkg.version %> | (c) <%= grunt.template.today(\'yyyy\') %> @renehernandez | <%= pkg.homepage %> */\n',

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
            specs: {
                src: '<%= project.src %>/<%= project.filename %>.js',
                dest: '<%= project.specs %>/<%= project.filename %>.js'
            }
        },

        concat: {
            dist: {
                src: ['<%= project.core %>'],
                dest: '<%= project.dist %>/<%= project.filename %>.js'
            },
            options: {
                stripBanners: true,
                banner: '<%= banner %>'
            }
        },

        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= project.dist %>/<%= project.filename %>.js',
                dest: '<%= project.dist %>/<%= project.filename %>.min.js'
            }
        },

        jasmine: {
            src: 'src/**/*.js',
            options: {
                specs: 'specs/**/*.js'
            }
        }

    });

    grunt.registerTask('default', [
        'clean',
        'jshint',
        'jasmine',
        'concat',
        'uglify'
    ]);
};
