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
          "styles/main.css": "styles/main.scss",
        },
      },
    },

    // CSS minification
    cssmin: {
      build: {
        src: "styles/main.css",
        dest: "styles/main.min.css",
      },
    },

    // Javascript minify
    uglify: {
      build: {
        files: {
          "scripts/main.min.js": ["scripts/main.js"],
        },
      },
    },

    // Autoprefixer
    autoprefixer: {
      dist: {
        files: {
          "styles/main.css": "styles/main.css",
        },
      },
    },

    // Watching files and waiting for changes
    watch: {
      watchjs: {
        files: ["scripts/*.js"],
        tasks: ["uglify"],
      },
      watchcss: {
        files: ["styles/main.scss", "styles/**/*.scss"],
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
