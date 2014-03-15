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
                src: ['images/**/*.png', 'images/**/*.jpg'],
                dest: '../build/img'
            }
        },

        haml: {
            'ruby_html': {
                options: {
                    language: 'ruby'
                },
                files: {
                    '../build/home.html': './haml/home.haml'
                }
            }
        },

        sass: {
            dist: {
                files: [
                    {
                        '../build/css/app.css': 'scss/app.scss'
                    }
                ]
            },
            options: {
                compass: true
            }
        },

        watch: {
            haml: {
                files: ['haml/*.haml'],
                tasks: ['haml'],
                options: {
                    spawn: false
                }
            },
            sass: {
                files: ['scss/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        }

    });


    grunt.loadNpmTasks('grunt-smushit');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-haml');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['concat', 'uglify', 'smushit', 'haml', 'sass']);


};