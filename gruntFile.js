module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            lib: {
                src: "./webinstaller.js"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint']);
}
