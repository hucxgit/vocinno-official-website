var gulp = require("gulp");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var connect = require("gulp-connect");

var port = 1499;

gulp.task("js", function() {
  return gulp.src("src/js/**/*.js")
    .pipe(uglify())
    .pipe(rename({suffix:".min"}))
    .pipe(gulp.dest("dist/js/"));
});

gulp.task("css", function() {
  return gulp.src("src/css/**/*.css")
    .pipe(gulp.dest("dist/css/"));
});

gulp.task("html", function(){
  return gulp.src("src/*.html")
    .pipe(gulp.dest("dist/"));
});

gulp.task("images", function() {
  return gulp.src("src/img/**/*.{png,jpg,jpeg,gif}")
    .pipe(gulp.dest("dist/img/"));
});

gulp.task('serve', function() {
  connect.server({
    root: "dist",
    port: port
  });
});


gulp.task("default",["js","css","html","images"]);
