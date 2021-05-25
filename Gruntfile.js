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
        src: "src/css/main.css",
        dest: "src/css/main.min.css",
      },
    },

    // Javascript minify
    uglify: {
      build: {
        files: {
          "src/js/main.min.js": ["src/js/main.js"],
        },
      },
    },

    // Autoprefixer
    autoprefixer: {
      dist: {
        files: {
          "src/css/main.css": "src/css/main.css",
        },
      },
    },
    // Copy
    copy: {
      main: {
          files: [
          {
              cwd: 'src',
              expand: true,
              src: ['*.html'],
              dest: 'public/'
          },
          {
              cwd: 'src/js',
              expand: true,
              src: ['main.min.js'],
              dest: 'public/js'
          },
          {
              cwd: 'src/css',
              expand: true,
              src: ['main.min.css'],
              dest: 'public/css'
          },
          {
            cwd: 'src/svg',
            expand: true,
            src: ['*.svg'],
            dest: 'public/svg'
          },
          {
              cwd: 'src/img',
              expand: true,
              src: ['*'],
              dest: 'public/img'
          }]
      }
  },

    // Watching files and waiting for changes
    watch: {
      watchjs: {
        files: ["src/js/*.js"],
        tasks: ["uglify"],
      },
      watchcss: {
        files: ["src/scss/**/*.scss"],
        tasks: ["sass", "autoprefixer", "cssmin"],
      },
    },

    // BrowserSync
    browserSync: {
      dev: {
          bsFiles: {
              src : [
                  'src/css/*.css',
                  'src/js/*.js',
                  'src/*.html'
              ]
          },
          options: {
              watchTask: true,
              server: 'src'
          }
      }
  }
  });

  // Load plugins
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browser-sync');
  

  // Run tasks
  grunt.registerTask("default", [
    "browserSync",
    "sass",
    "cssmin",
    "uglify",
    "autoprefixer",
    "copy",
    "watch",
  ]);
};
