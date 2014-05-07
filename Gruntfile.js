'use strict';

var gruntTasks = function(grunt) {
	var LIVERELOAD_PORT = 35729;

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		bower: grunt.file.readJSON('bower.json'),
		secret: grunt.file.readJSON('secret.json'),

		env : {
			options : {
			},
			dist : {
				BROCCOLI_ENV : 'production',
				CRIMASI_ENV: 'production'
			},
			dev : {
				BROCCOLI_ENV : 'development',
				CRIMASI_ENV: 'development',
				DEBUG: '*'
			}
		},
		clean: {
			dist: {
				src: ["tmp/**/*", "public/**/*"]
			},
			dev: {
				src: ["tmp/**/*", "test/**/*"]
			}
		},
		broccoli: {
			dist: {
				dest: 'public',
				config: 'Brocfile.js'
			},
			dev: {
				dest: 'test',
				config: 'Brocfile.js'
			}
		},
		connect: {
      server: {
        options: {
          base: 'test',
          // This will inject live reload script into the html
          livereload: LIVERELOAD_PORT
        }
      }
    },
		open : {
			develop: {
				path: 'http://localhost:8000/'
			}
		},
		watch: {
			dev: {
				files: [ 'fonts/**/*.*', 'images/**/*.*', 'scripts/**/*.*', 'styles/**/*.*', 'templates/**/*.*', 'views/**/*.*' ],
				tasks: ['dev']
			},
			livereload: {
					files: ['test/**/*.*'],
					options: {
						livereload: LIVERELOAD_PORT,
					}
				}
		},
		concurrent: {
			watch: {
				tasks: ['watch:dev', 'watch:livereload'],
				options: { logConcurrentOutput: true }
			}
		},
		release: {
			options: {
				bump: true,
				file: 'package.json',
				add: true,
				commit: true,
				tag: true,
				push: true,
				pushTags: true,
				npm: false,
				npmtag: false,
				tagName: '<%= version %>',
				commitMessage: 'Release <%= version %>',
				tagMessage: 'Version <%= version %>',
				github: {
					repo: 'Crimasi/crimasi.com',
					usernameVar: 'GITHUB_USERNAME',
					passwordVar: 'GITHUB_PASSWORD'
				}
			}
		},
		sftp: {
			test: {
				files: {
					"./": "public/**/*"
				},
				options: {
					path: '<%= secret.path %>',
					srcBasePath: "public/",
					host: '<%= secret.host %>',
					port: '<%= secret.port %>',
					username: '<%= secret.username %>',
					password: '<%= secret.password %>',
					showProgress: true,
					createDirectories: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-env');
	grunt.loadNpmTasks('grunt-broccoli');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-release');
	grunt.loadNpmTasks('grunt-ssh');
	grunt.loadNpmTasks('grunt-open');

	grunt.registerTask('dist', ['env:dist', 'clean:dist', 'broccoli:dist:build']);
	grunt.registerTask('distribute', ['dist', 'release', 'sftp']);
	grunt.registerTask('dev', ['env:dev', 'clean:dev', 'broccoli:dev:build']);
	grunt.registerTask('develop', ['dev', 'connect', 'open:develop', 'concurrent:watch']);
	grunt.registerTask('default', ['dist'] );

};

module.exports = gruntTasks;