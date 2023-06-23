const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Start the development server
function serve(done) {
    browserSync.init({
        server: {
            baseDir: './',
        },
    });
    done();
}

// Reload the browser
function reload(done) {
    browserSync.reload();
    done();
}

// Watch for changes in main.js and style.css
function watchFiles() {
    gulp.watch('main.js', gulp.series(reload));
    gulp.watch('style.css', gulp.series(reload));
}

// Default task
gulp.task('default', gulp.series(serve, watchFiles));
