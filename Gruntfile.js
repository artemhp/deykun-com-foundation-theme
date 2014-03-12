module.exports = function (grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    './public/components/jquery/dist/jquery.js',
                    './public/components/modernizr/modernizr.js',
                    './public/components/foundation/js/foundation.js',
                    './js/app.js'
                ],
                dest: '../build/js/scripts.js'
            }
        },

        uglify: {
            build: {
                src: '../build/js/scripts.js',
                dest: '../build/js/scripts.min.js'
            }
        },

        smushit: {
            mygroup: {
                src: ['images/**/*.png','images/**/*.jpg'],
                dest: '../build/img'
            }
        }

    });


    grunt.loadNpmTasks('grunt-smushit');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('default', ['concat', 'uglify', 'smushit']);


};