module.exports = function (grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'bower_components/modernizr/modernizr.js',
                    'bower_components/jquery/jquery.js',
                    'bower_components/foundation/js/foundation.min.js',
                    'js/app.js'
                ],
                dest: 'js/scripts.js'
            }
        },

        uglify: {
            build: {
                src: 'js/scripts.js',
                dest: 'js/scripts.min.js'
            }
        },

        connect: {
            server:{
                options: {
                    port: 8888,
                    keepalive: true
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: './images/',
                    src: ['**/*.png'],
                    dest: './images/'
                }]
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-connect');


    grunt.registerTask('default', ['concat', 'uglify']);



};