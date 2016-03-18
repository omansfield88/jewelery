module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'css/home.css' : 'scss/home.scss',
					'css/skin.css' : 'scss/skin.scss',
					'css/scallys.css' : 'scss/scallys.scss',
					'css/tumblrFeed.css' : 'scss/tumblrFeed.scss'
				}
			}
		},
		watch: {
			css: {
				files: 'scss/*.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}