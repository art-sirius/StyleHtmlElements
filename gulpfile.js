var gulp        = require('gulp'),
	less        = require('gulp-less'),
	browserSync = require('browser-sync');

gulp.task('less', function () {
  return gulp.src('less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "."
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'less'], function() {
	gulp.watch('less/**/*.less', ['less']);
	gulp.watch('*.html', browserSync.reload);
	gulp.watch('js/**/*.js', browserSync.reload);
});