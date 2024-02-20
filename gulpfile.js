const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");

//live server
gulp.task("server", function () {
  browserSync.init({
    server: {
      baseDir: "src",
    },
  });

  //обновление html
  gulp.watch("src/*.html").on("change", browserSync.reload);
});

//sass to css
gulp.task("styles", function () {
  return gulp
    .src("src/sass/**/*.+(scss|sass)")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(rename({ suffix: ".min", prefix: "" }))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

//обновление css/sass
gulp.task("watch", function () {
  gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel("styles"));
});

//собирает все задачи
gulp.task("default", gulp.parallel("watch", "server", "styles"));
