module.exports = function (grunt) {
  // Configure main project settings
  grunt.initConfig({
    // Basic settings and info about our plugins
    pkg: grunt.file.readJSON("package.json"),

    // Name of plugin (plugin name without the "grunt-contrib-")

    // Sass compile to CSS
    sass: {
      compilesass: {
        files: {
          "assets/styles/main.css": "assets/styles/main.scss",
        },
      },
    },

    // CSS minification
    cssmin: {
      build: {
        src: "assets/styles/main.css",
        dest: "assets/styles/main.min.css",
      },
    },

    // Javascript minify
    uglify: {
      build: {
        files: {
          "assets/scripts/main.min.js": ["assets/scripts/main.js"],
        },
      },
    },

    // Autoprefixer
    autoprefixer: {
      dist: {
        files: {
          "assets/styles/main.css": "assets/styles/main.css",
        },
      },
    },

    // Watching files and waiting for changes
    watch: {
      watchjs: {
        files: ["assets/scripts/*.js"],
        tasks: ["uglify"],
      },
      watchcss: {
        files: ["assets/styles/main.scss", "assets/styles/**/*.scss"],
        tasks: ["sass", "autoprefixer", "cssmin"],
      },
    },
  });

  // Load plugins
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks("grunt-contrib-watch");

  // Run tasks
  grunt.registerTask("default", [
    "sass",
    "cssmin",
    "uglify",
    "autoprefixer",
    "watch",
  ]);
};
