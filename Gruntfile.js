var path = require('path');

var stylesheetsDir = 'assets/css';

module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		bowercopy: {
			options: {
				srcPrefix: 'bower_components'
			},
			scripts: {
				files: {
					'public/scripts/vendor/jquery.min.js': 'jquery/jquery.min.js',
					'public/scripts/vendor/modernizr.js': 'modernizr/modernizr.js'
				}
			}
		},
		connect: {
			server: {
				options: {
					port: 9001,
					base: 'public/'
				}
			}
		},
		concat: {
			js: {
				options: {
					separator: ';'
				},
				src: [
					'dev/js/*.js'
				],
				dest: 'public/scripts/main.min.js'
			},
		},
		uglify: {
			options: {
				mangle: false
			},
			js: {
				files: {
					'public/scripts/main.min.js': ['dev/js/app.js']
				}
			}
		},
		sass: {                              // Task
			dist: {                            // Target
				options: {                       // Target options
					style: 'compressed'
				},
				files: {                         // Dictionary of files
					'public/styles/main.css': 'dev/css/main.scss'      // 'destination': 'source'
				}
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 5 version', 'ie 7', 'ie 8', 'ie 9']
			},
			no_dest: {
				src: 'public/styles/main.css'
			}
		},
		uncss: {
			dist: {
				files: {
					'public/styles/main.css' : ['public/index.html']
				}
			}
			// Add classes and id's that you want to ignore here.
			// options: {
			// 	ignore: ['#loading-bar*']
			// }
		},
		watch: {
			js: {
				files: ['dev/js/*.js'],
				tasks: ['concat:js', 'uglify:js'],
				options: {
					livereload: true
				}
			},
			css: {
				files: ['dev/css/*.scss'],
				tasks: ['sass', 'autoprefixer'],
				options: {
					livereload: true
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-bowercopy');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-uncss');
	// Run the server and watch for file changes
	grunt.registerTask('default', ['connect',  'concat', 'uglify', 'sass', 'autoprefixer', 'watch']); // Build Tasks
	grunt.registerTask('clean', ['uncss']); // Deploy build tasks
	grunt.registerTask('inject', ['bowercopy']); // Inject Bower and SVG tools
};