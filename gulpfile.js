var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyInline = require('gulp-minify-inline');

gulp.task('minify-inline', function() {
    return gulp.src('public_html/pages/*.html')
        .pipe(minifyInline())
        .pipe(gulp.dest('public_html/pages/'))
});

gulp.task('js', function() {
    return gulp.src('./scripts/*.js')
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./public_html/'))
});

gulp.task('default', gulp.series('js'));
