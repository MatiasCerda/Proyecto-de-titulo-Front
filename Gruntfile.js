/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-war');
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		war: {
			target: {
				options: {
					war_dist_folder: 'war',
					war_name: 'monitorContabilizacion-front'
				},
				files: [
					{
						expand: true,
						cwd: 'dist',
						src: ['**'],
						dest: ''
					},
					{ src: 'jboss-web.xml', dest: '/WEB-INF/jboss-web.xml', nonull: true }
				]
			}
		}
	});
	grunt.registerTask('default', ['war']);
};
