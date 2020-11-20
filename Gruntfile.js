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
          "src/css/main.css": "src/scss/main.scss",
        },
      },
    },

    // CSS minification
    cssmin: {
      build: {
        src: "src/scss/main.css",
        dest: "dist/css/main.min.css",
      },
    },

    // Javascript minify
    uglify: {
      build: {
        files: {
          "dist/js/main.min.js": ["src/js/main.js"],
        },
      },
    },

    // Autoprefixer
    autoprefixer: {
      dist: {
        files: {
          "dist/css/main.css": "src/css/main.css",
        },
      },
    },

    // Watching files and waiting for changes
    watch: {
      watchjs: {
        files: ["src/js/*.js"],
        tasks: ["uglify"],
      },
      watchcss: {
        files: ["src/scss/main.scss", "src/scss/**/*.scss"],
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
