module.exports = function (grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'bower_components/modernizr/modernizr.js',
                    'bower_components/jquery/jquery.js',
                    'bower_components/foundation/js/foundation.js',
                    'js/app.js'
                ],
                dest: './theme/js/scripts.js'
            }
        },

        uglify: {
            build: {
                src: './theme/js/scripts.js',
                dest: './theme/js/scripts.min.js'
            }
        },

        imagemin: {
            dynamic: {
                files: [
                    {
                        expand: true,
                        cwd: './images/',
                        src: ['**/*.{png,jpg,gif}'],
                        dest: './theme/img'
                    }
                ]
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);


};