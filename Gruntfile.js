module.exports = function(grunt) {

    grunt.initConfig({

        package: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                mangle: false,
                banner: '/*! <%= package.name %> by <%= package.author %> created on <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['packages/main.js', 'packages/publisher.js', 'packages/subscriber.js', 'packages/constructor.js'],
                dest: 'dist/<%= package.buildName %>.min.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);

};