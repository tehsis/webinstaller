module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            lib: {
                src: "./webinstaller.js"
            }
        },
        uglify: {
            lib: {
                src: "./webinstaller.js",
                dest: "./webinstaller.min.js"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint']);
}
